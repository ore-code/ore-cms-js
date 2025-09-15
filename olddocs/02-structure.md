# Folder Structure & Templates

Ore CMS is built around a simple but powerful idea: structure defines behavior. Instead of relying on configuration files or complex routing logic, Ore CMS uses folder conventions and HTML templates to determine how your site looks and functions. Once you understand the layout, everything else falls into place.

At the heart of every Ore CMS site is the `/public` directory. This is your root, and it contains everything the browser needs to render your site—content, templates, styles, and scripts. Inside it, you’ll find a few key folders:

**/public**

This is where your actual content lives. Each folder inside `/public` represents a section of your site—like `/about`, `/docs, or `/blog`. Inside those folders, you’ll find:

	about/
	├── team.md
	├── team.js
	├── mission.md
	├── mission.js
	└── template.html

Each Markdown file becomes a page. If you include a JavaScript file with the same name, ore-cms will automatically inject it when that page loads. This keeps content and behavior neatly paired, without mixing concerns.

**/styles**

This folder holds your site-wide CSS. The default file is `site.css`, and it’s loaded automatically. You can customize it to match your brand, add responsive styles, or override default behaviors.

**default.html**

This is your global template. It defines the outer shell of your site—header, footer, navigation, and anything else that should appear on every page. Think of it as the master layout that wraps around everything else.

Inside default.html, you’ll typically see something like:

## Folder-Level Templates

Each folder inside `/public' should include a template.html. This file defines how pages in that folder are laid out—whether they have a sidebar, breadcrumbs, or custom wrappers.

For example, a simple template.html might look like:

	<div class="content-wrapper">
		{content}
	</div>

The {content} placeholder is replaced with the rendered Markdown. You can wrap it in divs, add classes, or include additional HTML as needed.

## Subfolders & Complet Taxonomies

Need deeper structure? No problem. Subfolders can have their own template.html files, allowing you to create nested layouts for complex sites.

	Code
	docs/
	├── getting-started/
	│   ├── intro.md
	│   ├── intro.js
	│   └── template.html
	├── api/
	│   ├── endpoints.md
	│   └── template.html
	└── template.html

## Why this Matters

This folder-based approach gives you total control over layout and behavior without needing a CMS admin panel or routing engine. You can:

* Build reusable layouts for different sections
* Keep content and scripts modular
* Scale your site without adding complexity

It’s a system that rewards clarity and organization. Once you get the hang of it, building with Ore CMS feels more like assembling Lego blocks than writing code.
