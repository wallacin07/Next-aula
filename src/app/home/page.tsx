import Image from "next/image";
import type { Metadata } from "next";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";
import { Card } from "@/components/card";


export const metadata: Metadata = {
  title: "Next App",
  description: "Batata Assada é mais gostoso",
};




const dados: {imagem: string; tempo: string; titulo: string; texto: string; read: string; view: string; comment: string;textCard: string; bgCard: string; borderCardBlack: string; borderCardLight: string;}[] = [
  {
      imagem: "bg",
      tempo: "3 Months", 
      titulo: "Post One",
      texto: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
      read: "8",
      view: "7451",
      comment: "22",
     textCard: "text-pink-600",
     bgCard:"bg-pink-600",
     borderCardBlack: "border-pink-800",
     borderCardLight: "border-pink-600"
  },
  {
      imagem: "bg",
      tempo: "1 Week", 
      titulo: "Post Two",
      texto: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
      read: "8",
      view: "7451",
      comment: "22",
      textCard: "text-orange-600",
      bgCard:"bg-orange-600",
      borderCardBlack: "border-orange-700",
      borderCardLight: "border-orange-600"
      
  },
  {
      imagem: "bg",
      tempo: "2 Days", 
      titulo: "Post Three",
      texto: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.",
      read: "8",
      view: "7451",
      comment: "22",
      textCard: "text-green-600",
      bgCard:"bg-green-600",
      borderCardBlack: "border-green-700",
      borderCardLight: "border-green-600"
      
  },]

export default function Home() {
  return(

   
      dados.map((item, index) => (
              <div key={index} className="my-20 mx-6 hover:scale-110 h-full">
                  <Card imagem={item.imagem} tempo={item.tempo} titulo={item.titulo} texto={item.texto} read={item.read} view={item.view} comment={item.comment} textCard={item.textCard} bgCard={item.bgCard} borderCardBlack={item.borderCardBlack} borderCardLight={item.borderCardLight} ></Card>
              </div> 
      )
      
      )
  )
  
}
