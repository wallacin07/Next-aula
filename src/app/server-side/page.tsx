
import Link from "next/link";
import { Suspense } from "react"

type IData = {
    results: {
      name:string;
      id:string;
      status: string;
    }[]
}


const ServerSide = async () =>
  {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()
    console.log(data);
    


    return(
      <>

      <h1>ServerSide Render</h1>
      <Suspense fallback={<div>Loading...</div>}></Suspense>

      {data.results.map((item,index) => {
        return(
          <div key={item.id}>
          <h2>{item.name}</h2>       
          <Link href={`/perso/${item.id}`}>ABRIR</Link>


          <br />
          <br />
        </div>

        )
      })}
      </>
    )
  }

  export default ServerSide