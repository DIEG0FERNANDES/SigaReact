import { IoEye, IoEyeOff } from "react-icons/io5";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = (props: { titulo: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    navigate("/Home"); // Redireciona para a rota '/Home'
  };

  return (
    <header>
      <h2>Sistema Acadêmico {props.titulo}</h2>
      {location.pathname === "/" && (
        <form className="login" onSubmit={handleSubmit}>
          <input type="email" placeholder="e-mail" name="email" />
          <input type="password" placeholder="senha" id="senha3" name="senha" />
          <button
            className="senhaButton"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
          <button type="submit">Logar</button>
        </form>
      )}
    </header>
  );
};

export default Header;
