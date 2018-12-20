## Bernafon Experience PWA

This is the Bernafon experience Progress Web App it is created with `create-react-app` and uses `react-intl` along with `babel-plugin-react-intl` for the translation process.
Routing is done with `react-router-dom`. This is application is targeted to run on Chrome and in Offline state.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Installation
Copy / Clone repo and run npm install from the folder. Use the usual create-react-app build commands or `extract-messages` to create the translation files for babel.

## Building Offline App
1. Build a new Version of the CRA-App command: `yarn build`. The build files are in `/build`
2. Run the electron-pack command: `yarn electron-pack`.  The finished application can be found in `/dist`
