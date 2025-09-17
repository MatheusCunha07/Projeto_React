import styled from '@emotion/styled'

const DivEstilizada = styled.div`
  padding: ${props => props.theme.espacamentos.l}; 
  background: ${props => props.theme.cores.Secundarias.a};
  border-color: ${props => props.theme.cores.Primerias.a};
  border: 1px solid #5754ED;
  border-radius: ${props => props.theme.espacamentos.s};
  `
export const Card = ({ children }) => {
  return (
    <DivEstilizada>
     {children}
    </DivEstilizada>
  );
}