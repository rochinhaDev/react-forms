import { useState } from "react";

function FormComplexos() {
   //criar um state para o input -> agora o state vai ser um objeto
   const [form, setForm] = useState({
      nome: "",
      idade: "",
   });

   //criar uma função para atualizar o state
   function handleChange(event) {
      // event.target.name = "nome" ou "idade"
      // event.target.value = "valor digitado no input"

      setForm({ ...form, [event.target.name]: event.target.value });
   }

   //criar uma função para lidar com o submit (salvar os dados)
   function handleSubmit(event) {
      //para a página não recarregar
      event.preventDefault();
      alert(`Seja bem vindo: ${form.nome} de ${form.idade} anos`);
   }

   console.log(form);

   return (
      <>
         <form>
            <small>/components/FormComplexos.jsx</small>

            <label>Nome</label>
            <input
               type="text"
               name="nome"
               value={form.nome}
               onChange={handleChange}
            />
            <label>Idade</label>
            <input
               type="text"
               name="idade"
               value={form.idade}
               onChange={handleChange}
            />
            <button onClick={handleSubmit}>Salvar</button>
         </form>

         <code>
            {`
               const [form, setForm] = useState({
               nome: "",
               idade: "",
               });
            `}
         </code>
      </>
   );
}

export default FormComplexos;
