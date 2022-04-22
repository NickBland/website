import type {NextPage} from 'next';
import NavBar from "../components/navbar";

const Home: NextPage = () => {
    return (
        <div className="">
            <NavBar title="Home | nickbland.dev"></NavBar>

            <main className="">
                <h1>Test Comment</h1>
                
            </main>
        </div>
  )
}

export default Home
