import style from "../styles/author.module.scss"
import Image from "next/image"
export default function Author(props: any){
    return(
        <div className={style.author}>
            <div>by</div> 
            <Image src={props.authorPhoto} width={32} height={32}/>
            <div className={style.authorName}>{props.authorName}</div>
            <span className={style.articleReadTime}>({props.minRead})</span>
        </div>
        )
}