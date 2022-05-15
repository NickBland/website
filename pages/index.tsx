import type {NextPage} from 'next';
import Image from "next/image";
import NavBar from "../components/navbar";
import {Footer} from "../components/footer"

const Home: NextPage = () => {
    return (
        <div className="">
            <NavBar title="Home | nickbland.dev"></NavBar>
            
            <main className="">
                {/* MAIN BANNER SECTION BELOW */}
                <div className="container relative min-w-full min-h-screen flex flex-col items-center py-12 ">
                    <Image
                    className=""
                    src="/splashDarkFinal.jpg"
                    alt="Dark background splash screen"
                    layout="fill"     
                    quality="100"
                    priority
                    />
                </div>
                {/* <div className="w-full mt-8 relat" */}
            </main>
            <Footer></Footer>   
        </div>
  )
}

export default Home
