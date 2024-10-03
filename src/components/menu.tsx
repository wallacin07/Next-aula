import { ROUTES } from "@/constants/routes";
import Link from "next/link";


interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}


export const Menu: React.FC<IMenu> = ({op1,op2,op3,}) => {
        return (   
            <nav className="flex flex-row justify-center font-roboto px-20 h-12 items-center bg-gray-400 w-full">
                <Link href={ROUTES.home} className="bg-slate-50 p-1 rounded-lg border-solid w-28 border-stone-950 shadow-xl mx-4 text-center" >{op1}</Link>
                <Link href={ROUTES.maths} className="bg-slate-50 p-1 rounded-lg border-solid w-28 border-stone-950 shadow-xl mx-4 text-center">{op2}</Link>
                <Link href={ROUTES.generalFunction} className="bg-slate-50 p-1 rounded-lg border-solid w-40 border-stone-950 shadow-xl mx-4 text-center">{op3}</Link>
            </nav>
        )
}