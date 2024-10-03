import Image from "next/image";
import bg from "@/assets/bg.png"

interface ICard {
    imagem: string;
    tempo: string;
    titulo: string;
    texto: string;
    read: string;
    view: string;
    comment:string
    textCard: string
    bgCard: string;
    borderCardBlack: string;
    borderCardLight: string;
}

export const Card:React.FC<ICard> = ({imagem,tempo,titulo,texto,read,view,comment,textCard, bgCard, borderCardBlack, borderCardLight}) =>
    {
        return (      
            
            // dados.map(item,index) => ()
            <div className="h-[40rem] w-80 rounded-xl shadow-lg">
                {/* header */}
                <div className="h-2/6 w-full ">
                    <Image src={bg} width={320} height={213} alt="sla" className="h-full w-full rounded-t-xl"/>
                </div>

                {/* Body */}
                <div className="h-3/6 w-full items-center justify-center flex flex-col p-5 bg-slate-50">
                    <p className={`text-sm font-bold ${textCard}`}>{tempo}</p>
                    <p className="text-4xl font-bold"> {titulo}</p>
                    <p className="mt-11 text-base  text-gray-400 text-center">
                        {texto}
                    </p>

                </div>

                {/* footer */}
                <div className="h-1/6 w-full grid-rows-3 flex flex-row">

                    
                    <div className={`${borderCardBlack} ${borderCardLight} ${borderCardLight} ${borderCardBlack}  border-solid border-2 rounded-bl-xl w-1/3 h-full ${bgCard} flex flex-col items-center justify-center`}>
                    
                    <p className={`text-2xl font-bold  text-gray-100 text-center `}>{read}</p>
                    <p className="text-sm text-gray-200 text-center opacity-80 ">READ</p>
                    
                    </div>
                    <div className={`${borderCardBlack} ${borderCardLight}  border-solid border-t-2 border-b-2 w-1/3 h-full  ${bgCard} flex flex-col items-center justify-center`}>
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center ">{view}</p>
                    <p className="text-sm text-gray-200 text-center opacity-80 ">VIEWS</p>

                    </div>
                    <div className={`${borderCardBlack} ${borderCardBlack} ${borderCardLight} ${borderCardLight}  border-solid border-2 rounded-br-xl w-1/3 h-full  ${bgCard} flex flex-col items-center justify-center`}>
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center ">{comment}</p>
                    <p className="text-sm text-gray-200 text-center opacity-80 ">COMMENTS</p>
                    
                    </div>

                </div>

                </div>

        )
    }