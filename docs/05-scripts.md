## Scripts

Scripting is handled using plain JavaScript. There are no frameworks, no build steps, and no magic. You control how things behave by placing .js files next to your .md files inside /public. If a script shares the same name as the page, it will be automatically injected.

## Structure

JavaScript files go in the same folder as your Markdown content. The CMS looks for a .js file with the same name as the .md file and includes it during rendering.

**Example**
If a visitor loads `/contact/info`, the system will render `info.md` and inject `info.js` into the page. This lets you add behavior without modifying the layout or Markdown directly.

	/public/
	├── about/
	│   ├── company.md
	│   ├── mission.md
	│   └── template.html
	├── contact/
	│   ├── info.md
	│   ├── info.js
	│   └── template.html
	└── default.html
