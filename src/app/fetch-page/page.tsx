"use client"


import { CardRickMorty } from "@/components/cardRickMorty";

import { useEffect, useState } from "react";


interface IData{
    name: string;
    id: string;
    image: string;
    type: string;
    status: string;
    gender: string;
    species: string
}


const FetchPage = () => {
    const [characters, setCharacters] = useState<IData[]>([])


    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
            const data = await res.json(); 
            setCharacters(data.results);
        }
        load();
    }, [])

    return(
        <>
        {characters.map((item,index) => {
            
            return(
                <div key={item.id}>
                    <CardRickMorty imagem={item.image} titulo={item.name} texto1={item.type} status={item.status} gender={item.gender} Species={item.species} bgCard={`bg-orange-600`} ></CardRickMorty>
                    {/* <Image src={item.image} alt={item.name} width={150} height={150} /> */}
                </div>
            )

        })}

        </>
    )
}

export default FetchPage