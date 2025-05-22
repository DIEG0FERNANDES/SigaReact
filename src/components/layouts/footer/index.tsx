import { useNavigate } from "react-router-dom";
import "./index.scss";

const footer = () => {
  const navigate = useNavigate();
  const isSpecificPage =
    location.pathname === "/Biblioteca" ||
    location.pathname === "/Disciplinas" ||
    location.pathname === "/Boletim";
  return (
    <footer>
      <hr />
      {isSpecificPage && <button onClick={() => navigate(-1)}>voltar</button>}
      <p>&copy;Todos os direitos reservados;</p>
    </footer>
  );
};

export default footer;
