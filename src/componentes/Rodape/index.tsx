import './Rodape.css'

interface RodapeProps {
   enderecoLogo: string
   enderecoFb: string
   enderecoIg: string
   enderecoTw: string
}

const Rodape = ({ enderecoLogo, enderecoFb, enderecoIg, enderecoTw }: RodapeProps) => {
   return(
      <footer className='footer'>
         <ul className='lista__redes-sociais'>
            <li>
               <a href='#'><img src={enderecoFb} alt='Rede Social Facebook' /></a>
            </li>
            <li>
               <a href='#'><img src={enderecoIg} alt='Rede Social Instagram' /></a>
            </li>
            <li>
               <a href='#'><img src={enderecoTw} alt='Rede Social Twitter' /></a>
            </li>
         </ul>
         <img src={enderecoLogo} alt='Logo Organo'/>
         <h6>Desenvolvido por Alura.</h6>
      </footer>
   )
}

export default Rodape