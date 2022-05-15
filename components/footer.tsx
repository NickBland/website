import Link from "next/link";
import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {IoLogoGithub, IoLogoGitlab} from "react-icons/io5";
import {SiBitcoin, SiEthereum, SiMonero} from "react-icons/si";

export const Footer = () => {

    const addresses: {[index: string]:string} = {
        Bitcoin: "bitcoinAddress",
        Ethereum: "ethereumAddress",
        Monero: "moneroAddress",
    };

    const [isOpen, setIsOpen] = useState(false);
    const [coin, setCoin] = useState<string>("bitcoin");

    return (
        <>
            <footer className="footer grid w-full grid-flow-row place-items-center text-center gap-y-10 gap-x-4 text-sm p-10 dark:bg-black bg-white dark:text-white text-black bottom-0 max-w-full">
                <div className="grid grid-flow-col gap-4">
                    <Link href="/"><a className="link link-hover">Home</a></Link>
                    <Link href="/"><a className="link link-hover">About</a></Link>
                    <Link href="/"><a className="link link-hover">Projects</a></Link>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <Link href="https://github.com/NickBland"><a><IoLogoGithub></IoLogoGithub></a></Link>
                    <Link href="https://git.nickbland.dev/explore"><a><IoLogoGitlab></IoLogoGitlab></a></Link>
                    <span className="inline-block border-l border-solid mx-0"></span>
                    <SiBitcoin onClick={() => {setIsOpen(true); setCoin("Bitcoin")}} className="hover:text-[#F7931A] hover:cursor-pointer"></SiBitcoin>
                    <SiEthereum onClick={() => {setIsOpen(true); setCoin("Ethereum")}} className="hover:text-[#8A93B2] hover:cursor-pointer"></SiEthereum>
                    <SiMonero onClick={() => {setIsOpen(true); setCoin("Monero")}} className="hover:text-[#F26822] hover:cursor-pointer"></SiMonero>
                </div>
                <div>
                    <p>Made with ❤️ by Nick Bland</p>
                </div>
            </footer>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-dark-100">{coin}</Dialog.Title>
                                    <div className="text-sm text-dark-200 select-all">
                                        {addresses[coin]}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}