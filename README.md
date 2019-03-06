# Project of the conclusion for Udacity

## About the project

The project is a simple "Neighborhood Map", i used the Google Maps API and Yelp to search for the places.

You can access a live version at [https://antomarsi.github.io/blumenau_pages](https://antomarsi.github.io/blumenau_pages)

To start the project, it's easy, just fork or download the repository, after that, you need to install the packages, just run:

`npm install`

After that, just use:

`npm start`

It will run in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
`Note: The service worker only work for the production mode, you need to build and deploy for using it`

To build the project, just use:

`npm run build`

### Deployment

It uses [GH-Pages](https://github.com/tschaub/gh-pages) to deploy to GithubPages.

It's easy, just change de `homepage` attribute in the `package.json` file, and use the command.

`npm run deploy`

It will first build the App and after that, it will deploy for your Github Pages.

`Note: you need to have the project on github.`