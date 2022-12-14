import logo from "./img/logo.avif";
import { FaArrowLeft } from "react-icons/fa";
import { BsFacebook, BsApple } from "react-icons/bs";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Icon } from "react-icons-kit";
import "./App.css";
import { useState } from "react";

function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [changeColor, setChangeColor] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleToggle = () => {
    setChangeColor(!changeColor);
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
    console.log(changeColor, " mudou a cor");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email === "" && password === "") {
  //     setError(true);
  //     return;
  //   }

  //   console.log(email, password);
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setError(true);
      return;
    }
   console.log(email, password)
  };

  return (
    <div className="App">
      <header className="App-header">
        <figure>
          <img src={logo} className="App-logo" alt="logo" />
        </figure>
        <div className="container">
          <h5 className="title-test">Entra na conta com outros serviçõs:</h5>
          <div className="icon arrow">
            <FaArrowLeft />
          </div>
        </div>
      </header>

      <main className="App-main">
        <div className="container-main">
          <div className="grups">
            <button className="btn primary">
              <h3>
                <a href="#/">continuar com facebook</a>
              </h3>
              <div className="icon primary">
                <BsFacebook />
              </div>
            </button>

            <button className="btn secudary">
              <h3>
                <a href="#/">Iniciar sessão com a Apple</a>
              </h3>
              <div className="icon secudary">
                <BsApple />
              </div>
            </button>
          </div>

          <div className="grups">
            <div className="linear">
              <hr className="linear-hr" />
              <p>OU</p>
              <hr className="linear-hr" />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h4 className="text-enter">Entar na conta com E-mail e senha:</h4>
            <div className="form">
              <div className="inputBox">
                <input
                  type="email"
                  required="required"
                  className="input-Text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(false);
                  }}
                />
                <span className="spanU">E-mail</span>
                <div className="iconE"></div>
                {error && <label>O campo e-mail não pode ficar vazio</label>}
              </div>

              <div className="inputBox">
                <input
                  type={type}
                  required="required"
                  className="input-Psw"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                />
                <span className="spanO">Senha</span>
                <div
                  className="iconE"
                  style={{ color: changeColor ? "#ffcb00" : "#333" }}
                >
                  <Icon
                    icon={icon}
                    size={25}
                    color="red"
                    onClick={handleToggle}
                  />
                </div>
                {error && <label>O campo senha não pode ficar vazio</label>}
              </div>

              <button className="form-btn" type="submit">Entrar</button>
              <div className="grups-text">
                <h4 className="text-enter">Esqueci a senha</h4>
                <hr className="linear-hr" />
                <h4 className="text-enter text">Quero criar uma conta</h4>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className="grup-footer">
        <div className="grup-footer-text">
          <div className="div">
            <div className="description">
              <h3>
                <a href="#/">Termos de uso</a>
              </h3>
              <h3>
                <a href="#/">Política de privacidade</a>
              </h3>
            </div>
            <div className="descriptions">
              <h5>
                ZE SOLUCOES TECNOLOGICAS DE COMERCIO DE BEBIDAS LTDA. - CNPJ:
                37.657.197/0001-46
              </h5>
              <h5>Rua Fradique Coutinho, 1632 - CEP: 05.416-002</h5>
              <h5>Pinheiros - São Paulo/SP</h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
