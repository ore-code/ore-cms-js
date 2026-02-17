(function () {
	/**
	 * Define the root element for DOM manipulation.
	 * 
	 * @type {HTMLElement}
	 */
	const root = document.getElementById("root"); 

	/**
	 * Define the route for the default home page.
	 * 
	 * @type {string}
	 */
	const homeRoute = "/main/home";

	/**
	 * Define the file folder where the files live.
	 * 
	 * @type {string}
	 */
	const fileFolder = "/public";

	/**
	 * Define the route for the any error pages.
	 * 
	 * @type {string}
	 */
	const errorPage = "/error.html";

	/**
	 * Define a constant used for cache-busting.
	 * 
	 * @type {string}
	 */
	const cacheBust = new Date().getTime().toString();

	/**
	 * Initializes the CMS for the given route. 
	 * 
	 * @param {string} route
	 */
	async function initCMS(route) {
//
		// Use the default page if root is root.
		//
		route = route === "/" ? homeRoute : route;

		//
		// Build an object containing the paths.
		//
		const paths = getFilePaths(fileFolder + route);

		//
		// Fetch the code from the paths object.
		//
		const code = await getFileCode(paths);
 
		if(isInvalidCode(code.md) == false) {
			//
			// Inject the HTML into the root element.
			//
			injectHTML(code.html);

			//
			// Inject the script into the root element.
			//
			injectScript(code.js);
		}
		else {
			location.href = errorPage;
		}
	}

	/**
	 * Return an object containing file paths.
	 * 
	 * @param {string} 
	 * @return {Object}
	 */
	function getFilePaths(route) {		
		//
		// Define a folder from the route path.
		//
		const folder = route.match(/^.*\//)[0];
		
		//
		// Return an object containing file paths.
		//
		return {
			template: 	folder + "template.html",
			md: 		route + ".md?t=" + cacheBust,
			js: 		route + ".js?t=" + cacheBust
		}
	}

	/**
	 * Return an object containing file code.
	 * 
	 * @param {Object} 
	 * @return {Object}
	 */
	async function getFileCode(paths) {
		//
		// Fetch the template file for the route.
		//
		const template = await (await fetch(paths.template)).text() || "{content}";

		//
		// Fetch the Markdown file for the route.
		//
		const markdown = await (await fetch(paths.md)).text() || "";

		//
		// Fetch the JavaScript file for the route.
		//
		const js = await (await fetch(paths.js)).text() || "";

		//
		// Convert Markdown to HTML using marked parser.
		//
		const html = marked.parse(markdown);

		//
		// Return an object containing the code.
		//
		return {
			html: template.replace("{content}", `${html}`),
			  js: js,
			  md: markdown
		};
	}
		
	/**
	 * Inject a HTML inside the root element.
	 * 
	 * @param {string} code
	 */
	function injectHTML(code) {
		if(isInvalidCode(code) === false) {
			root.innerHTML = code;
		}
	}

	/**
	 * Inject a script element inside the root element.
	 * 
	 * @param {string} code
	 */
	function injectScript(code) {
		if(isInvalidCode(code) === false) {
			//
			// Define a <script> element for the code.
			//
			let el = document.createElement('script');

			//
			// Set the fetched code to the element.
			//
			el.textContent = code;

			//
			// Check for special literal to set type.
			//
			if (code.includes("@module")) {
				el.type = "module";
			}

			//
			// Inject the element into the page.
			//
			root.appendChild(el);
		}
	}

	/**
	 * Determines whether the fetched code is missing or a  
     * server error.
	 * 
	 * @param {string} code
	 * @return {boolean} 
	 */
	function isInvalidCode(code) {
		//
		// Markdown and script pages will never contain a
		// <html> element. If it exists in the string, the   
		// server likely returned an error page.
		//
		return code.includes(`<html`) || code === "";
	}

	//
	// Initialize CMS.
	//
	initCMS(location.pathname).catch(err => console.error(err));	
})();