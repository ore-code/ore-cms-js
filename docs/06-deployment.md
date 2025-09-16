# Deployment

The system was designed to be lightweight and server-agnostic. You don’t need a backend, database, or special runtime—just a web server that supports static file hosting and URL rewriting. Once your files are in place and your rewrite rule is configured, your site is ready to go.

## Rewrite Rules

Clean URLs like /about or /contact rely on server-side routing. Every request must be rewritten to default.html inside the matching folder. Without this, navigation will break and pages won’t load.

### For Apache

Use `.htaccess` on your website to rewrite requests.

**Example**

	RewriteEngine On
	RewriteBase /

	# Extract the slug from the URL
	RewriteCond %{REQUEST_URI} ^/([^/.]+)$

	# Check if /public/{slug}.md exists
	RewriteCond %{DOCUMENT_ROOT}/public/%1.md -f

	# Rewrite to /default.html
	RewriteRule ^([^/.]+)$ /default.html [L]

### For .NET Core

Use `RewriteOptions` in `program.cs` to rewrite requests.

**Example**

 	var rewriter = new RewriteOptions().Add(context =>
	{
		var path = context.HttpContext.Request.Path.Value ?? "";

		if (File.Exists(Path.Combine("wwwroot", "public", path.TrimStart('/') + ".md")))
		{
			context.HttpContext.Request.Path = "/default.html";
		}
	});
 
### For .Net Classic (web.config)

 Use rewrite rules in `web.config` to rewrite requests.

**Example**

	<rule name="Rewrite if public/{slug}.md exists" stopProcessing="true">
		<match url="^(.*)$" />
		<conditions>
			<add input="{APPL_PHYSICAL_PATH}public\{R:1}.md" matchType="IsFile" />
		</conditions>
		<action type="Rewrite" url="/default.html" />
	</rule>
 
## Permissions & Access Control

Access is controlled at the operating system level. You decide who can read, write, or modify content by setting file and folder permissions on your server.

For example:

- Give content editors write access to /public so they can update .md files.
- Restrict access to /styles or template files to developers only.
- Use version control (like Git) to track changes and collaborate safely.
- This keeps the system simple and secure, without introducing a user database or login flow.