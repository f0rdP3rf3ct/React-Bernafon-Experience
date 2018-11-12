const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {

    const devWindow = {
        width: 1920,
        height: 1080,
        fullscreen: false,
        closable: true,
        kiosk: false
    };

    const buildWindow = {
      width: 1920,
      height: 1080,
      fullscreen: true,
      closable: true,
      kiosk: true
    };

    mainWindow = new BrowserWindow(isDev ? devWindow : buildWindow );
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${ path.join(__dirname, '../build/index.html') }`);
    mainWindow.on('closed', () => mainWindow = null);

    if(isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});