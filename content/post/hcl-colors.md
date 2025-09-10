---
title: 'HCL Colors'
author_name: 'Yonatan Ben Knaan'
date: '2025-09-08'
updated: ''
cover_image: 'posts/hwb-colors/hwb-colors.webp'
cover_image_height: '205'
cover_image_thumbhash: 'qPYNXISKh4ifdoc5eJWIj5b4iQ'
social_image: '/posts/'
image_alt: ''
description: ''
tags: ['Creative']
---
When you think _darker blue_ or _more vibrant red_, you're not adjusting RGBs – you're thinking in terms of hues and its modifications. 

HWB work exactly this way, separating the base color from its intensity and brightness adjustments.

Unlike RGB's technical approach, these perceptual models mirror how we naturally understand color, making palette creation and color manipulation predictable.


# The hwb() circle

The `hwb()` function defines colors in the sRGB color space using **Hue**, **Whiteness**, and **Blackness** values, plus optional transparency.

This depiction of the shows a simple way to think of the `hwb()` model.

::HwbCircle 
::

- 0° to 359° is the hue shift – ranging from red to red as you probably know it from `HSL`
- Regardless of the hue (`h`), `w 100%` will be total white
- Same for `b` , `b 100%` will be total blackness
- So `w 0%, b 0%` will be the full hue color
- Mixing `w` and `b` will result in some kind of gray, murky color

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

## Color Space & Relationships
- Uses same color space and hue angles as hsl()
- Fully saturated when W=0% and B=0%
- `hwb(H 0% 0%)` equals `hsl(H 100% 50%)`

## Color Behavior
- **Increasing whiteness**: Lightens the color
- **Increasing blackness**: Darkens the color  
- **Both W+B > 0**: Creates muted, grayed colors
- **W+B ≥ 100%**: Produces gray shades with normalized values

## Syntax

### Absolute Colors
```css
hwb(H W B[ / A])
```
- **H**: Hue angle (number, angle, or `none`)
- **W**: Whiteness percentage (0-100% or `none`)
- **B**: Blackness percentage (0-100% or `none`)
- **A**: Optional alpha value (0-1 or `none`)

### Relative Colors  
```css
hwb(from <color> H W B[ / A])
```
- Based on origin color converted to HWB equivalent
- Can reference origin channels: `h`, `w`, `b`, `alpha`
- Supports calculations with `calc()`

## Technical Notes
- Absolute hwb() colors serialize to `rgb()` values
- Relative hwb() colors serialize to `color(srgb)` format
- Origin colors automatically converted to HWB for compatibility
- Channel values resolved as numbers (0-360 for hue, 0-100 for w/b, 0-1 for alpha)

## Browser Compatibility
Refer to MDN compatibility tables for current support status.

Yes, HSL (Hue, Saturation, Lightness), HSV (Hue, Saturation, Value), and HWB (Hue, Whiteness, Blackness) do represent color in more intuitive ways than RGB, particularly for design work. Here's how:

