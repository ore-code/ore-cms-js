Ore CMS is designed to be lightweight and server-agnostic. You don’t need a backend, database, or special runtime—just a web server that supports static file hosting and URL rewriting. Once your files are in place and your rewrite rule is configured, your site is ready to go.

## Rewrite Rules

**For .NET Core**

 Here’s a working example for ASP.NET Core using RewriteOptions. This rule checks if a Markdown file exists in /public, and if so, rewrites the request to default.html:

	var rewriter = new RewriteOptions().Add(context =>
	{
		var path = context.HttpContext.Request.Path.Value ?? "";

		if (File.Exists(Path.Combine("wwwroot", "public", path.TrimStart('/') + ".md")))
		{
			context.HttpContext.Request.Path = "/default.html";
		}
	});

This allows URLs like /about/team to resolve to /public/about/team.md, while still rendering through your global layout.

**For Apache**

If you're hosting on Apache, you can use .htaccess to achieve the same behavior. Here's a basic example:

	RewriteEngine On

	# Check if the requested .md file exists
	RewriteCond %{DOCUMENT_ROOT}/public/$1.md -f

	# Rewrite to default.html if it does
	RewriteRule ^(.*)$ /default.html [L]

**For IIS (web.config)**

	<configuration>
		<system.webServer>
			<rewrite>
			<rules>
				<rule name="OreCMSRewrite" stopProcessing="true">
				<match url="^(.*)$" />
				<conditions>
					<add input="{DOCUMENT_ROOT}/public/{R:1}.md" matchType="IsFile" />
				</conditions>
				<action type="Rewrite" url="/default.html" />
				</rule>
			</rules>
			</rewrite>
		</system.webServer>
	</configuration>

This rule checks if a .md file exists in /public and rewrites the request to default.html accordingly.

## Permissions & Access Control

Ore CMS doesn’t include user authentication or role management. Instead, access is controlled at the operating system level. You decide who can read, write, or modify content by setting file and folder permissions on your server.

For example:

- Give content editors write access to /public so they can update .md files.
- Restrict access to /styles or template files to developers only.
- Use version control (like Git) to track changes and collaborate safely.
- This keeps the system simple and secure, without introducing a user database or login flow.

## Deployment Tips

- Always test your rewrite rule with a few known pages before going live.
- Use relative paths in your templates to avoid hardcoded links.
- Consider setting up Git-based deployment for version control and rollback.
- Monitor file permissions to prevent accidental overwrites or unauthorized edits.

Ore CMS is built for speed and simplicity. Once your rewrite rule is in place, your site behaves like a dynamic CMS—without the overhead. Whether you're deploying to a shared host, cloud server, or internal network, the setup is lightweight and flexible.

Let me know when you're ready to start editing or restructuring the docs—we can clean up flow, add diagrams, or build a sidebar-style index.
