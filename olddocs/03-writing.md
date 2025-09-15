# Writing Content

Creating and managing content in Ore CMS is designed to be as frictionless as possible. Whether you're a seasoned developer or a non-technical editor, the system empowers you to build pages using plain Markdown files—no special tools, no proprietary syntax, and no need to touch layout or code unless you want to.

Every page in Ore CMS begins with a .md file placed inside a folder under `/public`. These folders represent sections of your site—like `/about`, `/docs`, or `/blog`—and each Markdown file becomes a standalone page. You can use any text editor you prefer: VS Code, Sublime Text, Notepad++, or even  simple Notepad.

For example, a page called /public/about/team.md will be rendered at /about/team in the browser. Ore CMS automatically wraps it in the folder’s template.html and the site-wide default.html, giving it a consistent layout and style.

## Markdown: The Language of Content

Ore CMS uses standard Markdown syntax to format content. That means you can write headings, lists, links, images, and more using simple, readable text. If you're new to Markdown or want a refresher, check out the [official Markdown guide](https://www.markdownguide.org/basic-syntax/) for a quick overview.

This approach keeps content clean and portable. You’re not locked into a proprietary editor or format—just plain text that works anywhere.

## Adding JavaScript to Pages

One of the most elegant features of Ore CMS is its automatic script injection. If you want to add interactivity to a page—like a form handler, animation, or dynamic widget—you don’t need to modify the Markdown file. Instead, just create a .js file with the same name as your .md file, and Ore CMS will automatically include it when the page loads.

For example:
 
	/public/about/team.md
	/public/about/team.js

This keeps content and behavior separate, allowing developers to enhance functionality without interfering with the writing process. Editors can focus on messaging, while developers handle logic and interactivity.

## Linking Between Pages

When linking from one page to another, Ore CMS uses a clean URL structure. The key rule is: always start with /public/ when referencing internal pages.

Let’s say you want to link from /public/about/team.md to /public/contact/info.md. You’d write:

	[Contact Us](/public/contact/info)

## Best Practices

- Use lowercase filenames
- Organize content into folders based on topic or section
- Include a template.html in each folder to control layout
- Pair .md files with .js files only when needed
- Test links to ensure they resolve correctly

Ore CMS rewards clarity and modularity. The more consistent your structure, the easier it is to scale and maintain your site.