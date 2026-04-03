#!/usr/bin/env node
/**
 * Generates thumbhashes and dimensions for all images in the public/ folder.
 * Output is written to assets/data/thumbhashes.json.
 * Run with: npm run thumbhash
 *
 * Incremental: already-processed images are skipped unless --force is passed.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { rgbaToThumbHash } from 'thumbhash';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PUBLIC_DIR = join(ROOT, 'public');
const OUTPUT_FILE = join(ROOT, 'assets/data/thumbhashes.json');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);
const FORCE = process.argv.includes('--force');

function findImages(dir) {
	const results = [];
	for (const entry of readdirSync(dir)) {
		const fullPath = join(dir, entry);
		if (statSync(fullPath).isDirectory()) {
			results.push(...findImages(fullPath));
		} else if (IMAGE_EXTENSIONS.has(extname(entry).toLowerCase())) {
			results.push(fullPath);
		}
	}
	return results;
}

async function processImage(imagePath) {
	const meta = await sharp(imagePath).metadata();
	const width = meta.width ?? 0;
	const height = meta.height ?? 0;

	const { data, info } = await sharp(imagePath)
		.resize(100, 100, { fit: 'inside' })
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });

	const hashBytes = rgbaToThumbHash(info.width, info.height, data);
	const hash = Buffer.from(hashBytes).toString('base64');

	return { hash, width, height };
}

async function main() {
	const existing = existsSync(OUTPUT_FILE) ? JSON.parse(readFileSync(OUTPUT_FILE, 'utf-8')) : {};
	const images = findImages(PUBLIC_DIR);
	const result = FORCE ? {} : { ...existing };

	let added = 0;
	let skipped = 0;
	let failed = 0;

	for (const imagePath of images) {
		const key = '/' + relative(PUBLIC_DIR, imagePath);

		if (!FORCE && result[key]?.hash) {
			skipped++;
			continue;
		}

		try {
			result[key] = await processImage(imagePath);
			console.log(`  ✓ ${key}`);
			added++;
		} catch (err) {
			console.error(`  ✗ ${key}: ${err.message}`);
			failed++;
		}
	}

	writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

	console.log(`\nDone: ${added} added, ${skipped} skipped, ${failed} failed`);
	console.log(`Total in map: ${Object.keys(result).length}`);
	console.log(`Output: ${OUTPUT_FILE}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
