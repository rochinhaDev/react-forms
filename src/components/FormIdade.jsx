import { useState } from "react";

export default function FormIdade() {
  const [idade, setIdade] = useState("");
  function handleChange(event) {
    setIdade(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Você tem: ${idade}`);
    setIdade("");
  }
  return (
    <form>
      <label>Idade</label>
      <input type="number" value={idade} onChange={handleChange} />
      <button onClick={handleSubmit}>Salvar</button>
    </form>
  );
}
