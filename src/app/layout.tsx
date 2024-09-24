import { Sofadi_One, Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import bg from "../assets/bg.png"

const roboto = Roboto({
  weight: ["400","700"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]
})

const sofadiOne = Sofadi_One({
  weight: ["400"],
  style: "normal",
  variable: "--sofadi-one",
  subsets: ["latin"]
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${sofadiOne.variable} ${roboto.variable} antialiased`}
            >
        <Menu op1="Page 1" op2="Page 2" op3="Page 3" op4="Page 4"></Menu>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
