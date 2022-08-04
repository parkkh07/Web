// import electron
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 315,
    height: 460,
    transparent: true,
    frame: false,
    resizable: false,
  });
  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
});
