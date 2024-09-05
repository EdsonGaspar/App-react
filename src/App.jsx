import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Ola Mundo do React");
  let text = "Angola Vante";
  // setMessage("Vou ser melhor nesse mambo");
  const newMessage = () => {
    text = "Pais vai mudar para melhor, a dona Claudia acredita nisso.";
    setMessage("Serei bom nesse mambo");
    console.log(text);
  };
  return (
    <div>
      <h1>Foco nos estudos {message}</h1>
      <h1>Foco no desenvolvimento {text}</h1>
      <button onClick={newMessage}>Mudar sms</button>
    </div>
  );
}

export default App;
