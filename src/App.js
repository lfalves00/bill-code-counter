import React, { useState, useEffect } from 'react';
import { Container, ButtonAdd, ButtonRem, Title, ContainerButton } from './style';
import GlobalStyle from './styles/global';

// import { Container } from './styles';

function App() {
  const initialCount = () => Number(window.localStorage.getItem('count') || 3166710)

  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);


  return (
    <>
        <Container>
          <Title>Código do boleto: <b>{count}</b></ Title>

          <ContainerButton>
            <ButtonAdd onClick={increment}>Gerar código</ButtonAdd>
            <ButtonRem onClick={subtract}>Voltar</ButtonRem>
          </ContainerButton>
        </ Container>

        <GlobalStyle />
    </>
  );
}

export default App;