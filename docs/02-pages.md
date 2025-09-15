# Pages

Creating and managing pages is designed to be as frictionless as possible. Whether you're a seasoned developer or a non-technical editor, the system empowers you to build pages using plain Markdown files. There are no special tools, no proprietary syntax, and no need to touch layout or code unless you want to.

## Site Structure

Each page, image, or script must live inside a folder under `/public`. These folders define your site's structure. Each Markdown file becomes a page, and if there’s a JavaScript file with the same name, it will be executed after the page is rendered. You can also have subfolders for advanced taxonomies.

**Example**

_The structure of a small website_

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
 
## Writing Pages

Pages are written using Markdown—a simple formatting language used for headings, lists, links, and other basic structure. If you're already familiar with Markdown, you can start writing immediately. If not, it's easy to learn.

[Official Markdown guide](https://www.markdownguide.org/basic-syntax/) 

**Example**

_A basic page written using Markdown_

	Heading 1
	=========

	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

	Heading 2
	---------

	Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

 ## Recommended Tools

You can edit Markdown files with any text editor, but some tools make the experience smoother—especially if you're writing frequently or managing multiple pages.

- **VS Code** – Free, powerful, and supports Markdown preview, syntax highlighting, and extensions.
- **Obsidian** – Great for writing and organizing Markdown content with a clean interface.
- **Sublime Text** – Lightweight and fast, with solid Markdown support.
- **Notepad++** – Simple and reliable for quick edits on Windows.
- **MacOS TextEdit / Windows Notepad** – Built-in editors that work fine for basic edits.

