---
title: Vuedoo SVG Magic
author_name: Yonatan Ben Knaan
urlname: svg-vue-gridsome
date: 2022-01-01
updated: 
published: true
tags: ['SVG', 'Creative', 'Code']
cover_image: '/posts/about-my-svg/about-my-svg.svg'
social_image: '/posts/about-my-svg/about-my-svgs-social-cover.jpg'
cover_caption: Cover art for SVGs & Vue article
description: How I use SVGs with Vue and Gridsome
color: blue
feeling: mad
id: 004
--- 

::LShape
::

> SVGs are **nice**  
Inline SVGs are **nicer**  
SVG as components are the **nicest**

# The need

I'd like my SVGs:
   - Inline so I can CSS them
   - As a component for a cleaner file
   - With *props* like size and color
   - To be able to use CSS or SCSS variants
   - Available for both systematic and free-form use

# The use cases 

1. As an *Icon System*, where there's a lot of similarly and a few differences. 
2. For general purpose, where the SVGs shown have nothing in common but you still want it as component and to use all the Veudoo magic

Let's dive in to some real world examples

# The Icon System SVG

In my *icon system* all the icons have the **same size, color and behavior** which I might override at the instance level.

**I use 2 *SFC*s for each icon** – The 1st file is the SVG wrapper called `SVGIconBase.vue`. T  he 2nd file is the actual SVG drawing of the icon, it's unique in its shape and name, and it's also a *Vue* file called something like `IconSomeName.vue`.

It will look like this in the HTML:

```html
<SVGIconBase> <!-- The wrapper -->
    <IconSomeName /> <!-- The icon -->
</SVGIconBase>
```

Now let's review these two files
## The SVGIconBase SFC

This is the 1st file called `SVGIconBase.vue`:
- The *xmlns*, *viewBox*, *aria-labelledby* and *role* are fixed 
- The *size* and *fill* are props, data binded with the `:`, with defaults set at the `props` section
- The icon name and the path will be passed along at the `<slot />`, this is where the SVG paths will be pushed in
- I've added a BG rect for better hovers regardless of the icons shape
- Control over styles like *hovers* and *transitions* will be done with CSS

Here's how the file looks:

```html
<template>
	<svg
        xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24" 
		aria-labelledby="title"
		role="presentation"
		:width="size"
        :height="size"
		:fill="iconColor"
	>
		<slot /> <!-- The icon -->
		<rect id="BG" fill="none" width="100%" height="100%"/>  
	</svg>
</template>

<script>
export default {
	props: {
		size: {
			type: [Number, String],
			default: "1.5em",
		},
		iconColor: {
			type: String,
			default: "var(--system-dimmed)",
		},
	},
};
</script>

<style lang="scss" scoped>
svg {
	transition: transform 0.25s ease-out;
	&:hover {
		transform: scale(1.025);
	}
}
</style>
```
## The Icon File

For the icon drawing I tore apart the *path* form the the *SVG* and added the *title* tag and the *lang* attribute. 

x> Plan a multi-lang icon system?  
Make sure to expose the *title* & *lang* values *props* as well

x> Using a *stroke* with or instead of a *fill*?  
Make sure to expose the *stroke* as a *prop* too

```html
<template>
	<g>
		<title id="title" lang="en">Some Icon Name</title>
		<path d="..." />
	</g>
</template>
```

## Basic Use

Here are a few icons of my *Icon System* to play around with:

<Hr />

<SVGIconBase>
    <IconAttach />
</SVGIconBase>

<SVGIconBase>
    <IconDoor/>
</SVGIconBase>

<SVGIconBase>
    <IconImage/>
</SVGIconBase>

<SVGIconBase>
    <IconSettings/>
</SVGIconBase>

<SVGIconBase>
    <IconOk/>
</SVGIconBase>

<Hr />

I can have them inline 
<SVGIconBase>
    <IconOk/>
</SVGIconBase>
and can easley change their size and color


<SVGIconBase size="16" fill="var(--bg-caution-HL)">
    <IconAttach />
</SVGIconBase>

<SVGIconBase>
    <IconAttach />
</SVGIconBase>

<SVGIconBase size="48" fill="var(--system-dim)">
    <IconAttach />
</SVGIconBase>

<SVGIconBase size="96" fill="var(--bg-primary-HL)">
    <IconAttach />
</SVGIconBase>


So an example code will look like so:

```html
<SVGIconBase size="96" fill="var(--bg-primary-HL)">
    <IconAttach />
</SVGIconBase>
```

x> My icon system is 24\*24 – If you built your system in a different size make sure to change the *viewBox* and the default *props*

<Hr />

Nice, now for the 2nd use case

# Free Style SVG

For this one is just change your SVG to a *Vue* file and wrap it with a *template* tag. The end. And again, the value of it is that you can use your css/scss vars and to better organize your file - like so:

```html
<<template>
	<svg viewBox="0 0 640 240">
		<rect 
            fill="var(--bg-code)" 
            width="100%" height="100%" />
        <polygon 
            transform-origin="320 120" 
            points="320 40 390 80 390 160 320 200 250 160 250 80">
        </polygon>
	</svg>
</template>

<style lang="scss" scoped>
@keyframes rotate {
	0% { transform: rotate(0); }
	to { transform: rotate(360deg); }
}
polygon {
	fill: var(--system-color);
	transition: fill 0.5s ease-in-out,;
	animation: rotate 5s cubic-bezier(0.75, 0, 0.25, 1) alternate infinite;
	&:hover {
		fill: var(--link-color);
	}
}
</style> 
```

Which looks like that:

<Example />

# The Gridsome Setup

I'm using the [vue-remark](https://gridsome.org/plugins/@gridsome/vue-remark) plugin which allows, among other, to add vue components into the *markdown* file. 

So the above example, with the 4 attached icons, looks like so

```md
---
frontmatter: It matters!
---
import SVGIconBase from '~/components/SVGIconBase.vue';    
import IconAttach from '~/icons-system/IconAttach.vue';    

<SVGIconBase size="16" fill="var(--bg-caution-HL)">
    <IconAttach />
</SVGIconBase>

<SVGIconBase>
    <IconAttach />
</SVGIconBase>

<SVGIconBase size="48" fill="var(--system-dim)">
    <IconAttach />
</SVGIconBase>

<SVGIconBase size="96" fill="var(--bg-primary-HL)">
    <IconAttach />
</SVGIconBase>
```

<Hr />

#### That's all folks, see ya'll next time

<Hr />