---
title: 'HCL Colors'
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
When you think _darker blue_ or _more vibrant red_, you're not adjusting RGBs – you're thinking in terms of hues and its modifications. 

HWB work exactly this way, separating the base color from its intensity and brightness adjustments.

Unlike RGB's technical approach, these perceptual models mirror how we naturally understand color, making palette creation and color manipulation predictable.


# The hwb() circle

The `hwb()` function defines colors in the sRGB color space using **Hue**, **Whiteness**, and **Blackness** values, plus optional transparency.

#### A simple way to think of the `hwb()` model.

::GridBlockTwo{frOne="3fr" frTwo="2fr" gap="var(--space-m)"}
:::GridUnit
Basic syntax `hwb(0deg 0% 0%)` 

1st value, `0deg` is the *hue* ranging from 0° to 359° (red to red) as you probably know it from `HSL`

2nd value, `0%` is the *white* where `100%` will be total white

3rd value, `0%` is the *black*  where `100%` will be total black

So `w 0%, b 0%` will be the full hue color

Mixing `w` and `b` will result in some kind of gray, murky color

You can add opacity like so `hwb(0deg 0% 0% / .5)` 


:::
:::GridUnit
::::HwbCircle 
::::
:::
::


So here's

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
```


::HwbColors 
::
