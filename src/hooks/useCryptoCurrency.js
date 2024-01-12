import { useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectHtml = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const useCryptoCurrency = (label, stateInit, options) => {
    
    const [ state, setState ] = useState(stateInit);

    const SelectCrypto = () => (
        <>
            <Label htmlFor="">{label}</Label>
            <SelectHtml
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {options.map((option) => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </SelectHtml>
        </>
    );

    return [state, SelectCrypto, setState];
}

export default useCryptoCurrency;