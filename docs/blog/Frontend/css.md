# CSS

## Insert CSS

Three ways to insert css:

- External style sheet
  
```html
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

- Internal style sheet

```html
<head>
<style>
h1, h2 {
    color: maroon;
    margin-left: 40px;
} 
</style>
</head>
```

- Inline style
  
    An inline style may be used to apply a unique style for a single element.

```html
<h1 style="color:blue;margin-left:30px;">This is a heading</h1>
```

:::tip
In **vue**, to add multiple class, this way is commended:

`<p :class="['thin', 'color']"> something </p>`
:::
### Multiple Style Sheets

If some properties have been defined for the same selector (element) in different style sheets, the value from **the last read style sheet** will be used. 

An **inline style** has the highest priority, and will override external and internal styles and browser defaults.

```html
<style>
h1 {
    color: orange;
}
h1 {
    color: red;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<!-- Sequence: orange - red - style in 'mystyle.css'. -->
```

## colors

- RGB Value`(red, greenm blue)`, such as `rgb(60, 179, 113)`
- HEX Value (`#ff0000`)
- HSL Value: `hsl(hue, saturation, lightness)`

```html
<h3 style="background-color:hsl(300, 76%, 72%);">hsl(300, 76%, 72%)<h3>
```

- RGBA Value `(red, green, blue, alpha)`
  
  aplha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)

- HSLA Value `hsla(hue, saturation, lightness, alpha)`