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
            <Menu op1="Page 1" op2="Page 2" op3="Page 3" op4="Page 4"></Menu>
            
        <div className="h-full w-full items-center justify-center flex flex-col">


            <h1>use client com controle de estado</h1>
            <div>
                <label htmlFor="n1">Numero 1</label>
                <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)}   className="border-solid border-2 border-indigo-600 mx-2 rounded-xl px-2"/>
                </div>
            <div>
            <label htmlFor="n2">Numero 2</label>
            <input type="text" value={numero2} id="n2" className="border-solid border-2 border-indigo-600 mx-2 rounded-xl px-2" onChange={(e) => setNumero2(e.target.value)} />
            </div>


            <Select value={operacao} name="status" aria-label="Project status" className="my-3" onChange={(e) => setOperacao(e.target.value)}>
                <option value="+" >adicao</option>
                <option value="-">Subtracao</option>
                <option value="*">Multiplicacao</option>
                <option value="/">divisao</option>
            </Select>


            <div>
                <h2></h2>
                {!isNaN(respSoma ?? NaN) ? respSoma: msgError}
                <button  className="border-solid border-2 border-indigo-600 mx-2 w-20 h-8" onClick={handleOperacao}>Some</button>
            </div>
        </div>
        <Footer></Footer>
            </>
      

    )


}

export default Maths