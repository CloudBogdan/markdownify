const
    path = require("path"),
    url = require("url"),
    { app, BrowserWindow } = require("electron"),
    config = require("./config.json");

let win;

function createWindow() {
    
    win = new BrowserWindow({
        ...config.window,
        resizable: true,
        
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, "app/index.html"),
            protocol: "file:",
            slashes: true
        })
    );
    
    win.on("closed", ()=> win = null);
    
}

app.on("ready", createWindow);
app.on("window-all-closed", app.quit);