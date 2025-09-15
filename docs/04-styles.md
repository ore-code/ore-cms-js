# Adding Styles 

Styling is handled using plain CSS. There are no frameworks, no build steps, and no magic. You control how things look by linking stylesheets in `default.html` and optionally using inline styles in Markdown pages.

## Site Styles 

All styles must be linked in `default.html`. This file wraps every page and controls layout, fonts, colors, spacing, and anything else you want to standardize across the site.

**Example**
Linking a stylesheet:

	<link rel="stylesheet" href="/styles/site.css">

## Page Styles

If you need to style a specific page, you can use a `<style>` tag directly inside the Markdown file. This is useful for one-off tweaks or isolated formatting.

**Example**
Inline styles inside a Markdown file:

	<style>
		h1 {
			color: darkred;
			font-family: Georgia, serif;
		}
	</style>