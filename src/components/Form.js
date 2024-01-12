import styled from '@emotion/styled';
import axios from 'axios';
import Error from './Error';
import useCurrency from '../hooks/useCurrency';
import useCryptoCurrency from '../hooks/useCryptoCurrency';
import { useEffect, useState } from 'react';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s  ease;
    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({setCurrency, setCryptoCurrency}) => {
    
    const CURRENCIES = [
        { code: 'USD', name: 'Dolar de Estados Unidos' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'COP', name: 'Peso Colombiano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Libra Esterlina' },
    ];
    
    const [ listCryptoCurrencies, setListCryptoCurrencies ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ currency, SelectCurrency ] = useCurrency('Elije tu moneda', '', CURRENCIES);
    const [ cryptoCurrency, SelectCryptoCurrency ] = useCryptoCurrency('Elije tu Criptomoneda', '', listCryptoCurrencies);

    useEffect(() => {
        const getApi = async () => {
          const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
          const result = await axios.get(url);
          setListCryptoCurrencies(result.data.Data);
        }
        getApi();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if(currency === '' || cryptoCurrency === ''){
            setError(true);
            return;
        }

        setError(false);
        setCurrency(currency);
        setCryptoCurrency(cryptoCurrency);

    }
    
    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="Todos los campos son obligatorios" /> : null}
            <SelectCurrency/>
            <SelectCryptoCurrency/>
            <Button
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Form;