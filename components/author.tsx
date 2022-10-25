import style from "../styles/author.module.scss"
import Image from "next/image"
export default function Author(){
    const profilePhoto = "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ProfilePhoto.png?alt=media&token=d72c9d57-7ecc-41cc-b2ed-43c0f632a2df"
    return(
        <div className={style.author}>
            <div>by</div> 
            <Image src={profilePhoto} width={32} height={32}/>
            <div className={style.authorName}>Andrea Wise</div>
            <span className={style.articleReadTime}>(4 mins read)</span>
        </div>
        )
}