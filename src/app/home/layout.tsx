import "../globals.css";
import { Menu } from "@/components/menu";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen h-auto  antialiased bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...`}>
          <Menu op1="Home" op2="Math" op3="General Functions"/>
        <div className="flex justify-center items-center h-full">
        {children}
        </div>
      </body>
    </html>
  );
}
