## Project Title

Bands In Town

## Project Description

A single-page web application that takes an artist from the user and returns details about the artist and their events

## API Used

https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Technology Stack

-- ReactJS
-- Bootstrap

### Code Splitting

Code is splitted among resuable components:

-- GetValue (This component fetches the data from the API and stores it in the form of json objects)
-- ArtistCard (This is where the details of artists are displayes)
-- EventTable (This is where the events of the searched artist are displayed)
-- ErrorPage (This is displayed when user have entered data not present in the API)
-- Layout (This is the parent component for Layout of the UI)

### Deployment

There are multiple ways to deploy it. Such as:

-- HEROKU
npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open

-- NETLIFY
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm run build
npm install netlify-cli -g
netlify deploy
