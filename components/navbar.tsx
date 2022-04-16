import React, {ReactNode} from "react";
import {useTheme} from "next-themes";
import Head from "next/head";
import Link from "next/link";

type Props = {
    children?: ReactNode
    title?: string
    description?: string
}

const NavBar = ({children, title = "nickbland.dev | Home", description = "A website made by Nick Bland."}: Props) => {
    const {theme, setTheme} = useTheme();
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
                <nav>
                    <Link href="/">
                        <a>nickbland.dev</a>
                    </Link>
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
                </nav>
            </header>
        </div>
    )
}

export default NavBar