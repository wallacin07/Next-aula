import { Sofadi_One, Roboto } from "next/font/google";
import "../globals.css";


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
      className={` h-screen flex flex-col antialiased`}
            >
        
        {children}
        
      </body>
    </html>
  );
}
