import Link from "next/link";
import {IoLogoGithub, IoLogoGitlab} from "react-icons/io5";

export const Footer = () => {
    return (
        <div>
            <footer className="footer grid w-full grid-flow-row place-items-center text-center gap-y-10 gap-x-4 text-sm p-10 dark:bg-black bg-white dark:text-white text-black rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link href="/"><a className="link link-hover">Home</a></Link>
                    <Link href="/"><a className="link link-hover">Home 2</a></Link>
                    <Link href="/"><a className="link link-hover">Home 3</a></Link>
                </div>
                <div>
                <div className="grid grid-flow-col gap-4">
                    <Link href="https://github.com/NickBland"><a><IoLogoGithub></IoLogoGithub></a></Link>
                    <Link href="https://git.nickbland.dev/explore"><a><IoLogoGitlab></IoLogoGitlab></a></Link>
                    </div>
                </div>
                <div>
                    <p>Made with ❤️ by Nick Bland</p>
                </div>
            </footer>
        </div>
    );
}