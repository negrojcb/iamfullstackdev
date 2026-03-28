import { useState } from "react";

function InputCreate({ setUpdate }) {
  const [inputValue, setInputValue] = useState("");
  const [res, setRes] = useState("Listo para enviar");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlApi = "http://localhost:3000/create";
    const payload = { title: inputValue };
    try {
      const response = await fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        const data = await response.json();
        setRes(`Creado: ${data._id}`);
        setInputValue("");
        setUpdate((prev) => !prev);
      } else {
        throw new Error("Error al crear la tarea");
      }
    } catch (error) {
      setRes("Error al crear la tarea");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe la tarea"
        />
        <button type="submit">Crear</button>
      </form>
      <p>{res}</p>
    </>
  );
}

export default InputCreate;
