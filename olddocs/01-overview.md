# Overview

Welcome to ore-cms, a refreshingly simple content management system designed for teams who value clarity, speed, and control. Whether you're a developer building out a site structure or a content editor updating pages, ore-cms makes collaboration seamless—without the overhead of traditional CMS platforms.

At its core, ore-cms is a client-side CMS. That means there’s no backend, no database, and no server-side logic. Everything runs in the browser, powered by static files and a few smart conventions. You drop it onto any server that supports rewrite rules, and you're off to the races.

But don’t let its simplicity fool you. ore-cms is built around a powerful idea: separation of concerns. Content lives in Markdown files. Layouts are defined by HTML templates. And if you want to add interactivity, just create a JavaScript file with the same name as your Markdown page—ore-cms will automatically inject it when the page loads. This clean separation means content editors never have to touch code, and developers never have to worry about breaking content.

There’s no admin dashboard. No login screen. Permissions are handled at the operating system level, so you control access using standard file permissions. Want to give someone edit access? Just give them write access to the folder. Want to lock things down? Remove it. It’s that simple.

**Who is it for?**

- Small teams who want to move fast without setting up a backend
- Static sites that need occasional interactivity
- Internal documentation portals
- Microsites, landing pages, and prototypes
- Anyone who prefers Markdown over WYSIWYG editors

In the pages that follow, we’ll walk through everything you need to know—from folder structure and templates to content creation, linking, styling, and deployment. Whether you’re setting up your first ore-cms site or customizing a complex taxonomy, you’ll find clear, practical guidance here.

Let’s dive in.
