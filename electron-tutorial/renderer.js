const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  // 비동기 함수로 호출하고 반환값인 'pong'을 받는다.
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong', 실행한 앱에서 ctrl+shift+i로 개발자 도구를 열어 확인할 수 있다.
}

func()
