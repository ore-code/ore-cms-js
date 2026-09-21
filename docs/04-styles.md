# Adding Styles 

Styling is handled using plain CSS. There are no frameworks, no build steps, and no magic required. You control how things look by linking stylesheets in `default.html` and optionally using inline styles in Markdown pages.

## Site Styles 

All styles must be linked in `default.html`. This file wraps every page and controls layout, fonts, colors, spacing, and anything else you want to standardize across the site.

**Example**

_A linked stylesheet_

	<link rel="stylesheet" href="/styles/site.css">

## Page Styles

If you need to style a specific page, you can use a `<style>` tag directly inside the Markdown file. This is useful for one-off tweaks or isolated formatting.

**Example**

_Inline styles inside a Markdown file_

	<style>
		h1 {
			color: darkred;
			font-family: Georgia, serif;
		}
	</style>

## Container Fences

Ore converts container fences into `div` elements, so you can wrap Markdown content in a styled block without writing HTML. Open a container with `:::` followed by one or more class names, and close it with `:::` on its own line. Markdown inside the container is still parsed normally.

**Example**

_A container with classes_

	::: myclass1 myclass2 myclass3
	Nested content
	:::

_Output_

	<div class="c-box c-box--spacing-lg c-box-lime">
		<ul>
			<li>Item one</li>
			<li>Item two</li>
		</ul>
	</div>

Containers can be nested. Each closing `:::` closes the most recently opened container.

**Example**

_Nested containers_

	::: myclass1 
    ::: myclass2
	Nested content
	:::
    :::