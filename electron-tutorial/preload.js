const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld() 메소드를 사용하여 렌더러 프로세스에서 노출할 함수를 정의
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  /**
   * 렌더러 프로세스에서 메인 프로세스 핸들러를 트리거하는 ipcRenderer.invoke 함수를 호출
   * invoke의 첫 번째 인수는 채널 이름
   * @returns {Promise<string>}
   */
  ping: () => ipcRenderer.invoke('ping'),
  // we can also expose variables, not just functions
})
