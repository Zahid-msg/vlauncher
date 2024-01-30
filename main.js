const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920, // Set the width to 4K resolution
    height: 1080, // Set the height to 4K resolution
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false, // Disable web security to bypass CSP
    },
  });

  mainWindow.loadURL('https://www.youtube.com/watch?v=1zdA77VXwIM&list=PLn0JNilKuL9jB981TDwh_drAVT2ytso9i&index=1');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  //mainWindow.webContents.on('did-finish-load', () => {
    // Enter fullscreen mode
   // mainWindow.webContents.executeJavaScript(`
    //  const video = document.querySelector('video');
    //  if (video) {
     //   video.requestFullscreen();
      //  video.style.width = '90%';
      //  video.style.height = '90%';
     // }
   // `);
 // });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
