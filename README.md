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

## Beschreibung
Die Bernafon-Erleben App ist eine Offline Webapp, die auf einem 16:9 Bildschirm (1920 x 1080px) als 
Standalone Version läuft. Sie besteht aus verschiedenen statischen Text-Seiten, sowie wie einem interaktiven Screen, der über eine Audio-Tabelle Hörverluste erlebbar macht. Die aktuelle Version ist für genau diese Auflösung erstellt und für Google Chrome optimiert / getestet.

## Verwendete Module
Plugins & Node-Modules in der Applikation:

**CRA / Create-React-App** 
(https://github.com/facebook/create-react-app) 
Damit kann man ReactJS Applikationen erstellen, ohne grosses Konfigurationssetup. 

**react-app-rewired** 
(https://github.com/timarney/react-app-rewired)
Damit kann man CRA Konfigurationen überschreiben ohne auf wichtige CRA-Updates verzichten zu müssen. 
Ist hier gebraucht um postCSS und CSS-Modules in die Applikation zu laden.

*config-overrides.js*
In diesem File können CRA-Konfigurationen überschrieben werden.

**react-router-dom** 
(https://www.npmjs.com/package/react-router-dom)
Damit ist das Routing der Applikation gelöst.

**babel-plugin-react-intl** 
(https://github.com/yahoo/babel-plugin-react-intl)
Damit werden die Übersetzungsfiles geladen. Die Übersetzungen selbst sind für diese Applikation manuell in die Dateien in folgendem Ordner geschrieben worden: `/src/Translations/xx.json`

**react-sound** 
(https://github.com/leoasis/react-sound)
Audioplayer Komponent für React. Zuständing für das Apsielen der Audiodateien in der Audio-Tabelle

**ElectronJS**
(https://electronjs.org/) 
Damit wird die Offline App erstellt.

*package.json*
In diesem File findet man die Build-Konfiguration für die Offline App.

*public/electron.js*
Definiert z.B. Fenstergrösse / Kiosk-Mode etc. für die Offline App. 

## Standalone Version erstellen
Um einen Offline Build erfolgreich zu erstellen, wird yarn benötigt: (https://yarnpkg.com/en/):

1. Branch „Electron„ aus dem Repository herunterladen oder klonen.
https://github.com/f0rdP3rf3ct/React-Bernafon-Experience

2. `yarn install` ausführen
Lädt Node-Modules herunter und erstellt den Ordner `/node_modules`

3. `yarn build` ausführen 
Erstellt einen Build der React-App im Ordner `/build`

4. `yarn electron-pack` ausführen
Erstellt einen Offline Build im Ordner `/Dist`

## Projekt Struktur
+-- assets (Assets zum Projekt(Photoshopfiles, SVG's) )
+-- build (CRA-Builds)
+-- dist (Electron Builds)
+-- node_modules (node_modules)
+-- public (Öffentlice React-Files !Keine suffix)
+-- src (Projektcode)
|   +-- Components (React-Components)
|       +-- AudiogramImage
|       +-- AudiogramInfoImage
|       +-- AudioPlayer
|       +-- Breadcrumbs
|       +-- Header
|       +-- HeaderImage
|       +-- MainMenu
|       +-- SpeechBanana
|       +-- Views (Routing Views)
|           +-- About
|           +-- Audiogram
|           +-- Hearingloss
|           +-- Home
|           +-- Simulator
|           +-- index.js (index file for view import)
|   +-- CSS (Globale CSS-Definitionen)
|   +-- Files (React-Files !Mit suffix)
|   +-- Translations (Übersetzungs-Files)
+-- App.js (Eintrittspunkt Applikation)
