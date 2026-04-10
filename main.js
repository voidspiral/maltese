const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    hasShadow: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  // 初始化隐藏边框并允许拖拽的情况下，部分点击交互可能需要 ipc 通信
}

function createTray() {
  // 注意：真实应用需准备一个 icon.png
  tray = new Tray(path.join(__dirname, 'icon.png')); 
  const contextMenu = Menu.buildFromTemplate([
    { label: '休息一下', click: () => { mainWindow.webContents.send('force-rest'); } },
    { type: 'separator' },
    { label: '退出', click: () => { app.quit(); } }
  ]);
  tray.setToolTip('桌面动态宠物');
  tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
  createWindow();
  // 暂时注释掉由于缺少 icon.png 导致的报错
  // createTray();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
