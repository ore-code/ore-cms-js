# Overview

Ore DB is a refreshingly simple content management system designed for teams who value clarity, speed, and control. Whether you're a developer building out a site structure or a content editor updating pages, Ore CMS makes collaboration seamless—without the overhead of traditional CMS platforms.

At its core, Ore CMS is a client-side CMS. That means there’s no backend, no database, and no server-side logic. Everything runs in the browser, powered by static files and a few smart conventions. You drop it onto any server that supports rewrite rules, and you're off to the races.

But don’t let its simplicity fool you. Ore CMS is built around a powerful idea: separation of concerns. Content lives in Markdown files. Layouts are defined by HTML templates. And if you want to add interactivity, just create a JavaScript file with the same name as your Markdown page—ore-cms will automatically inject it when the page loads. This clean separation means content editors never have to touch code, and developers never have to worry about breaking content.

There’s no admin dashboard. No login screen. Permissions are handled at the operating system level, so you control access using standard file permissions. Want to give someone edit access? Just give them write access to the folder. Want to lock things down? Remove it. It’s that simple.