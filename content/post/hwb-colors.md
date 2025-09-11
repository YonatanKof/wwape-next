---
title: 'HWB Colors'
author_name: 'Yonatan Ben Knaan'
date: '2025-09-08'
updated: ''
cover_image: '/posts/hwb-colors/hwb-colors.webp'
cover_image_height: '320'
cover_image_thumbhash: 'cDkOPI74eIZ/hIeIZ3gEpPJjQw'
social_image: '/posts/hwb-colors/hwb-colors-social'
image_alt: ''
description: ''
tags: ['Creative']
---
When you think _darker blue_ or _more vibrant red_, you're not adjusting RGBs – you're thinking in terms of hues and their modifications. 

The HWB model works this way, separating the base color from its intensity and brightness adjustments.

Unlike RGB's technical approach, this perceptual model mirrors how we naturally understand color, making palette creation and color manipulation more predictable.


# The hwb() circle

The `hwb()` function defines colors using **Hue** with **Whiteness** and **Blackness** values, plus optional transparency. Where just the **Hue** is its pure color, 
adding the **Whiteness** and **Blackness** will change its lightness or darkness, and mixing them will produce everything in between.

#### A simple way to think of the `hwb()` model.

::GridBlockTwo{frOne="3fr" frTwo="2fr" gap="var(--space-m)"}
:::GridUnit
Basic syntax `hwb(0deg 0% 0%)` 

1st value, `0deg` is the *hue* ranging from 0° to 359° (red to red) as you probably know it from `HSL`

2nd value, `0%` is the *white* where `100%` will be pure white

3rd value, `0%` is the *black*  where `100%` will be pure black

So `w 0%, b 0%` will be the full hue color

Mixing `w` and `b` will result in a gray, murky color

You can add opacity like so `hwb(0deg 0% 0% / .5)` 


:::
:::GridUnit
::::HwbCircle 
::::
:::
::


<!-- So here's for example how wheel's CSS looks like

```css
.full-colors-around-the-hwb-wheel {
	background: conic-gradient(
		hwb(0deg 0% 0%) // Red
		hwb(60deg 0% 0%) // Yellow
		hwb(120deg 0% 0%) // Green
		hwb(180deg 0% 0%) // Cyan
		hwb(240deg 0% 0%) // Blue
		hwb(300deg 0% 0%) // Magenta
		hwb(360deg 0% 0%) // Red
	);
}
``` -->

# Create a smooth color pallet

In this example I have a var called `--my-color`

For it to work properly it should be a pure hue, e.g. `hwb(90deg 0% 0%)`  

Let's use the CSS `from` and `calc` to make it 50% darker  

So it will look like this: `background-color: hwb(from var(--my-color) h w calc(b + 50%));`  

Let's make it 50% lighter: `background-color: hwb(from var(--my-color) h calc(w + 50%) b);`

This is how I've built the slider below – have a go

---

::HwbColors 
::
