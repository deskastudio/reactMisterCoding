import { ChangeEvent, useState } from "react";
import Input from "../../components/input/Input";

function App() {
  const [nama, setNama] = useState<string>();

  const handleChangeNama = (e: ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };

  return (
    <div className="App">
      <Input onChange={handleChangeNama} />
      <h1>{nama}</h1>
    </div>
  );
}

export default App;