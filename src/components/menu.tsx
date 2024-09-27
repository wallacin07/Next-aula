import { ROUTES } from "@/constants/routes";
import Link from "next/link";


interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: string;
}


export const Menu: React.FC<IMenu> = ({op1,op2,op3,op4}) =>
    {
        return (   
            <nav 
            className="flex flex-row justify-between font-roboto px-20 h-12 items-center bg-red-700 w-full"
            >
                <Link href={ROUTES.home} className="bg-red-600 p-1 rounded-lg border-solid border-stone-950" >{op1}</Link>
                <Link href={ROUTES.maths} className="bg-red-600 p-1 rounded-lg border-solid border-stone-950">{op2}</Link>
                <p className="bg-red-600 p-1 rounded-lg border-solid border-stone-950">{op3}</p>
                <p className="bg-red-600 p-1 rounded-lg border-solid border-stone-950">{op4}</p>
            </nav>
        )
    }