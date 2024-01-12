import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }

`;

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight: bold;
    }
`;

const Quotation = ({result}) => {
    
    if(Object.keys(result).length === 0) return null;
    
    return (
        <ResultDiv>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Paragraph>Precio más alto del día: <span>{result.HIGHDAY}</span></Paragraph>
            <Paragraph>Precio más bajo del día: <span>{result.LOWDAY}</span></Paragraph>
            <Paragraph>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
        </ResultDiv>
     );
}
 
export default Quotation;