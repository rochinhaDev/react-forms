import { useState } from "react";

export default function FormLogin() {
  const [form, setForm] = useState({
    Email: "",
    Senha: "",
  });
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Seu email é: ${form.Email}`);
  }
  return (
    <form>
      <label>Email</label>
      <input
        placeholder="Digite seu E-mail"
        type="email"
        name="Email"
        value={form.Email}
        onChange={handleChange}
      />
      <label>Senha</label>
      <input
        placeholder="Digite sua Senha"
        type="password"
        name="Senha"
        value={form.Senha}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}
