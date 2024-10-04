"use client"

import React, {useState} from "react"

import { Footer } from "@/components/footer"
import { Menu } from "@/components/menu"
import { Select } from "@headlessui/react"

const Maths: React.FC = () => {
    
    
    const [numero1, setNumero1] = useState<string>("")
    const [numero2, setNumero2] = useState<string>("")
    const [respSoma, setRespSoma] = useState<number | undefined>()
    const [operacao,setOperacao] = useState<string>("")
    const msgError = "Digite um numero valido"
    
    const handleOperacao = () =>
        {
            const n1 = parseFloat(numero1)
            const n2 = parseFloat(numero2)
            const op = operacao
            switch (op){

                case "+":
                        if(!isNaN(n1) && !isNaN(n2))
                            {
                                setRespSoma(n1+n2)
                            }
                        else{
                            setRespSoma(undefined)
                        }
                    break
                case "-":
                        if(!isNaN(n1) && !isNaN(n2))
                            {
                                setRespSoma(n1-n2)
                            }
                        else{
                            setRespSoma(undefined)
                        }
                    break
                case "*":
                        if(!isNaN(n1) && !isNaN(n2))
                            {
                                setRespSoma(n1*n2)
                            }
                        else{
                            setRespSoma(undefined)
                        }
                    break
                case "/":
                        if(!isNaN(n1) && !isNaN(n2))
                            {
                                setRespSoma(n1/n2)
                            }
                        else{
                            setRespSoma(undefined)
                        }
                    break

            }


        }

        console.log(operacao)
        return (
            <>
            <Menu op1="Home" op2="Math" op3="General Functions" op4="FetchNativo" op5="AxiosPage" op6="ServerPage"></Menu>
            
        <div className="h-full w-full flex justify-center items-center">
            <div className="w-4/6 h-80 flex  flex-col shadow-2xl bg-gray-100 rounded-lg border-gray-950 border-solid border-[1px]">

                    <div className="flex justify-center items-center my-5">
                        <label htmlFor="n1">Numero 1</label>
                        <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)}   className="border-solid border-[1px] text-center border-indigo-600 mx-2 rounded-xl px-2"/>
                    </div>
                    <Select value={operacao} name="status" aria-label="Project status" className="my-1 bg-slate-100 text-center px-4" onChange={(e) => setOperacao(e.target.value)}>
                        <option value="+" >+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">÷</option>
                    </Select>
                <div className="flex justify-center items-center my-5">
                    <label htmlFor="n2">Numero 2</label>
                    <input type="text" value={numero2} id="n2" className="border-solid border-[1px] border-indigo-600 mx-2 text-center rounded-xl px-2" onChange={(e) => setNumero2(e.target.value)} />
                </div>




                <div className="flex flex-col justify-center items-center">
                    <button  className="border-solid border-2 border-gray-150 mx-2 w-11/12 rounded-lg shadow-xl h-8" onClick={handleOperacao}>Faça a operação</button>
                    <h2 className="my-8 text-lg">{!isNaN(respSoma ?? NaN) ? respSoma: msgError}</h2>
                </div>
                    


            </div>
        </div>
        <Footer></Footer>
            </>
      

    )


}

export default Maths