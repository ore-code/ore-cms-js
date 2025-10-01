Templates
===========================================================

Beyond the global layout in default.html, you can give folders their own custom structure by adding a template.html file. These partial HTML files let you define things like sidebars, extra navigation, or unique layouts for that section.

**Example**

	/
	├── public/
	│   ├── main/
	│   │   ├── home.md
	│   │   ├── story.md
	│   │   ├── contact.md	
	│   │   ├── pastries.js
	│   │   └── template.html	
	│   ├── menus/		
	│   │   ├── coffee.md
	│   │   ├── pastries.md		
	│   │   └── template.html		
	├── default.html

Writing Templates
-----------------------------------------------------------

Every folder or subfolder template must include the `{content}` placeholder. This tells the system where to insert the page content when someone visits a markdown file in that folder. Without it, the page won’t display anything.

**Example**

	<!--Folder templates are partial HTML files-->

	<div>
		<!--Sidebar links-->

		<nav arial-label="">
			<a href="#">Link 1</a>
			<a href="#">Link 2</a>
			<a href="#">Link 3</a>
			<a href="#">Link 4</a>
		</nav>
		<main>
			<!--Page content is generated here-->

			{content}
		</main>
	</div>
 
-----

[Next: Server Configuration >](/docs/07-configuration.md)