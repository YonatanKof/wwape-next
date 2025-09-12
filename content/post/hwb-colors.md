---
title: 'HWB Color Model'
author_name: 'Yonatan Ben Knaan'
date: '2025-09-08'
updated: ''
cover_image: '/posts/hwb-colors/hwb-colors.webp'
cover_image_height: '320'
cover_image_thumbhash: 'cDkOPI74eIZ/hIeIZ3gEpPJjQw'
social_image: '/posts/hwb-colors/hwb-colors-social.jpg'
image_alt: 'The HWB color wheel depiction'
description: 'Fix your broken colors with HWB model'
tags: ['Creative']
---
Hex and RGB aren't made for people! When you think _darker blue_ or _vibrant red_, you're thinking in terms of hues and their modifications. 

The HWB model works this way, separating the base color from its whiteness and blackness adjustments.

Unlike RGB's technical approach, this perceptual model mirrors how we naturally perceive color, making palette creation and manipulation more predictable.


## The HWB model

The `hwb()` function defines colors using **Hue** with **Whiteness** and **Blackness** values, plus optional transparency. Here, the **Hue** is its pure color, 
adding the **Whiteness** and **Blackness** will change its lightness or darkness, and mixing them will produce everything in between.

#### A simple way to understand the `hwb()` model

::GridBlockTwo{frOne="3fr" frTwo="2fr" gap="var(--space-m)"}
:::GridUnit
Basic syntax `hwb(0deg 0% 0%)` 

The first value, `0deg`, is the _hue_ ranging from 0° to 359° (red to red) as you probably know it from `HSL`

The second value, `0%`, is the _whiteness_ where `100%` will be pure white

The third value, `0%`, is the _blackness_  where `100%` will be pure black

So `w 0%, b 0%` will give the full hue color

Mixing `w` and `b` results in a gray, muted color

You can also add opacity like this `hwb(0deg 0% 0% / .5)` 


:::
:::GridUnit
<!-- ::::HwbCircle 
:::: -->
![image](/posts/hwb-colors/hwb-colors-model.webp)
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

## Create a smooth color palette

In this example, I have a variable called `--my-color`

For it to work properly, it should be a pure hue, e.g. `hwb(90deg 0% 0%)`  

Let's use the CSS `from` and `calc` functions to make it 50% darker  

So it will look like this: `background-color: hwb(from var(--my-color) h w calc(b + 50%));`  

Let's make it 50% lighter: `background-color: hwb(from var(--my-color) h calc(w + 50%) b);`

This is how I built the slider below – try it out

---

::HwbColorModel 
::

## What's next?

Use it in your design system?! Contact me <a href="mailto:kof@yonatankof.com">at this email</a>
