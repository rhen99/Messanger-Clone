import Chat from "./components/Chats/Chat";
import Messages from "./components/Messages/Messages";
import Mobile from "./components/Mobile/Mobile";
import Options from "./components/Options/Options";

function App() {
  return (
    <main className="main-container">
      <Chat/>
      <Messages/>
      <Options/>
      <Mobile/>
    </main>
  );
}

export default App;
