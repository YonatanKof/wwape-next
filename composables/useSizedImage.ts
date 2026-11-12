import { computed, toValue, type MaybeRefOrGetter } from 'vue';
import thumbhashMap from '~/assets/data/thumbhashes.json';

type ThumbhashEntry = { hash: string; width: number; height: number };
const map = thumbhashMap as Record<string, ThumbhashEntry>;

// Steps below the file's own width. The intrinsic width is always included,
// and nothing larger is requested, so a thumbnail is never upscaled.
const WIDTH_STEPS = [160, 240, 320, 420, 480, 640, 800, 960, 1200, 1600, 2000, 2400];

export function candidateWidths(intrinsic: number) {
	const widths = WIDTH_STEPS.filter((width) => width < intrinsic);
	widths.push(intrinsic);
	return widths;
}

export function useSizedImage(src: MaybeRefOrGetter<string | undefined>, sizes: MaybeRefOrGetter<string>) {
	const img = useImage();

	return computed(() => {
		const path = toValue(src);
		const sizeAttr = toValue(sizes);
		const entry = path ? map[path] : undefined;
		const intrinsic = entry?.width;
		const height = entry?.height;
		const raster = !!path && /\.(png|jpe?g|webp|avif)($|\?)/i.test(path);

		if (!path || !intrinsic || !raster) {
			return {
				src: path,
				srcset: undefined as string | undefined,
				sizes: undefined as string | undefined,
				width: intrinsic,
				height,
			};
		}

		const widths = candidateWidths(intrinsic);
		const srcset = widths
			.map((width) => `${img(path, { width, format: 'webp', quality: 80 })} ${width}w`)
			.join(', ');

		return {
			src: img(path, { width: intrinsic, format: 'webp', quality: 80 }),
			srcset,
			sizes: sizeAttr,
			width: intrinsic,
			height,
		};
	});
}
