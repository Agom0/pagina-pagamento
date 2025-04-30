import { useState } from "react";
import BackCard from "./components/BackCard";
import CardFront from "./components/FrontCard";
import { ToastContainer, toast } from 'react-toastify';
import instance from "./assets/api/instance";
import { CgPassword } from "react-icons/cg";


export default function App() {
  const [nome, setNome] = useState("")
  const [number, setNumber] = useState("")
  const [mes, setMes] = useState(0)
  const [ano, setAno] = useState(0)
  const [cvv, setCvv] = useState(0)
  const [Senha, setSenha] = useState("")

  function formatNumero (evento){
    let numero = evento.target.value
    let numeroFormatado = numero.replace(/\D/g, '') // Remove tudo que não for número
    numeroFormatado = numeroFormatado.substring(0, 16) // Limita a 16 Dígitos
    numeroFormatado = numeroFormatado.replace(/(\d{4})/g, '$1 ').trim() // Adiciona espaço a cada 4 dígitos
    setNumber(numeroFormatado)
  }

  async function pagar() {
    if (!nome || !number || !mes || !ano || !cvv || !Senha) {
      return toast.error("preencha todos os campos")
    }
    if (number.replace(/\s/g,'').length !== 16) {
      return toast.error("Número do cartão invalido")
    }

    if (cvv.length !== 3) {
      return toast.error("cvv invalido")
    }

    if (ano.length !== 2 || ano.length !== 2) {
      return toast.error("ano invalido")
    }

    if (mes > 12 || mes < 1) {
      return toast.error("mes invalido")
    }

    if (Senha.length < 4) {
      return toast.error("Senha invalida")
    }

    try {
      const response = await instance.post("/creditcards", {
        name: nome,
        number: number.replace(/\s/g,''),
        expiration: `${mes}/${ano}`,
        cvv: cvv,
        password: Senha

      })
      
      return toast.success("pagamento realizado com sucesso")
    } catch (error) {
      return toast.error("erro ao processar o pagamento")
    }

  }


  return (
    <div className="w-full h-screen flex">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
      />
      <div className="w-[40%] relative h-full bg-[#271540]">
        <div className="absolute top-10 left-[200px]">
          <CardFront nome ={nome} numero={number}/>
        </div>
        <div className="absolute top-85 left-80">
          <BackCard cvv={cvv}/>
        </div>
      </div>
      <div className="w-[60%] h-full flex items-end p-[40px] flex-col">
        <h1 className="text-[30px] w-[60%] h-[150px] font-bold">Preencha os campos para concluir o pagamento</h1>
        <div className="w-[65%] h-auto min-h-[200px] flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <label htmlFor="nome" className="text-[20px]">Nome do cartão
            </label>
            <input onChange={(Event) => setNome(Event.target.value)}
              type="text"
              className="w-full h-[40px] rounded-md bg-[#d9d9d9]" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="text-[20px]">Número do cartão
            </label>
            <input 
            onChange={(Event) => formatNumero(Event)}
            value={number}
              type="text" className="w-full h-[40px] rounded-md bg-[#d9d9d9]" />
          </div>
          <div className="flex">
            <div className="w-[70%] flex flex-col">
              <label htmlFor="">Data de expiração</label>
              <div className="w-full flex gap-2">
                <input
                  onChange={(Event) => setAno(Event.target.value)}
                  type="number"
                  placeholder="AA"
                  className="w-[50%] pl-2 h-[40px] rounded-md bg-[#d9d9d9]" />
                <input type="number"
                  onChange={(Event) => setMes(Event.target.value)}
                  placeholder="MM"
                  className="w-[45%] pl-2 h-[40px] rounded-md bg-[#d9d9d9]" />
              </div>

            </div>
            <div className="w-[30%] pl-2 flex flex-col">
              <label htmlFor="" className="text-[20px]">CVV</label>
              <input onChange={(Event) => setCvv(Event.target.value)}
                type="number"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2" />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="" className="text-[20px]">Senha do cartão</label>
            <input onChange={(Event) => setSenha(Event.target.value)}
              type="password"
              className="w-full h-[40px] rounded-md pl-2 bg-[#d9d9d9]" />
          </div>
          <button onClick={pagar}
            className="w-full h-[50px] rounded-md bg-[#271540]
        text-white font-bold">Pagar</button>
        </div>
      </div>
    </div>
  )
}
