import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MobileActionBar from '../components/MobileActionBar'
import FooterDesktop from '../components/FooterDesktop'
import SectionIndicator from '../components/SectionIndicator'
import ScrollDownArrow from '../components/ScrollDownArrow'

const Layout = () => {


    return (
        <div className="flex flex-col h-screen sm:h-max ">
            <header>
                <Navbar />
            </header>
            <main className='h-full flex flex-col max-w-full overflow-hidden sm:overflow-visible px-4 sm:px-20 md:px-[8.75rem] py-9 grow sm:grow-0'>
                <SectionIndicator />
                <Outlet />
                <ScrollDownArrow />

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
