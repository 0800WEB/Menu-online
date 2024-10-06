import ButtonPrimary from "../components/Buttons/ButtonPrimary"
import MenuCatalog from "../components/MenuCatalog"

const Home = () => {
    return (
        <div id="home" className="h-full overflow-hidden">
            <section className="hidden sm:flex flex-col lg:flex-row h-[65vh] lg:h-[45vh]">
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col gap-4 xl:w-9/12 ">
                        <h1 className="sm:text-4xl md:leading-[3rem] lg:text-[2.5rem] font-black text-pretty lg:text-balance">
                            Tu Comida Ideal Empieza Aquí
                        </h1>
                        <p className="font-medium leading-[1.4rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi viverra posuere tortor, sed scelerisque urna lobortis non. Sed nulla lorem, porta fringilla aliquet vel, bibendum vulputate turpis.
                        </p>
                    </div>
                    <ButtonPrimary textChildren={"Recomendados"} typeButton={"button"} />
                </div>
                <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img className="sm:object-cover z" src="https://s3-alpha-sig.figma.com/img/bd7a/841e/e8c83587bd5205c284fc8554ccda747f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ecood-hxJRfRjaekLZ4FxSxKHXf1gJhJliCdlXdP0KsrbNvYHmNoX2yse7EhxrsR8YN8f0EQbuL8vghBbkot-24cAc2ZcfTHJyHxMujxq-AsQIE4oZJD6EBk7Y2UzoehgwSNlet91q0thdux5-TkCmdaJcGy2pSdAuKBmj2jjeCW3rt4X-Va8Udcfg4RKEK-fu2Sd-dZ-oprmNBzi93p21DSZHhEC4V305zyT6DVJk3ctXSQCd9slKjlSv7knnC2bUMPphhHxQzXcWQuY55XNDCcvpMxmSS-KnMtquoHngeIQd~UX2Rmsw1tNAqLtA9X8K47T24Krm3rynUt3DjXpA__" alt="" />
                </div>
            </section>
            <MenuCatalog />
        </div>
    )
}

export default Home