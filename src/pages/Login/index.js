import React, { useState, useContext } from 'react';

import { AuthContext } from 'context/auth';
import { CardLogin, ContainerLogo, MainContainer } from './styles';
import Footer from 'components/Footer';

import Logo from "assets/img/logo-marvel.png"

const Login = () => {
  const { textError, login } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();    
    login(email, password)
  }
  return (
    <>    
      <MainContainer>
        
        <ContainerLogo>
          <img src={Logo} alt='Logo Marvel' />
        </ContainerLogo>
        <CardLogin>
          <h1>
            Para continuar, digite o seu e-mail e senha.
          </h1>          

          <form onSubmit={handleSubmit}>
            <div>
              <label>E-mail</label>
              <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Senha</label>
              <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type='submit'>
                <span>Continuar</span>
              </button>
              <p>{String(textError)}</p>
              <p>
                <span>
                  Para acessar utilize. <br />
                  E-mail : bruno@teste.com <br />
                  Senha: 1234!
                </span>
              </p>
            </div>

          </form>
        </CardLogin>
      </MainContainer>
      <Footer/>
    </>
  );
}

export default Login;