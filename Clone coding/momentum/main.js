const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 900,
    height: 600,
  });
  window.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
