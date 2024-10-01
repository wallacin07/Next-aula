import Link from "next/link";
import Image from "next/image";
import githubLogo from "../assets/github-mark.png"



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