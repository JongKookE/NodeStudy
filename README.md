# NodeJS

## Socket.io
: node.js 기반 실시간 웹 어플리케이션 지원 라이브러리

- **io.on** : 현재 접속되어 있는 클라이언트로부터 메시지를 수신하려면 on 메소드 사용
- **socket.on** : 해당 클라이언트에서 메시지를 보낸다.
- **io.emit** : 현재 접속해있는 모든 클라이언트에게 이벤트 전달
- **socket.io** : 서버에서 이벤트를 발생시키면 클라이언트 페이지의 해당 리스너에서 처리, 해당 소켓을 통해 클라이언트에게 메시지 전송

- socket.emit("chat message", args1, args2) -> 클라이언트가 서버에 있는 chat message라는 이벤트 발생

- io.emit("chat message", args1, args2) -> 서버가 클라이언트에게 chat message라는 이벤트를 발생

- socket.on("chat message") -> chat message라는 emit을 받으면 실행

``` javascript
// 사용자가 웹 사이트에 접속하면 자동으로 발생하는 이벤트
io.on("connection", (socket) => {
    console.log("User connected");

    // 클라이언트에서 서버로 'chat message' 이벤트를 전송했을 때
    socket.on("chat message", (msg) => {
        // 현재 접속해 있는 모든 클라이언트에게 'chat message' 이벤트를 전송
        io.emit("chat message", msg);
    });

    // 연결이 끊기면 콘솔에 'Disconnected' 출력
    socket.on("disconnect", () => console.log("User disconnected"));
});

```
