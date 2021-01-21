import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: Electron.BrowserWindow | null; // what does this mean really

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // backgroundColor: "#45aaf2",
    
    webPreferences: {
    nodeIntegration: true,
  },
  });

if (process.env.NODE_ENV === 'development') {
  mainWindow.loadURL(`http://localhost:3000`);
} else {
  mainWindow.loadURL(path.resolve(__dirname, '../index.html'));
}

mainWindow.on('closed', () => {
  mainWindow = null;
});
}

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;