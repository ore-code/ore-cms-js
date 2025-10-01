Server Configuration
===========================================================

The system was designed to be lightweight and server-agnostic. You don’t need a backend, database, or special runtime—just a web server that supports static file hosting and URL rewriting. Once your files are in place and your rewrite rule is configured, your site is ready to go.

URL Rewrites
-----------------------------------------------------------

The rewrite logic follows these steps:

1. Extract the full path from the incoming URL.
2. Check if a matching `.md` file and its folder exist inside `/public`.
3. If they do, rewrite the request to `/default.html`.
4. If not, let the request pass through untouched.

**For Apache**

	RewriteEngine On
	RewriteBase /

	# Extract full path from URL
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d

	# Check if /public/{path}.md exists
	RewriteCond %{DOCUMENT_ROOT}/public%{REQUEST_URI}.md -f

	# Rewrite to /default.html
	RewriteRule ^.*$ /default.html [L]

**For .NET Core**

 	var rewriter = new RewriteOptions().Add(context =>
	{
		var path = context.HttpContext.Request.Path.Value ?? "";

		if (File.Exists(Path.Combine("wwwroot", "public", path.TrimStart('/') + ".md")))
		{
			context.HttpContext.Request.Path = "/default.html";
		}
	});
	
	app.UseRewriter(rewriter);

**For IIS**

	<configuration>
	<system.webServer>
		<rewrite>
		<rules>
			<rule name="Rewrite Markdown Pages" stopProcessing="true">
			<match url=".*" />
			<conditions>
				<add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
				<add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
				<add input="{DOCUMENT_ROOT}/public{REQUEST_URI}.md" matchType="IsFile" />
			</conditions>
			<action type="Rewrite" url="/default.html" />
			</rule>
		</rules>
		</rewrite>
	</system.webServer>
	</configuration>

Permissions
-----------------------------------------------------------

Access is controlled at the operating system level. You decide who can read, write, or modify content by setting file and folder permissions on your server.