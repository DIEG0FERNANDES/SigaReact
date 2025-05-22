// importação de componentes
import { useState } from "react";
import { Footer, Header, IrTopo, Nav } from "../../components";

// importação de estilização
import "./index.scss";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Cadastro = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <>
      <Header titulo="" />
      <hr />
      <div className="content">
        <Nav />
        <main>
          <h2>Cadastre-se</h2>

          <form>
            <p>
              Cadastre-se como
              <select name="perfil">
                <option value="estudante">Estudante</option>
                <option value="professor">Professor</option>
              </select>
            </p>
            <p>
              Nome:
              <input type="text" name="nome" placeholder="nome" required />
            </p>
            <p>
              Email:
              <input type="email" name="email" placeholder="email" required />
            </p>
            <p id="paiSenha1">
              Senha:
              <input
                type="password"
                id="senha1"
                placeholder="senha"
                name="senha"
                required
              />
              <button
                className="senha1"
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? <IoEyeOff /> : <IoEye />}
              </button>
              {/* <ion-icon onclick="verSenha()" name="eye" id="olho"></ion-icon>  */}
            </p>
            <p id="paiSenha2">
              Repita a senha:
              <input
                // onchange="validarSenha()"
                type="password"
                id="senha2"
                required
                placeholder="repita a senha"
                // maxlength="11"
              />
              <button
                className="senha2"
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? <IoEyeOff /> : <IoEye />}
              </button>
              {/* <ion-icon onclick="verSenha2()" name="eye" id="olho2"></ion-icon>  */}
            </p>
            <p>
              Foto:
              <input type="file" name="foto" />
            </p>
            <p>
              CPF (somente números):
              <input type="tel" placeholder="CPF" name="cpf" required />
            </p>
            <p>
              Data de nascimento (dd/mm/aaaa)
              <input type="date" required name="dataNasc" />
            </p>

            <button type="submit">Cadastrar</button>
          </form>
        </main>
        <section>
          <h2>Últimas notícias</h2>
          <p>Aberto processo seletivo</p>
        </section>
      </div>
      <IrTopo />
      <Footer />
    </>
  );
};

export default Cadastro;
