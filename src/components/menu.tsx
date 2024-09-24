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
            className="flex flex-row justify-between font-roboto px-20 h-12 items-center bg-teal-400"
            >
                <p className="bg-teal-600">{op1}</p>
                <p className="bg-teal-600">{op2}</p>
                <p className="bg-teal-600">{op3}</p>
                <p className="bg-teal-600">{op4}</p>
            </nav>
        )
    }