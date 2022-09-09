import React, {Fragment, ReactNode, useState} from "react";
import {HiX, HiMenu} from "react-icons/hi"
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitch } from "./themeSwitch";


type Props = {
    children?: ReactNode
    title?: string
    description?: string
}

const NavBar = ({children, title = "nickbland.dev | Home", description = "A website made by Nick Bland."}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCheck = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="author" content="Nick Bland" />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="navbar dark:bg-black bg-white">
                <div className="navbar-start">
                    <div className="flex-shrink-0 hidden dark:block">
                        <Image
                            className=""
                            src="/logo-white.svg"
                            alt="logo"
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="flex-shrink-0 dark:hidden block">
                        <Image
                            className=""
                            src="/logo-black.svg"
                            alt="logo"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
                <div className="navbar-center lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost swap swap-rotate lg:hidden">
                            <input type="checkbox" checked={isOpen} onChange={handleCheck} />
                            <HiMenu className="block h-6 w-6 swap-off text-gray-400 hover:text-white hover:bg-gray-800" />
                            <HiX className="block h-6 w-6 swap-on text-gray-400 hover:text-white hover:bg-gray-800" />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow dark:bg-black bg-white rounded-box w-52">
                            <li><Link href="/"><a className="dark:text-white text-black text-sm font-medium block">Home</a></Link></li>
                            <li><Link href="/"><a className="dark:text-white text-black text-sm font-medium block">About</a></Link></li>
                            <li><ThemeSwitch /></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/"><a className="dark:text-white text-black">Home</a></Link>
                            <Link href="/"><a className="dark:text-white text-black">About</a></Link>
                            <Link href="/"><a className="dark:text-white text-black">Projects</a></Link>
                        </div>
                        <div className="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3">
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar