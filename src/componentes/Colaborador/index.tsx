import './Colaborador.css'

interface ColaboradorProps {
   cabecalhoFundo: string
   nome: string
   imagem: string
   cargo: string
   data: string
}

const Colaborador = ({nome, imagem, cargo, cabecalhoFundo, data}: ColaboradorProps) => {
   return(
      <div className='colaborador'>
         <div className='cabecalho' style={{backgroundColor:cabecalhoFundo}}>
            <img src={imagem} alt={nome}/>
         </div>
         <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <h5>{new Date(data).toLocaleDateString()}</h5>
         </div>
      </div>
   )
}

export default Colaborador