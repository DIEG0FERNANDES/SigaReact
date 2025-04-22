import { useState } from "react";
import estilos from "./index.module.css";
import { IoEye, IoEyeOff } from "react-icons/io5";

const InputSenha = (props: {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label htmlFor={props.id}>
      {props.label}:
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={estilos.senhaContainer}>
          <input
            id={props.id}
            type={showPassword ? "text" : "password"}
            placeholder={props.label}
            required
            value={props.value} // Corrigido para passar `value`
            onChange={props.onChange} // Corrigido para passar `onChange`
          />
        </div>
        <button
          className={estilos.senhaButton}
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </button>
      </div>
    </label>
  );
};

export default InputSenha;
