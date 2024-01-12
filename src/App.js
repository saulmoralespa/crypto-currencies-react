import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import Quotation from './components/Quotation';
import imagen from './cryptomonedas.png';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {
  
  const [ currency, setCurrency ] = useState('');
  const [ cryptoCurrency, setCryptoCurrency ] = useState('');
  const [ result, setResult ] = useState({});

  useEffect(() => {
    
    if(currency === '') return;

    const fetchData = async() => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
    const result = await axios.get(url);
    setResult(result.data.DISPLAY[cryptoCurrency][currency]);
    }

    fetchData();
  }, [currency, cryptoCurrency])

  return (
    <Container>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
        />
        <Quotation
          result={result}
        />
      </div>
    </Container>
  );
}

export default App;
