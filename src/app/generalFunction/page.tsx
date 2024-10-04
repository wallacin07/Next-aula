"use client"

import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";
import { useState } from "react";


interface HandleProps {
  a: string,
  b: string
}

const generalFunction: React.FC = () => {

  
    
  const [numero01, setNumero01] = useState<string>("")
  const [numero02, setNumero02] = useState<string>("")

  const [respSoma, setRespSoma] = useState<number | undefined>()
  const [respSub, setRespSub] = useState<number | undefined>()
  const [respMult, setRespMult] = useState<number | undefined>()
  const [respDiv, setRespDiv] = useState<number | undefined>()

  const erro = "Digite corretamente, Sr. Retardado"
  const handleAll = ({a,b}: HandleProps) => {
    const n1 = parseFloat(a)
    const n2 = parseFloat(b)

    if(!isNaN(n1) && !isNaN(n2)){
          setRespSoma(n1+n2)
          setRespSub(n1-n2)
          setRespMult(n1*n2)
          setRespDiv(n2 !== 0 ? n1/n2 : undefined)
  }else
  {
    setRespSoma(undefined)
    setRespSub(undefined)
    setRespMult(undefined)
    setRespDiv(undefined)
  }
}
  

      return (
          <>
          <Menu op1="Home" op2="Math" op3="General Functions" op4="FetchNativo"></Menu>

          <div className="h-full w-full items-center justify-center flex flex-col">


          <h1>Função Reaproveitada</h1>
          <div>
            <input type="text" placeholder="Numero 01"  className="my-2 border-solid border-2 border-indigo-600 mx-2 rounded-xl px-2" value={numero01} onChange={(e) => setNumero01(e.target.value)} />
          </div>

          <div>
            <input type="text" placeholder="Numero 02"  className=" my-2 border-solid border-2 border-indigo-600 mx-2 rounded-xl px-2" value={numero02} onChange={(e) => setNumero02(e.target.value)} />
          </div>

          <div>
            <button  className="my-2  border-solid border-2 border-indigo-600 mx-2 w-60 h-8" onClick={() => handleAll({a:numero01, b: numero02})}>Calcular todos</button>
          </div>


        <div className="w-20">
          <div className="flex flex-row w-full">
             <h1 className=" mx-5">Soma</h1>
             <p>{!isNaN(respSoma ?? NaN ) ?   respSoma: erro}</p>
          </div>
        </div>

        <div className="w-24">
          <div className="flex flex-row w-full">
             <h1 className=" mx-5">Subtração</h1>
             <p>{!isNaN(respSub ?? NaN ) ?   respSub: erro}</p>
          </div>
        </div>

        <div className="w-20">
          <div className="flex flex-row w-full">
             <h1 className=" mx-5">Multiplicação</h1>
             <p>{!isNaN(respMult ?? NaN ) ?   respMult: erro}</p>
          </div>
        </div>

        <div className="w-20">
          <div className="flex flex-row w-full">
             <h1 className=" mx-5" >Divisão</h1>
             <p>{!isNaN(respDiv ?? NaN ) ? respDiv: erro}</p>
          </div>
        </div>

            
          </div>



      <Footer></Footer>
          </>
    

  )


}

export default generalFunction
