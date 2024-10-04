"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import {api} from "@/constants/apis"

interface IData{
  name: string;
  id: string;
  image: string;
  type: string;
  status: string;
  gender: string;
  species: string

}

const AxiosPage = () => {
    
    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("Não foi possivel buscar os dados")
    const [page, setPage] = useState<string>("")

    useEffect(() => {
      api.get(`/character?page=${page}`).then((res) => {
        setErro(false)
        setData(res.data.results)
      }).catch((error) => {
        if(error.response.status == 404){
          setErrorMessage("Pagina não encontrada!!!")
        }
        setErro(true)
      })
    }, [page])
    

    return(
      <>
      <h1>Pagina com useEffect and Axios</h1>
      <input type="text" onChange={(e) => setPage(e.target.value)} value={page} placeholder="Insira a Pagina" />
      {erro && <h5>{errorMessage}</h5>}
      {data.map((item,index) => {
        return(
            <div key={index}>
              <h2>{item.name}</h2>
              <Image src={item.image} alt={"image from api"} width={224} height={224}  priority={true} className="h-auto w-[200px]"></Image>
              <p>{item.status}</p>
              <p>{item.species}</p>
              <p>{item.gender}</p>
              <br />
              <br />
            </div>
            
        )
      })}
      </>
  )
}

export default AxiosPage