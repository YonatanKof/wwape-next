# World Wide Ape

A website by Yonatan Ben Knaan

> This site is a work in progress!  
> Expect more design and blog posts soon

## Links

- [Live Link](https://wwape.com/)
- [Deploy Link](https://dev--wwape-next.netlify.app/)

## Tech stack

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt Content](https://content.nuxt.com/)
- [Netlify](https://www.netlify.com/)

## Extras

- [unlazy](https://unlazy.byjohann.dev/) & [thumbhash](https://evanw.github.io/thumbhash/)
- [Nuxt SEO](https://nuxtseo.com/)
- [VueUse](https://vueuse.org/)
- [Clarity](https://clarity.microsoft.com)
- [Vue Masonry Wall](https://vue-masonry-wall.yeger.eu/)
- [Vue Final Modal?](https://vue-final-modal.org/)
- [Vue Typewriter Effect](https://ayitinya.github.io/vue-typewriter-effect/)

## Image workflow

Blur placeholders (thumbhash map) and image dimensions are generated automatically from images in `public/`.

**After adding or replacing an image:**

```bash
npm run thumbhash
```

Skips already-processed images. Use `--force` to rebuild all.

### `::lazy-img` component

Use instead of standard markdown image syntax for lazy loading + blur placeholder.

**Basic**
```md
::lazy-img{src="/path/to/image.webp" alt="Description"}
::
```

**With caption**
```md
::lazy-img{src="/path/to/image.webp" alt="Description" desc="Caption text"}
::
```

Caption renders with `v-html` — links, bold, and code can be used:
```md
::lazy-img{src="/path/to/image.webp" alt="Description" desc="By <a href='https://example.com'>Author</a>"}
::
```

**With dynamic caption (front matter value)**
```md
::lazy-img{src="/path/to/image.webp" alt="Description"}
{{ $doc.description }}
::
```

### Cover images

Set `cover_image` in front matter — thumbhash and height are looked up automatically from `thumbhash map.json`:

```yaml
cover_image: '/designs/my-work/my-work-tn.webp'
```

`cover_image_thumbhash` and `cover_image_height` are no longer needed.