import type {NextPage} from 'next';
import Image from "next/future/image";
import NavBar from "../components/navbar";
import {Footer} from "../components/footer"

import splashDark from "../public/splashDarkFinal.jpg"
import splashLight from "../public/splashLightFinal.jpg"

const Home: NextPage = () => {
    return (
        <div className="">
            <NavBar title="Home | nickbland.dev"></NavBar>
            
            <main className="">
                {/* MAIN BANNER SECTION BELOW */}
                <div className="container relative min-w-full min-h-screen flex flex-col items-center py-12">
                    <div className="dark:block hidden"><Image className="flex-shrink-0 h-full w-auto" src={splashDark}/></div>
                    <div className="dark:hidden block"><Image className="flex-shrink-0 h-full w-auto" src={splashLight}/></div>
                </div>
                {/* <div className="w-full mt-8 relat" */}
            </main>
            <Footer></Footer>   
        </div>
  )
}

export default Home
