import { Link } from "react-router-dom";
const Home = ({ data }) => {
  const deleteTask = async (id) => {
    const urlApi = `http://localhost:3000/delete/${id}`;
    try {
      const response = await fetch(urlApi, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Tarea eliminada exitosamente");
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <>
      <h2>Lista de datos</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <Link to={`/${item._id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
