import {ThemeProvider} from '@emotion/react'

const tema = {
    cores: {
        branco:'',
        atencao:'',
        focus:'',
        Primerias: {
            a:'#5754ED',
            b:'',
            C:'',
        },
        Secundarias: {
            a:'#EBEAF9',
            b:'',
            C:'',
            
        },        
        Neutras: {
            a:'',
            b:'',
            C:'',
            d:'',
        },  
        Darks: {
            a:'',
            b:'',
        },  
    }
};

export const ProvedorTema = ({children}) => {
  return (
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  )
}