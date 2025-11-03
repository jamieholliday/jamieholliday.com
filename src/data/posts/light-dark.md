---
title: "CSS Light-Dark"
pubDate: 2025-11-01
description: "Handling light and dark mode in css"
tags: ["css"]
---

Light and dark mode is something thats been around for a while now but I've not had much chance to mess with it and see whats build into the browser until now. There are only a few concepts to understand to get some nice styling benefits and provide a little bit of preference to the users of your site.

## Color scheme

The first thing to understand is `color-scheme`. This propery allows the browser to use / choose to display certain elements with light or dark styling. These are not values you can control and are defaults baked into the browser, think of things like default form element styling and scrollbars etc. All browsers have a default stylesheet that they uses when rendering elements and this property hints to the browser that it should respect a users colour preferences that they can set at an operating system level. See what mdn has to say about [color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme)

```css
:root {
  color-scheme: light dark;
}
```
