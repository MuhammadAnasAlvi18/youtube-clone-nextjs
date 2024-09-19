import Link from "next/link";


const SuggestedLinks = ({text,isActive}) => {
    return(
        <>
            <div className="suggested-links">
                <Link href="#" className={`${isActive && 'active'}`}>{text}</Link>
            </div>
        </>
    )
}

export default SuggestedLinks;