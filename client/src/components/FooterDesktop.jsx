import facebookIcon from '../assets/svg/facebook-icon.svg'
import instagramIcon from '../assets/svg/instagram-icon.svg'
import twitterIcon from '../assets/svg/twitter-icon.svg'
import arrowToTop from '../assets/svg/arrow-to-top.svg'

const FooterDesktop = () => {
    return (
        <section className='w-full hidden sm:flex justify-between px-9 sm:px-20 md:px-[8.75rem]'>
            <div className='flex justify-between items-center gap-6 lg:gap-12 sm:[&>img]:size-8 lg:[&>img]:size-10'>
                <img src={facebookIcon} alt="Facebook Social Link" />
                <img src={instagramIcon} alt="Instragam Social Link" />
                <img src={twitterIcon} alt="Twitter Social Link" />
            </div>

            <div className='flex items-center'>
                <p className='text-lg lg:text-xl font-medium leading-6'>
                    Todos los Derechos Reservados
                </p>
            </div>

            <div>
                <button className='sm:size-12 lg:size-[4rem] flex justify-center bg-black p-[0.65rem] rounded-full'>
                    <img className='h-full' src={arrowToTop} alt="Icon to Navbar" />
                </button>
            </div>

        </section>
    )
}

export default FooterDesktop