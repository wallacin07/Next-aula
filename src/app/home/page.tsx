import Image from "next/image";
import type { Metadata } from "next";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";

import bg from "../../assets/bg.png"


export const metadata: Metadata = {
  title: "Next App",
  description: "Batata Assada é mais gostoso",
};

export default function Home() {
  return (
    <>
      <Menu op1="Home" op2="Math" op3="General Functions"></Menu>
      <main className="font-sofadiOne flex flex-col justify-center items-center h-full p-10">

<div className="h-full w-full">

    {/* card */}
    <div className="h-96 w-56 rounded-xl">
      {/* header */}
      <div className="h-2/5 w-full overflow-hidden">
        <Image src={bg} alt={"sla"} className="h-full w-full"></Image>
      </div>

      {/* Body */}
      <div className="h-2/5 w-full">
          <p></p>
          <p></p>

      </div>

    {/* footer */}
      <div className="h-1/5 w-full">

        <div></div>
        <div></div>
        <div></div>

      </div>

    </div>



</div>


{/* 


    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div>
      <div></div>
      <div></div>
      <div></div>
    </div> */}



      </main>
      <Footer></Footer>
    </>
  );
}
