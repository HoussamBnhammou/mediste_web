import Link from 'next/link'
import MenuBar from '../components/menu-bar';
import '../styles/globals.css'; 


const dashboard = () => (
    <div>
        < MenuBar/>
        <h1>
            dashboard

        </h1>
            <Link legacyBehavior  href='/home'>
            <a>home</a>
            </Link>
        
    </div>
)


export default dashboard