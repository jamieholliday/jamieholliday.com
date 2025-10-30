---
title: "CSS Light-Dark Function is Amazing"
pubDate: 2024-02-20
description: "Why the light-dark() CSS function changed how I build themes."
tags: ["css", "theming", "web development", "astro"]
---

The new `light-dark()` CSS function is a game changer for theming. Here's why I love it.

## No More CSS Variables Overrides

Before, I had to override CSS variables in media queries or with JavaScript. Now it's just:

```css
color: light-dark(var(--color-light), var(--color-dark));
```

## Single Source of Truth

All my color logic lives in one place. No more hunting through multiple stylesheets to find where a color is defined.

## Works with color-scheme

By setting `color-scheme: light dark` on the root element, the browser handles the rest. The theme switcher just toggles this property.

## Better DX

The developer experience is incredible. I can see both color values right next to each other, making it easy to ensure good contrast in both modes.

## The Future is Bright (and Dark)

This is just the beginning. As more CSS features land that make theming easier, we'll see even more creative approaches to color modes.
