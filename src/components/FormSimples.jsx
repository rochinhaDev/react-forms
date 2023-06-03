import { useState } from "react";

function FormSimples() {
   //criar um state para o input
   const [nome, setNome] = useState("");

   //criar uma função para atualizar o state
   function handleChange(event) {
      setNome(event.target.value);
   }

   //criar uma função para lidar com o submit (salvar os dados)
   function handleSubmit(event) {
      event.preventDefault();
      alert(`Seja bem vindo: ${nome}`);
   }

   console.log("state nome: ", nome);

   return (
      <>
         <form>
            <small>/components/FormSimples.jsx</small>
            <label>Nome</label>
            <input type="text" value={nome} onChange={handleChange} />
            <button onClick={handleSubmit}>Salvar</button>
         </form>

         <code>
            {`
            <input
               type="text"
               value={nome}
               onChange={handleChange}
            />
            `}
         </code>
      </>
   );
}

export default FormSimples;
