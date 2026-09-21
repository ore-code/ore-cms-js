Sites
===========================================================

The following is a mimium folder and file structure for a website:

**Example**

	/
	├── public/
	│   ├── main/
	│   │   └── home.md
	├── default.html

default.html
-----------------------------------------------------------

This is the site template that includes shared elements like navigation, styles, and scripts. It must contain a lock-level element with `id="root"`, where page content will appear when the site loads.

**Example**

	<!doctype html>
	<html>
		<head>
			<link rel="stylesheet" href="/styles/site.css">
		</head>
		<body>
			<header>
				<nav>
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
					<a href="#">Link 4</a>
				</nav>
			</header>

			<main id="root">
				<!--Content is generated here-->
			</main>

			<script src="/scripts/ore-cms.min.js"></script>
		</body>
	</html>

home.md
-----------------------------------------------------------

This markdown file is shown as the first page of the site when someone opens the website. It acts as the default homepage. 

-----

[Next: Pages >](03-pages.md)