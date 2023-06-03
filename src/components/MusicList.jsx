import { useState } from "react";

export default function MusciList() {
  const [songs, setSong] = useState([]);
  function handleChange(event) {
    setSong({ ...songs, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.prevenDefault();
  }
  console.log(songs);
  return (
    <form>
      <label>Nome da música</label>
      <input
        type="text"
        placeholder="Digite sua música"
        name="Music"
        value={songs.music}
        onChange={handleChange}
      />
      <label>Nome do Artista</label>
      <input
        type="text"
        placeholder="Digite o nome do Cantor"
        name="Singer"
        value={songs.singer}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Salvar</button>
    </form>
  );
}
