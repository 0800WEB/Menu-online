const CardNotifiicationsMobile = ({ imgOffer }) => {
    return (
        <div className="w-full h-[8.5rem] rounded-custom-1 overflow-hidden">
            <img className="h-full w-full object-fill" src={imgOffer} alt="Offer or Notification" />
        </div>
    )
};

export default CardNotifiicationsMobile;