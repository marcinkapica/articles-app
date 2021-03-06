# README #

Small web application which loads and displays the list of latest articles from National Geographic website using NewsAPI.

[DEMO](https://dist-snhuuamfiv.now.sh/)

## Installation and launching

### 1. Installing npm packages

In order to launch the app, firstly you need to install the required npm packages. It can be done by the command:

`npm install`

### 2. Launching the app in developer environment
To launch the app in development environment you need to use the command:

`npm start`

 The app hosted on localhost will be displayed in the browser window. Development files are stored in the `app` folder.

### 3. Generating production build
In order to generate app files for production build you need to use command:

`npm run build`

This will cause deletion of all contents of the `dist` folder and will generate in this location minified and concatenated app files ready to be deployed.

## Used tools, libraries and frameworks
- [NewsAPI](https://newsapi.org/)
- [gulp](https://gulpjs.com/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [Font Awesome](http://fontawesome.io/)
- [Font Lato via Google Fonts](https://fonts.google.com/specimen/Lato)
- [SCSS](http://sass-lang.com/)
- [jQuery](https://jquery.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Moment.js](http://momentjs.com/)
