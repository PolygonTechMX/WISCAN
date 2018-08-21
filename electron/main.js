const {app, BrowserWindow} = require('electron');
const {argv} =  require('yargs');

// MODO DESARROLLO (ARGUMENTO)
const devMode = argv.dev || false;
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  if(devMode){
    mainWindow.loadURL('http://localhost:3000');
  }else{
    mainWindow.loadFile('index.html');
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})