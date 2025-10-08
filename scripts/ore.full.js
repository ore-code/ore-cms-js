(function () {

	const root = document.getElementById("root");

	/**
	 * Initializes the page loader for a given route.
	 * @param {string} route - The route
	 * @returns {void}
	 */
	async function ore_init(route) {		
		//
		// Set the route to the default route for the root.
		//
		route = route === "/" ? "/main/home" : route;

		//
		// Define the object containing the paths.
		//
		const paths = ore_get_paths("/public" + route);
		 
		//
		// Define the object containing the code.
		//
		const code = await ore_get_code(paths);

		//
		// Add the HTML to the page.
		//
		ore_add_html(code.html);

		//
		// Create a new script element with the code.
		//
		ore_add_script(code.javaScript);
	}

	/**
	 * Return an object containing file paths for a given route.
	 * @param {string} route
	 * @returns {Object} 
	 */
	function ore_get_paths(route) {
		//
		// Define the folder portion of the route.
		//
		const folder = route.match(/^.*\//)[0];
		
		//
		// Define a timestamp to cache-bust content.
		//
		const stamp = new Date().getTime();

	 	//
		// Send information text to the console.
		//
		console.info(`%c ⓘ Ore CMS: Ignore potential '404' errors for '${folder}template.html' or '${route}.js in the console.`, "display: block; padding: .375rem; border-radius: 4px; background-color: #005EB8; color: #fff");
	
		//
		// Return the object containing the paths.
		//
		return {
			template: 	folder + "template.html",
			markdown: 	route + ".md?t=" + stamp,
			javaScript: route + ".js?t=" + stamp
		}
	}

	/**
	 * Return an object containing the code from a given path object.
	 * @param {Object} paths
	 * @returns {Object} 
	 */
	async function ore_get_code(paths) {
		//
		// Fetch the template, markdown, and Javascript.
		//
		const template 		= await (await fetch(paths.template)).text() || "{content}";
		const markdown 		= await (await fetch(paths.markdown)).text() || "";
		const javaScript 	= await (await fetch(paths.javaScript)).text() || "";
		const html 			= marked.parse(markdown);

		//
		// Return an object containing the final code.
		//
		return {
			html: template.replace("{content}", `${html}`),
			javaScript: javaScript
		}
	}

	/**
	 * Add the html inside the root element.
	 * @param {string} code
	 * @returns {void}
	 */
	function ore_add_html(code) {
		if (ore_is_file_missing(code) === false) {
			root.innerHTML = code;
		}
	}

	/**
	 * Add the script inside the root element.
	 * @param {string} code
	 * @returns {void}
	 */
	function ore_add_script(code) {
		if (ore_is_file_missing(code) === false) {
			let el = document.createElement('script');

			//
			// Defines the script source.
			//
			el.textContent = code;

			//
			// Make the script a module if it finds this comment.
			//
			if (code.includes("//@module")) {
				el.type = "module";
			}
			
			//
			// Insert the script element.
			//
			root.appendChild(el);
		}
	}

	/**
	 * Returns a boolean indicating if the code is blank or malformed.
	 * @param {string} code
	 * @returns {void}
	 */
	function ore_is_file_missing(code) {
		return code.includes(`<html>`) || code === "";
	}
	
	//
	// Initialize the page.
	//
	ore_init(location.pathname);
})();
