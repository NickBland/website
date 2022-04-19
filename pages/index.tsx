import type {NextPage} from 'next';
import NavBar from "../components/navbar";
import {useTheme} from "next-themes";

const Home: NextPage = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div className="">
            <NavBar title="Home | nickbland.dev"></NavBar>

            <main className="">
                <h1>Test Comment</h1>
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
            </main>
        </div>
  )
}

export default Home
