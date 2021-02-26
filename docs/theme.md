# Project Nebula Theme
This document contains details on how Project Nebula applications should be
styled and themed.

Project Nebula styles are implemented using a combination of
[Tailwind CSS](http://tailwindcss.com/) extended configuration and custom CSS
files.

## Colors
### General UI
Project Nebula uses two base colors: a primary and a secondary color. Each color
has a light and dark variant which can be used to create more visual interest
throughout UI.

Additionally, some projects may use an additional set of colors for specific UI
purposes or states.

To use Project Nebula colors in components:
```html
<div className="bg-primary"></div>
<div className="bg-primary-dark"></div>
<div className="bg-secondary-light"></div>
```

## Color and Text
Text color must always provide sufficent contrast with background color.

```html
<div className="bg-primary">
  <div className="text-white">
</div>
```

## Typography
We follow the Material Design [type scale](https://material.io/design/typography/the-type-system.html):

- Headline 1
- Headline 2
- Headline 3
- Headline 4
- Headline 5
- Headline 6
- Subtitle 1
- Subtitle 2
- Body 1
- Body 2
- Button
- Caption
- Overline

To use this in a project, convert the name of the item into a lowercase form
separated by hyphens. For example, to use a Headline 6 style:

```html
<div className="text-headline6">Some words</div>
```

Our typeface is Roboto. It should be used for all text unless there is a good
reason not to.
