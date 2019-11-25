# Quotes On Dev

This is the forth project in the RED Academy Web Dev program. A custom WordPress theme for Quotes On Dev - a simple random quote, post, generator with the ability to add new quotes if the user is logged in.

![Preview Image](https://raw.githubusercontent.com/KieranDevlin/quotes-on-dev/master/images/qod-readme-screenshot.png)

## Setup

This WordPress site is not hosted so you will need to follow this setup to view the site.

1. ensure you have [Node.js](https://nodejs.org/en/) installed in your terminal

2. ensure you have [MAMP](https://www.mamp.info/en/) installed and running a local server in order to view the site and access the database

3. with the previous technologies installed you can now run `npm install` to now install the dev dependencies associated with the project

4. with the technologies and dependencies installed you can now run and view the site!

## Key Learnings

### HTML

- used semantic class and id names to reference in SCSS and JavaScript
- demonstrated effective organization of directory by implementing file and folder naming and categorizing best practices
- included essential HTML elements in both head and body of the index
- implemented icon fonts via script to font-awesome account

### SASS / CSS 

- translated original design concept into my own, personalized code
- used a preprocessor to effectively use variables, partials, and mixins to create scalable code
- used appropriate selectors and kept code DRY and not over-specific
- demonstrated effective use of box model and flexbox
- demonstrated effective use of font properties to implement design concepts

### Javascript     

- defined variables using appropriate types, let and const
- used semantically named functions and variables to keep code easy to read and relevant
- used strict equality operators where needed
- used loops, functions, and conditionals to effectively implement JavaScript

### [jQuery](https://jquery.com/)

- used variables to store data accessed more than once in jQuery
- used event listeners to appropriately respond to events on screen - load and scroll specifically
- selectively hid/showed DOM elements using jQuery
- used the .slideUp() function to animate based on user interaction with submit new quote button
- seperated jQuery functions into seperate files to adhere to funtionality best practices

### [PHP](https://www.php.net/)

- effectively integrated PHP, HTML, JS, and SCSS to bring a WordPress custom theme together
- communicated with a database to retrieve random quotes to display on home page
- created global variables which allow JS to communicate with database and allowa user to add new pending posts directly through webpage

### [WordPress](https://wordpress.org/)

- effectively used WordPress as a content management system
- used an underscores forked starter theme, combined with RED starter boilerplate, to create a completely custom theme
- filled in the appropriate comment fields to describe the theme and added custom screenshot
- effectively used WordPress menus, custom post types, taxonomies, Gutenberg blocks, and custom widgets to create and style content
- properly enqueued JS, Google Fonts, Font Awesome Icons, and CSS to avoid conflicts and follow best practices to load JS and CSS files
- leveraged WordPress template hierarchy to efficiently create pages
- wrapped jQuery in an IIFE to make \$ available in no-conflict mode

### [Gulp](https://gulpjs.com/)

- used appropriate developer dependencies for the scope of the project
  - [browser-sync](https://www.npmjs.com/package/browser-sync) - keeps browser in sync during development
  - [gulp](https://www.npmjs.com/package/gulp) - task automation toolkit
  - [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - parses CSS and adds vendor, or browser, prefixes
  - [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano) - compresses CSS files
  - [gulp-eslint](https://www.npmjs.com/package/gulp-eslint) - identifies and reports errors and patterns
  - [gulp-prettyerror](https://www.npmjs.com/package/gulp-prettyerror) - displays errors in a pretty way without breaking tasks
  - [gulp-rename](https://www.npmjs.com/package/gulp-rename) - renames compressed files in /build directory
  - [gulp-sass](https://www.npmjs.com/package/gulp-sass) - normalizes SCSS files into browser ready CSS files
  - [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - recreates original source material for debugging purposes

### [Git](https://git-scm.com/)

- created a repository both locally and in the cloud with GitHub
- effectively used git push to upload my local repository to my remote repository
- used commits with appropriate comments to follow version control best practices
- effectively used command line and commands on iTerm2 to initiate and commit git repositories
