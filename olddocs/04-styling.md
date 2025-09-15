# Styling Your Site

Ore CMS gives you full control over your site’s appearance without forcing you into a templating engine or design system. It’s built on the idea that you own your layout, and you can style it however you want using plain old CSS and HTML.

There’s no theming layer. No plugin architecture. No “premium templates” to buy. Just a clean slate and a stylesheet waiting for your creativity.

## The Styles Folder

All your custom styles live in the `/public/styles folder.` The default file is site.css, and it’s automatically loaded across every page. This is your canvas—use it to define typography, colors, spacing, layout grids, responsive behavior, and anything else your design calls for.

Want to add a dark mode? Go for it. Prefer a minimalist layout with lots of whitespace? Totally doable. Ore CMS doesn’t get in your way.

	/public/styles/site.css
	
This file is linked in your default.html template, so any changes you make will instantly apply across the site.

## Global vs. Folder-Level Styling

While site.css handles global styles, you can also scope styles to specific sections of your site using folder-level templates. Each folder in /public includes a template.html file, which wraps the content in custom HTML. This gives you a hook for targeted styling.

For example, your /public/blog/template.html might look like:

	<div class="blog-wrapper">
  		{content}
	</div>

Then in site.css, you can define styles like:

	.blog-wrapper h1 {
  		font-family: Georgia, serif;
  		color: #333;
	}

This lets you create distinct visual identities for different sections—like a polished marketing site, a casual blog, and a technical documentation hub—all within the same Ore CMS instance.

## Custom Layouts with HTML Templates

Styling in Ore CMS isn’t just about CSS—it’s also about how you structure your templates. The default.html file defines your global layout, including header, footer, and navigation. Folder-level template.html files define how individual pages are wrapped.

Here’s a simple `default.html` example:

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
				<!-- Page content gets injected here -->
			</main>
			<footer>© 2025</footer>
		</body>
	</html>

Ore CMS injects the rendered Markdown into the #root element, using the folder’s template.html to wrap it. This gives you total control over layout without needing a templating engine or build step.

## Responsive Design & Media Queries

Since you’re writing your own CSS, you can fully embrace responsive design. Use media queries to adapt layouts for mobile, tablet, and desktop. There’s no framework baked in, so you’re free to use Flexbox, Grid, or whatever system you prefer.
 
	@media (max-width: 768px) {
		.sidebar {
			display: none;
		}
	}

## Best Practices

- Keep your CSS modular and well-commented
- Use semantic class names tied to layout, not content
- Avoid inline styles—use your templates and site.css instead
- Test across devices to ensure responsiveness
- Use folder-level wrappers to scope styles cleanly

Styling in Ore CMS is refreshingly direct. You’re not fighting a theme engine or overriding someone else’s decisions—you’re designing your site, your way. Whether you’re building something sleek and modern or quirky and experimental, the tools are yours to shape the experience.