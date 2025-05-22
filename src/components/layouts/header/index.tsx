import { IoEye, IoEyeOff } from "react-icons/io5";
import "./index.scss";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const header = (props: { titulo: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <header>
      <h1>Sistema Acadêmico{props.titulo}</h1>
      {location.pathname === "/" && (
        <form className="login" onSubmit={handleSubmit}>
          <input type="email" placeholder="e-mail" name="email" />
          <input type="password" placeholder="senha" name="senha" />
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

export default header;
