import logo from "./img/logo.avif";
import { FaArrowLeft } from "react-icons/fa";
import { BsFacebook, BsApple } from "react-icons/bs";
import { GoEyeClosed } from "react-icons/go";
// import {AiFillApple} from 'react-icons/ai';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h5 className="title-test">Entra na conta com outros serviçõs:</h5>
          <div className="icon">
            <FaArrowLeft />
          </div>
        </div>
      </header>
      <main className="App-main">
        <div className="container-main">
          <div className="grups">
            <button className="btn primary">
              <h3>entrar com facebook</h3>
              <div className="icon primary">
                <BsFacebook />
              </div>
            </button>
            <button className="btn secudary">
              <h3>entrar com a apple</h3>
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
          <from>
            <h4 className="text-enter">Entar na conta com E-mail e senha:</h4>
            <div className="form">
              <input type="text" required="required" className="input-Text" />
              <span className="spanU">E-mail</span>
              <input
                type="password"
                required="required"
                className="input-Psw"
              />
              <span className="spanO">Senha</span>
              <GoEyeClosed className="close" />
              <button className="form-btn">Entrar</button>
              <div className="grups-text">
                <h4 className="text-enter">Esqueci a senha</h4>
                <hr className="linear-hr" />
                <h4 className="text-enter text">Quero criar uma conta</h4>
              </div>
            </div>
          </from>
        </div>
      </main>
      <footer className="grup-footer">
        <div className="grup-footer-text">
          
        <div className="div">
        <div className="description">
          <h3>Termos de uso</h3>
          <h3>Política de privacidade</h3>
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
