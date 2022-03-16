const electron = require('electron');
const { app, BrowserWindow, Notification, ipcMain } = electron;
const path = require('path');
const isDev = !app.isPackaged;
let mainWindow;
const debugModeOn = true;
function createWindow() {

    mainWindow = new BrowserWindow({
        height: 800,
        width: 800,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            devTools: debugModeOn,
        },

    })
    if (debugModeOn) {
        mainWindow.webContents.toggleDevTools();
        mainWindow.maximize();
    }
    mainWindow.loadURL(`file://${__dirname}/index.html`);

}
if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}
app.whenReady().then(createWindow);

// ipcMain.on("notify", (_, message) => {
//     new Notification({ title: "Message", body: message, hasReply: true }).show();
// })
ipcMain.on('app-quite', () => {
    app.quit();
})