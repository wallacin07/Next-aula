import Image from "next/image";



export const Card = () =>
    {

        const dados: {imagem: string; tempo: string; titulo: string; texto: string; read: string; view: string; comment: string; corCard: string}[] = [
            {
                imagem: "../assets/bg.png",
                tempo: "3 Months", 
                titulo: "Post One",
                texto: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
                read: "8",
                view: "7451",
                comment: "22",
                corCard: "pink"
            },
            {
                imagem: "../assets/bg.png",
                tempo: "1 Week", 
                titulo: "Post Two",
                texto: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
                read: "8",
                view: "7451",
                comment: "22",
                corCard: "orange"
            },
            {
                imagem: "../assets/bg.png",
                tempo: "2 Days", 
                titulo: "Post Three",
                texto: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
                read: "8",
                view: "7451",
                comment: "22",
                corCard: "green"
            },

        ]



        return (      
            
            // dados.map(item,index) => ()
            <div className="h-[40rem] w-80 rounded-xl shadow-lg">
                {/* header */}
                <div className="h-2/6 w-full ">
                    <Image src="" alt="sla" className="h-full w-full rounded-t-xl"/>
                </div>

                {/* Body */}
                <div className="h-3/6 w-full items-center justify-center flex flex-col p-5">
                    <p className={`text-sm font-bold text-orange-600`}>1 week ago</p>
                    <p className="text-4xl font-bold"> Post Two</p>
                    <p className="mt-11 text-base  text-gray-400 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
                    </p>

                </div>

                {/* footer */}
                <div className="h-1/6 w-full grid-rows-3 flex flex-row">

                    
                    <div className="border-t-orange-700 border-l-orange-600 border-b-orange-600 border-r-orange-700  border-solid border-2 rounded-bl-xl w-1/3 h-full bg-orange-600 flex flex-col items-center justify-center">
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center ">7</p>
                    <p className="text-sm text-gray-200 text-center opacity-80 ">READ</p>
                    
                    </div>
                    <div className="border-t-orange-700 border-b-orange-600  border-solid border-t-2 border-b-2 w-1/3 h-full  bg-orange-600 flex flex-col items-center justify-center">
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center ">7143</p>
                    <p className="text-sm text-gray-200 text-center opacity-80 ">VIEWS</p>

                    </div>
                    <div className="border-t-orange-700 border-l-orange-700  border-r-orange-600 border-b-orange-600  border-solid border-2 rounded-br-xl w-1/3 h-full  bg-orange-600 flex flex-col items-center justify-center">
                    
                    <p className="text-2xl font-bold  text-gray-100 text-center ">21</p>
                    <p className="text-sm text-gray-200 text-center opacity-80 ">COMMENTS</p>
                    
                    </div>

                </div>

                </div>

        )
    }