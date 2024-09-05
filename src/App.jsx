import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Ola Mundo do React");
  // setMessage("Vou ser melhor nesse mambo");
  const newMessage = () => {
    setMessage("Serei bom nesse mambo");
  };
  return (
    <div>
      <h1>Foco nos estudos {message}</h1>
      <button onClick={newMessage}>Mudar sms</button>
    </div>
  );
}

export default App;
