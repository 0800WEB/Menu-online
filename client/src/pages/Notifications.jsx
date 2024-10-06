import CardNotifiicationsMobile from "../components/CardNotifiicationsMobile"
import { pathsImgMock } from "../assets/other-assets/imgNotificationsMock"

const Notifications = () => {
    return (
        <div className="h-full overflow-y-scroll scrollbar-hide ">
            <div className="flex flex-col gap-6 p-1">
                {
                    pathsImgMock.map((pathImg, index) => {
                        return (
                            <CardNotifiicationsMobile imgOffer={pathImg.imgUrl} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Notifications