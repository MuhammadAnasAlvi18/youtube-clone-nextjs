'use client'
import Image from "next/image";
import play from "../assets/images/play.png"
import bar from "../assets/images/bar.png"
import fireship from '../assets/images/fireship.jpg'
import beast from '../assets/images/beast.webp'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faVideo } from "@fortawesome/free-solid-svg-icons";
import {faCompass , faCirclePlay , faClock, faHeart} from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const HandleSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <div className={`sidebar-main ${sidebar && "close"}`}>
            <span className="top-light"></span>
            <span className="bottom-light"></span>
            <div className="sidebar-top-logo">
                <Link href="#" onClick={HandleSidebar}><Image alt="bar" src={bar} width={25} height={25}/></Link>
                <Link href="#" className="flex-logo">
                <span><Image alt="play" src={play} width={15} height={15}/></span>
                <h5>YouTube</h5>
                </Link>
            </div>
            <div className="sidebar-links">
                <Link href="/" className="active"> <span><FontAwesomeIcon icon={faHouse} /></span> Home</Link>
                <Link href="/explore"> <span><FontAwesomeIcon icon={faCompass} /></span> Explore</Link>
                <Link href="/subscriptions"> <span><FontAwesomeIcon icon={faCompass} /></span> Subscriptions</Link>
            </div>
            <div className="sidebar-links">
                <Link href="#"> <span><FontAwesomeIcon icon={faCirclePlay} /></span> Library</Link>
                <Link href="#"> <span><FontAwesomeIcon icon={faClock} /></span> History</Link>
                <Link href="#"> <span><FontAwesomeIcon icon={faVideo} /></span> Your Videos</Link>
                <Link href="#"> <span><FontAwesomeIcon icon={faHeart} /></span> Liked Videos</Link>
            </div>
            <div className="sidebar-links subscription-links">
                <h6>Subscriptions</h6>
                <Link href="#" className="notify"> <span><Image alt="fireship" src={fireship} width={30} height={30}/></span> Fireship</Link>
                <Link href="#"> <span><Image alt="beast" src={beast} width={30} height={30}/></span> Mr Beast</Link>
                <Link href="#"> <span><Image alt="fireship" src={fireship} width={30} height={30}/></span> Fireship</Link>
                <Link href="#" className="notify"> <span><Image alt="beast" src={beast} width={30} height={30}/></span> Mr Beast</Link>
            </div>
            
        </div>
    );  
}

export default Sidebar;