import "../globals.css";
import { Menu } from "@/components/menu";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen h-auto  antialiased `}>
          <Menu op1="Home" op2="Math" op3="General Functions" op4="FetchNativo" op5="AxiosPage" op6="ServerPage"/>
        {children}
      </body>
    </html>
  );
}
