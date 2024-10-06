---
title: 'Design Tokens'
author_name: 'Yonatan Ben Knaan'
date: '2024-08-15'
updated: ''
cover_image: '/posts/design-tokens/design-tokens.webp'
cover_image_height: '400'
cover_image_thumbhash: '8OcFFYQGe4ZkqmiHeKdoiAZ1d3Bn'
social_image: '/posts/design-tokens/design-tokens-social.jpg'
image_alt: ''
description: 'A brief intro and visualisation of <em>design tokens</em>'
tags: ['Creative']
---

Design tokens are standardized, reusable variables that define the visual properties of a design system components: colors, typography, spacing, and style-related elements. 

Working with design tokens ensure consistency and scalability across various platforms and products.

## Why Design Tokens?

### Consistency

One can easily and write `1em` instead of `1rem`. This type of mistake can be minor or critical, but regardless of the final result, it will eventually hurt the consistency.

Another example that comes to mind is `border: red 1px solid;`. Wouldn't it be nicer to have `border: $border-red`? It will be even nicer with once we add a semantic meaning [(↓)](#semantic-meaning){target="_self" .sup} to it.

### Change Proof

At the 1st example below [(↓)](#1st-example){target="_self" .sup} you can see the token change, no, actually change it yourself! This is super nice because, if built right (I'm using `color-mix()`), you can update one color and it will populate the other color variants, as well for the dark mode.

> See the CSS below ↓

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

### [Semantic Meaning]{id="semantic-meaning"}

For consistency [(↓)](#consistency){target="_self" .sup} we have the pervious example of `$border-red` – which is a **bad example** of a token, as a proper token should bear a *semantic meaning*, i.e.: it shouldn't include the color’s name - but it should include the designation.

For example:

| Color   | Meaning                          | Token                   |
| ------- | -------------------------------- | ----------------------- |
| black   | Text & general UI elements       | `--color-system`        |
| white   | Background & general UI elements | `--color-system-invert` |
| red     | Caution, distractive operations  | `--color-caution`       |
| green   | Successful operations            | `--color-success`       |
| blue    | Links & element focus            | `--color-link`          |
| hotpink | Brand color, primary             | `--color-brand`         |

Of course, keep in mind the following:

1. You'll need to create variants not only as shown above – You'll need to take care of the dark mode, and other complexities that are unique to your use-case, for example: `--color-header`, `--color-border` or if more than one brand color then `--color-brand-primary` and `--color-brand-secondary`.
2. These are just color tokens – but you'll need sizes, typography and such. 
3. As a rule of thumb, the bigger the product, the more tokens you'll need.

### Theme Editing

Some products, like [Pepperi](https://www.pepperi.com/), my workplace [(2024)]{style="color: var(--color-sys-slight);"}, have a white label offering for the users to set their own design. It's just like the 1st example below [(↓)](#1st-example){target="_self" .sup}, but with a function that sets it into the style sheets.

In the attached video below, as mentioned before, you can see the color tokens, typography and their assignment over the different UI elements in action.

::video-tag
---
src: /posts/design-tokens/theme-editing.webm
controls: true
desc: Pepperi theme editor in action
aspectRatio: 720/435
---
::

### Reuse
There are two reuse use cases:

#### 1st use case: DRY

Just like using components, you wouldn't write the same code twice (or more for that matter). This concept is known as *DRY*: *D*on't *R*epeat *Y*ourself.

If we'll go back to our border example from before, well that's an easy example and one might say that writing `border: red 1px solid;` isn't that much of a different than `border: $border-red` – and they could be right.

But what about this CSS declaration?

```scss
@mixin desc-text-under() {
	color: var(--color-sys-slight);
	font-size: var(--step--1);
	margin-inline-start: var(--space-xs);
	display: inline-block;
	line-height: 1.25;
	margin-block: var(--space-xs);
	position: relative;
	&::before {
		content: '';
		display: inline-block;
		width: var(--space-4xs);
		height: 100%;
		background-color: var(--color-sys-dim);
		position: absolute;
		inset-inline-start: calc(var(--space-xs) * -1);
		border-radius: var(--border-radius-xs);

	}
}
```

This big declaration above is just styling for the silly description text under the `img` or `video` tag.

![Description text under the "img" or "video" tag](/posts/design-tokens/slily.webp){style="max-width: 320px;"}
*Description text under the `img` & `video` tags*

Wouldn't be nicer to include it with just one line? For example:

```scss
@include desc-text-under();
```

Much Nicer 👌

So we should think of **styling types as tokens too!** As it abstracts the mechanics of design into a a human readable context such as: `desc-text-under`.

#### 2nd use case: Multiplatform

This is also happening at Pepperi – if you’re creating a design system for more than one platform – web, Android or iOS. All of them with a different syntax – so you're forced to write things more then once. In this case, using design tokens is the only reasonable way to have a cohesive and manageable design over the different platforms.

So let's say that if the Token is `--color-caution-dim` which is 50% opacity red, it will look like this:

| CSS (hsla)                | Android (XML) | iOS (Swift)                                            |
| ------------------------- | ------------- | ------------------------------------------------------ |
| `hsla(0, 100%, 50%, 0.5)` | `#80FF0000 `  | `UIColor(red: 1.0, green: 0.0, blue: 0.0, alpha: 0.5)` |

So every platform will manage its own syntax, but the name and its meaning is consistent across the products.


<!-- 
## This site's tokens

This site is quite small so there are not many tokens, but I'm using them for - Colors, Sizes, Breakpoints, Typography and Shadows. I might refer to it in a later article. 

- Colors [(↓)](#color){target="_self" .sup}
- Sizes [(↓)](#sizes){target="_self" .sup}
  - General sizing (using [Utopia](https://utopia.fyi/))
  - Specifics (header, content, etc'.)
  - Breakpoints
- Typography [(↓)](#typography){target="_self" .sup} (using [Utopia](https://utopia.fyi/))
- Border Radius [(↓)](#radius){target="_self" .sup}
- Box Shadow [(↓)](#shadow){target="_self" .sup}
- Link [(↓)](#section1){target="_self" .sup} 
-->


## This site's tokens
This site is quite small so there are not many tokens, but I'm using them for - *Colors*, *Sizes*, *Breakpoints*, *Typography* and *Shadows*. I might refer to it in a later article. 

For the sake of this article though I'll address just the color tokens.

### [Color Tokens Breakdown]{id="color"}

Giving colors semantic meaning is important, so here's my naming convention:

1. ***System Color*** – Its used for *text* color and most *UI elements*. 
2. ***System Invert Color*** – Its mostly used for *backgrounds*. 
3. ***Brand Color*** – You guessed it. Here I'm using it a my link color too
<!-- 4. ***Focus Color*** – Used to focus aon elements. -->

Each of them have 5 states; `main`, `slight`, `dim`, `dis` and `none`. You can see in the code block below how I structure it, or see it in action in the 1st Live Example below [(↓)](#1st-example){target="_self" .sup}.

The power or working like this, is that if one day you choose to change the system color, you'll just have to change it in one place, or two if you have dark mode.


### [1st Live Example; Updating Color Tokens!!]{id="1st-example"}

In this example you can update `--color-sys-main` and see its effect over the different color style. Since of the CSS setup shown above, all the colors are bound to it, so changing it will affect them all + the dark mode as well.

Will it look good? Probably not – Will it be accessible? No guarantees – Is it a good example? For sure! 😎

::gridBlock{colNum="2" gap="var(--space-m)"}
:::grid-unit
#### System Color
So here we have 5 variants of the ***system*** color.

Click on the color picker to see it in action.

- `--color-sys-main`
- `--color-sys-slight`
- `--color-sys-dim`
- `--color-sys-dis`
- `--color-sys-none`
:::
:::color-token-edit
:::
::

::gridBlock{colNum="2" gap="var(--space-m)"}
:::grid-unit
#### System Invert Color
And here we have 5 variants of the ***system-invert*** color.

Change it too!

- `--color-sys-invert-main`
- `--color-sys-invert-slight`
- `--color-sys-invert-dim`
- `--color-sys-invert-dis`
- `--color-sys-invert-none`
:::
:::color-token-edit{colorName="sys-invert"}
:::
::

::gridBlock{colNum="2" gap="var(--space-m)"}
:::grid-unit
#### Brand Color

5 variants of the ***brand*** color. Being used by links, icons and buttons.

Go ahead, see it in action!

- `--color-brand-main`
- `--color-brand-slight`
- `--color-brand-dim`
- `--color-brand-dis`
- `--color-brand-none`
:::
:::color-token-edit{colorName="brand"}
:::
::

<!-- ::gridBlock{colNum="2" gap="var(--space-m)"}
:::grid-unit
#### Focus Color
And lastly 5 variant of the ***focus*** color – you know the drill.
- `--color-focus-main`
- `--color-focus-slight`
- `--color-focus-dim`
- `--color-focus-dis`
- `--color-focus-none`
:::
:::color-token-edit{colorName="focus"}
:::
:: -->

### 2nd Live Example; Updating SVG Tokens!

Following the article I've written about [Simple Icon System](/post/simple-icon-system/){target="_self"}, here you can see how you can easily **update SVG size, border thickness & colors**.

::IconExample
::

---

#### Well, that's the gist of it.

See ya'll in the next post 👋


<!-- 
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

 -->
