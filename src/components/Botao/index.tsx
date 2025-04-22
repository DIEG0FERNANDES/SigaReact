import estilos from "./index.module.css";

const Button = (props: { text: string }) => {
  return <button className={estilos.bnt}>{props.text}</button>;
};

export default Button;
