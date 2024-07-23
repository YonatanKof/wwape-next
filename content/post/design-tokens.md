---
title: 'Design Tokens'
author_name: 'Yonatan Ben Knaan'
date: '2030-01-01'
updated: ''
cover_image: '/posts/design-tokens/design-tokens.webp'
cover_image_height: '836'
cover_image_thumbhash: ''
social_image: '/posts/'
image_alt: ''
description: 'A visualisation of my design tokens'
tags: ['Creative']
---

Design tokens are standardized, reusable variables that define the visual properties of a design system, such as colors, typography, spacing, and other style-related elements, ensuring consistency and scalability across different platforms and products.

## Why Design Tokens?

### Consistency 

One can easily and write `1em` instead of `1rem`, this mistake can be slight or harsh, but regardless of its final result, it will eventually hurt the the design's consistency.

Another example that comes to mind is `border: red 1px solid;`. Wouldn't it be nicer to have `border: red 1px solid;`
### Change proof


## This site's tokens

This site is quite small so there's not a lot of tokens, but let's review the ones that I do have.

- Colors [↘︎](#color){target="_self"}
- Sizes [↘︎](#sizes){target="_self"}
  - General sizing (using [Utopia](https://utopia.fyi/))
  - Specifics (header, content, etc'.)
  - Breakpoints 
- Typography [↘︎](#typography){target="_self"} (using [Utopia](https://utopia.fyi/))
- Border Radius [↘︎](#radius){target="_self"}
- Box Shadow [↘︎](#shadow){target="_self"}
- Link [↘︎](#section1){target="_self"}


## [Color Tokens]{id="color"}

Here we've got what I call, ***system*** color – its used for *text* color and most *UI elements*. It have 5 states; `main`, `slight`, `dim`, `dis` and `none`. You can see in the code block below how I structure it, or see it in action [here](#section-1)

The power or working like this, is that if one day you choose to change the system color, you'll just have to change it in place (or two if you have dark mode)
```css
:root {
	/* This is the main color */
	--color-sys-main: hsl(180, 25%, 15%);
	
	/* These colors are interpolated using color-mix() */
	--color-sys-slight: color-mix(in hsl, var(--color-sys-main) 75%, transparent);
	--color-sys-dim: color-mix(in hsl, var(--color-sys-main) 35%, transparent);
	--color-sys-dis: color-mix(in hsl, var(--color-sys-main) 10%, transparent);
	--color-sys-none: color-mix(in hsl, var(--color-sys-main) 0%, transparent);
}

/* This is the dark mode override */
.dark {
	--color-sys-main: hsl(34, 78%, 91%);
}
```

### 1st Live Example!

> **Update the main system color**

In this example you can update `--color-sys-main` and see its effect over the different color style. Since of the CSS setup shown above, all the colors are bound to it, so changing it will effect them all + the dark mode as well. 

Will it look good? Probably not – Will it be accessible? No guarantees – Is it a good example? For sure! 😎

::gridBlock{colNum="2" gap="var(--space-m);"}
:::grid-unit
So here we have 5 variant of the system color, and you can click on the color picker to see it in action.
- `--color-sys-main`
- `--color-sys-slight`
- `--color-sys-dim`
- `--color-sys-dis`
- `--color-sys-none`
:::
:::token-color
:::
::

::gridBlock{colNum="2" gap="var(--space-m);"}
:::grid-unit
So here we have 5 variant of the system color, and you can click on the color picker to see it in action.
- `--color-sys-main`
- `--color-sys-slight`
- `--color-sys-dim`
- `--color-sys-dis`
- `--color-sys-none`
:::
:::token-color{colorNorDark="antiquewhite" colorDark="hsl(180, 25%, 15%)" colorName="--color-sys-invert"}
:::
::

### 2nd Live Example!

> **Update SVG size, border thickness & colors**

::IconExample
::

### Screen Size

```scss
$screen-max-size-2xs: 460px;
$screen-max-size-xs: 599px;
$screen-max-size-sm: 959px;
$screen-max-size-md: 1279px; 
$screen-max-size-lg: 1919px; 
$screen-max-size-xl: 5000px;
```

### Spacings

```scss
$spacing-2xs
$spacing-xs
$spacing-sm
$spacing-md
$spacing-lg
$spacing-xl
$spacing-2xl
$spacing-3xl
$spacing-4xl
$spacing-5xl
$spacing-6xl
$spacing-7xl
$spacing-8xl
$spacing-9xl
```

### Border Radius

```scss
$border-radius-sm
$border-radius-md
$border-radius-lg
```

### States

### Buttons

`value`,
`visible`,
`disabled`,
`iconPosition`,
`iconName`,
`sizeType`
- 2xs
- xs
- sm
- md
- lg
- xl
- 2xl
- 3xl

`styleStateType`,
`styleType`,
`classNames`,
`buttonClick`,

### Typography

### Font Family 

```css
--font-body
--font-title
--font-mono
--font-hand
```

### Font Size

```css
.body-2xs
.body-xs
.body-sm
.body-md
.body-lg
.body-xl
.body-2xl

.title-xs  // 10px
.title-sm  // 12px
.title-md  // 14px
.title-lg  // 18px
.title-xl  // 20px
.title-2xl // 24px
```

### Font Weight

```css
.normal
.bold
.bolder
```

```scss
.body-2xs
.body-xs
.body-sm
.body-md
.body-lg
.body-xl
.body-2xl

// Total change, line height too
~~.title-2xs // 10px~~
.title-xs  // 12px
.title-sm  // 14px
.title-md  // 16px
.title-lg  // 18px
.title-xl  // 20px
.title-2xl // 24px
.title-3xl // 28px
.title-4xl // 32px
.title-5xl // 40px
.title-6xl // 48px
.title-7xl // 56px
.title-8xl // 64px
```

### ~~Line Height~~

### Colors

```css
functions.get-pep-color($color-map, $color-name)
```

### Examples

```css
.shape {
		background: functions.get-pep-color(color-weak, color-tran-10);
}
.icon {
		fill: functions.get-pep-color(color-system-primary-invert, color-tran-70);
}
.text {
		color: functions.get-pep-color(color-text, color-dimmed);
}
.button {
		@include mixins.inline(functions.get-pep-color(color-system-primary, color-flat-r-10), 1px, solid, true);
}
```

### Explanation

Call the color function: 

`functions`: this is SCSS `use` referring to the file location

`get-pep-color`: this is the function name

Select the `$color-map`

```css
color-system-primary-invert
color-system-primary
color-system-success
color-system-caution
color-user-primary
color-user-secondary
color-weak
color-regular
color-strong
color-text // [***This is a unique map - Select these colors***](https://www.notion.so/Change-Style-Names-to-Reflect-ngx-lib-c2e8fbe3effc455baaad865faa5cfaf9?pvs=21)
```

Select the `$color-name`

Regular colors

```css
// transparent colors
color-tran-90
color-tran-80
color-tran-70
color-tran-60
color-tran-50
color-tran-40
color-tran-30
color-tran-20
color-tran-10
color-tran-0

// flat colors
color-flat-l-20
color-flat-l-10
color-base
color-flat-r-10
color-flat-r-20
color-flat-r-30
color-flat-r-40
```

Text Colors

```css
color-main
color-dimmed
color-disabled
color-invert
color-link
color-link-highlight
color-link-focus
color-success
color-caution
```

### Shadow

`functions.scss` line 315

`variables.scss` line 500

<aside>
⚠️ Make as Class

</aside>

```css
.shadow-none

.shadow-xs-xsoft
.shadow-xs-soft
.shadow-xs-regular
.shadow-xs-hard

.shadow-sm-xsoft
.shadow-sm-soft
.shadow-sm-regular
.shadow-sm-hard

.shadow-md-xsoft
.shadow-md-soft
.shadow-md-regular
.shadow-md-hard

.shadow-lg-xsoft
.shadow-lg-soft
.shadow-lg-regular
.shadow-lg-hard

.shadow-xl-xsoft
.shadow-xl-soft
.shadow-xl-regular
.shadow-xl-hard
```

### Z Index

`variables.scss` line ~15

```scss
$z-index-high: 999; // 999 because material modals & overlays.
$z-index-medium: 100;
$z-index-low: 50;
$z-index-lowest: 1;
```