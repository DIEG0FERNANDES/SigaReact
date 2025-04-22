// Importações
import { Botao, Footer, Header, InputSenha } from "../../components";
import estilos from "./index.module.css";
import { IoArrowUp } from "react-icons/io5";
import { useState } from "react";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    tipoUsuario: "estudante",
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    cpf: "",
    nascimento: "",
    foto: null,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    // Se for um campo de upload de arquivo
    if (event.target.type === "file") {
      const file = (event.target as HTMLInputElement).files?.[0] || null;
      setFormData((prevData) => ({
        ...prevData,
        [name]: file, // Captura corretamente o arquivo
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode adicionar lógica para validar os dados e enviar ao backend
  };
  return (
    <>
      <Header titulo="" />
      <hr />
      <div className={estilos.content}>
        <nav>
          <ul>
            <li>
              <a href="http://www.ifms.edu.br/">Site do IFMS</a>
            </li>
          </ul>
        </nav>

        <main>
          <h2>Cadastre-se</h2>
          <form className={estilos.cadastroForm} onSubmit={handleSubmit}>
            <label htmlFor="tipoUsuario">
              <span className={estilos.required}>*</span> Cadastre-se como:
              <select
                id="tipoUsuario"
                name="tipoUsuario"
                value={formData.tipoUsuario}
                onChange={handleChange}
              >
                <option value="estudante">Estudante</option>
                <option value="professor">Professor</option>
              </select>
            </label>

            <label htmlFor="nome">
              <span className={estilos.required}>*</span> Nome:
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
                required
                value={formData.nome}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="email">
              <span className={estilos.required}>*</span> Email:
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu e-mail"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="senha">
              <span className={estilos.required}>*</span>
              <InputSenha
                id="senha"
                label="Senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="confirmarSenha">
              <span className={estilos.required}>*</span>
              <InputSenha
                id="confirmarSenha"
                label="Repita a senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="foto">
              Foto:
              <input
                type="file"
                id="foto"
                name="foto"
                onChange={handleChange}
              />
            </label>

            <label htmlFor="cpf">
              <span className={estilos.required}>*</span> CPF:
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Seu CPF"
                required
                value={formData.cpf}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="nascimento">
              <span className={estilos.required}>*</span> Data de nascimento:
              <input
                type="date"
                id="nascimento"
                name="nascimento"
                required
                value={formData.nascimento}
                onChange={handleChange}
              />
            </label>

            <Botao text="Cadastrar" />
          </form>
        </main>

        <section>
          <h2>Últimas notícias</h2>
          <p>Aberto processo seletivo</p>
        </section>
      </div>

      <a href="#">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Cadastro;
