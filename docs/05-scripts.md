Scripts
=====================================================

You can add custom behavior to a page by creating a script file with the same name as the markdown file. Once the page loads, the script will be ran.

**Example**

	/
	├── public/
	│   ├── main/
	│   │   ├── home.md
	│   │   ├── story.md
	│   │   ├── contact.md	
	│   │   └── contact.js		
	│   ├── menus/		
	│   │   ├── coffee.md
	│   │   └── pastries.md		
	├── default.html

Modules
-----------------------------------------------------------

To load a script as a module, add this comment at the top 
of the JavaScript file:

	//@module


-----

[Next: Templates >](/docs/06-templates.md)