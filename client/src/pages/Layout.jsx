import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MobileActionBar from '../components/MobileActionBar'
import FooterDesktop from '../components/FooterDesktop'

const Layout = () => {
    return (
        <div className="flex flex-col h-screen sm:h-max ">
            <header>
                <Navbar />
            </header>
            <main className='max-w-full overflow-hidden sm:overflow-visible px-9 sm:px-20 md:px-[8.75rem] py-9'>
                <Outlet />
            </main>

            <footer className="w-full sm:h-[10vh] flex items-center">
                <div className='sm:hidden w-full'>
                    <MobileActionBar />
                </div>

                <FooterDesktop />
            </footer>
        </div>
    )
}

export default Layout;
