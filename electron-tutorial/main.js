const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

/** 새로운 브라우저 윈도우 인스턴스에 로드하는 함수 */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // preload.js 파일을 로드
    },
  })

  win.loadFile('index.html')
}

// ready 이벤트가 발생하면 createWindow 함수를 실행
// ipcMain.handle을 통해 ping 채널을 핸들러에 등록, 핸들러는 'pong'을 반환
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  // macOs에서 앱이 활성화되면 새로운 윈도우를 생성
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 모든 윈도우가 닫히면 앱을 종료
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Electron을 실행하는 플랫폼은 win32, linux, darwin 세 가지
