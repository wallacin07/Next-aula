import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Next App",
  description: "Batata Assada é mais gostoso",
};

export default function Home() {
  return (
    <>
      <main className="font-sofadiOne flex flex-col justify-center items-center h-full p-10">
        <h1 className="text-6xl my-20 ">Bem vindo</h1>
        <section className=" flex flex-col bg-slate-400 p-5 rounded-xl w-2/5 ">
            <h2 className="text-large w-full text-center mb-5">Login</h2>

            <h4 className="">Usuario</h4>
            <input type="text" placeholder="Insira seu nome aqui" className="  border-2 border-solid border-slate-500 rounded-xl px-1"/>
            <h4>Data de Nascimento</h4>
            <input type="date" placeholder="" className="text-slate-600  border-2 border-solid border-slate-500 rounded-xl px-1" />

            <h4>Senha</h4>
            <input type="password"  placeholder="Insira sua senha aqui" className=" border-2 border-solid border-slate-500 rounded-xl px-1"/>
            <button type="button" className="border-gray-600 bg-zinc-300 rounded-xl my-2">Sign Up</button>

        </section>
      </main>

    </>
  );
}
