# Templates

Templates define how content is laid out across your site. Instead of using a dynamic rendering engine, the system relies on static HTML files and folder conventions. This gives you full control over structure while keeping things predictable and easy to manage.

There are three levels of templates:

- A site-wide template that wraps every page
- A folder-level template that defines layout for a section

## Site Template

**Example**

_A basic site template with global layout and styling_

	<!DOCTYPE html>
	<html>
		<head>
			<link rel="stylesheet" href="/styles/site.css">
		</head>
		<body>
			<header>
				<h1>My Site</h1>
				<nav>...</nav>
			</header>
			<main id="root">
				<!-- Everything gets rendered in here -->
			</main>
			<footer>© 2025</footer>
		</body>
	</html>

## Folder Template

Every folder and subfolder inside `/public` must contain a `template.html` file. This file controls how pages in that folder are laid out—whether they include navigation, sidebars, wrappers, or custom containers. 

> A `template.html` file must include the `{content}` placeholder, which gets replaced with the rendered Markdown content of the current page. 

**Example**

_A folder template with a sidebar and navigation layout_

	<div class="layout-with-sidebar">
  		<nav class="folder-nav">...</nav>
  		<main>
			{content}
		</main>
	</div>
	 

