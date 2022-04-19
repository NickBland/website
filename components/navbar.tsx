import React, {Fragment, ReactNode, useState} from "react";
import {useTheme} from "next-themes";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {XIcon, MenuIcon, BellIcon} from "@heroicons/react/outline"
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

type Props = {
    children?: ReactNode
    title?: string
    description?: string
}

const places = [
    {name: "Home", href: "#", current: "true"},
    {name: "About", href: "/about", current: "false"},
];

// Combine classNames together to form a single string based on whether it is selected or not. See comment below
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

const NavBar = ({children, title = "nickbland.dev | Home", description = "A website made by Nick Bland."}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="author" content="Nick Bland" />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                {/* <nav>
                    <Link href="/">
                        <a>nickbland.dev</a>
                    </Link>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
                </nav>
                <Image
                    className="block lg:hidden h-8 w-auto"
                    src="/logo-white.svg"
                    alt="Workflow"
                    height={100}
                    width={100}
                />
                
                */}

                <nav className="dark:bg-white bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 dark:hidden block">
                                    <Image
                                        className=""
                                        src="/logo-white.svg"
                                        alt="logo"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className="flex-shrink-0 hidden dark:block">
                                    <Image
                                        className=""
                                        src="/logo-black.svg"
                                        alt="logo"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link href="/"><a className="dark:text-black">Home</a></Link>
                                        <Link href="/"><a className="dark:text-black">Home 2</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">Open Mobile Menu</span>
                                    {!isOpen ? (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <Transition show={isOpen} appear={true}>
                    <Transition.Child
                        
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        as={Fragment}
                    >
                        <div id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/"><a className="dark:text-white">Home</a></Link>
                                <Link href="/"><a className="dark:text-white">Home 2</a></Link>
                            </div>
                        </div>
                    </Transition.Child>
                    </Transition>
                </nav>


            </header>
        </div>
    )
}

export default NavBar