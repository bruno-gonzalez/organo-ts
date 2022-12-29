import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { IColaborador } from '../../shared/interface/IColaborador'

interface FormularioProps {
   aoColaboradorCadastrado: (colaborador: IColaborador) => void
   times: string[]
}

const Formulario = ({aoColaboradorCadastrado, times} :FormularioProps) => {

   const [nome, setNome] = useState('');
   const [cargo, setCargo] = useState('');
   const [imagem, setImagem] = useState('');
   const [time, setTime] = useState('');

   const aoSalvar = (evento: React.FormEvent<HTMLFormElement> ) => {
      evento.preventDefault();
      console.log(nome, cargo, imagem, time);
      aoColaboradorCadastrado({
         nome,
         cargo,
         imagem, 
         time
      });
      setNome('')
      setCargo('')
      setImagem('')
      setTime('')
   }

   return (
      <section className="formulario">
         <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
               obrigatorio={true} 
               label="Nome" 
               placeholder="Digite seu nome" 
               valor={nome}
               aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
               obrigatorio={true} 
               label="Cargo" 
               placeholder="Digite seu cargo"
               valor={cargo}
               aoAlterado={valor => setCargo(valor)}
             />
            <CampoTexto 
               label="Imagem" 
               placeholder="Informe o endereço da imagem"
               valor={imagem}
               aoAlterado={valor => setImagem(valor)}
             />
            <ListaSuspensa 
               obrigatorio={true} 
               label="Times" 
               itens={times}
               valor={time}
               aoAlterado={valor => setTime(valor)}
             />
            <Botao>Criar Card</Botao>
         </form>
      </section>
   )
}

export default Formulario