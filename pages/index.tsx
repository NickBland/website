import type {NextPage} from 'next';
import NavBar from "../components/navbar";
import {Footer} from "../components/footer"

const Home: NextPage = () => {
    return (
        <div className="">
            <NavBar title="Home | nickbland.dev"></NavBar>

            <main className="">
                {/* MAIN BANNER SECTION BELOW */}
                <div className="">

                </div>
                
            </main>
            <Footer></Footer>   
        </div>
  )
}

export default Home
