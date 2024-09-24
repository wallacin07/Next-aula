import Link from "next/link";
import Image from "next/image";
import githubLogo from "../assets/github-mark.png"

interface IMenu {
    op1: string;
    op2: string;
    op3: number;
    op4: boolean;
}


export const Footer = () =>
    {
        return (      
            <footer className="bottom-0">
                <Image
                src={githubLogo}
                width={60}
                height={60}
                alt="GithubLogo"
                />
            </footer>
        )
    }