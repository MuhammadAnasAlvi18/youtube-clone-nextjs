import Image from "next/image"
import Link from "next/link"
import beast from '../assets/images/beast.webp'
import thumb from '../assets/images/thumb.jpeg'
import verified from "../assets/images/verified.png"

const Cards = ({channelName,channelLogo,isChannelVerfied,Videothumbnail,Videotitle,Videoviews,Videodate,}) => {
    return(
        <>
            <div className="video-cards">
                <Link href="#"><Image src={Videothumbnail} alt="image" className="card-thumbnail" priority/></Link>
                <div className="channel-info">
                    <div className="channel-logo"><Image src={channelLogo} alt="image"/></div>
                    <Link href="#" className="is-verified"><h6>{channelName}</h6> {isChannelVerfied && <Image src={verified} alt="image"/>}</Link>
                </div>
                <div className="video-title">
                    <Link href="#"><h6>{Videotitle}</h6></Link>
                </div>
                <div className="video-info">
                    <span>{Videoviews} views</span>
                    <span>•</span>
                    <span>{Videodate}</span>
                </div>
            </div>
        </>
    )
}

export default Cards;