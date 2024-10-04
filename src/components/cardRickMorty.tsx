import Image from "next/image";
import bg from "@/assets/bg.png"

interface ICardRickMorty {
    imagem: string;
    titulo: string;
    texto1: string;
    status: string;
    gender: string;
    Species:string
    bgCard: string;

}

export const CardRickMorty:React.FC<ICardRickMorty> = ({imagem,titulo,texto1,status,gender,Species, bgCard}) =>
    {
        return (      
            
            // dados.map(item,index) => ()
            <div className="h-[32rem] w-80 rounded-xl shadow-lg m-6 hover:scale-110">
                {/* header */}
                <div className="h-3/6 w-full ">
                    <Image src={imagem} width={320} height={213} alt="sla" className="h-full w-full rounded-t-xl"/>
                </div>

                {/* Body */}
                <div className="h-2/6 w-full items-center justify-center flex flex-col p-5 bg-slate-200">
                    <p className="text-3xl font-bold"> {titulo}</p>
                    <p className=" mt-3 text-xl font-bold  text-gray-800 text-center">Type</p>
                    <p className="mt-3 text-lg font-semibold  text-gray-600 text-center">
                        {texto1 ? texto1 : "Unknow"}
                    </p>

                </div>

                {/* footer */}
                <div className="h-1/6 w-full grid-rows-3 flex flex-row">

                    
                    <div className={`  border-solid border-2 rounded-bl-xl w-1/3 h-full ${bgCard} flex flex-col items-center justify-center`}>
                    
                    <p className={`text-2xl font-bold  text-gray-100 text-center `}>Status</p>
                    <p className="text-sm font-semibold text-gray-200 text-center opacity-80 ">{status}</p>
                    
                    </div>
                    <div className={`  border-solid border-t-2 border-b-2 w-1/3 h-full  ${bgCard} flex flex-col items-center justify-center`}>
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center "> Gender</p>
                    <p className="text-sm font-semibold text-gray-200 text-center opacity-80 ">{gender}</p>

                    </div>
                    <div className={`  border-solid border-2 rounded-br-xl w-1/3 h-full  ${bgCard} flex flex-col items-center justify-center`}>
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center ">Species</p>
                    <p className="text-sm text-gray-200 font-semibold text-center opacity-80 ">{Species}</p>
                    
                    </div>

                </div>

                </div>

        )
    }