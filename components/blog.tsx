import Tags from "./tags";
import Image from "next/image";
import Author from "./author";
import style from "../styles/blog.module.scss"
import { getPosts, getPostsByTags } from "../services/post.service";
import Link from "next/link";
export default function Blog(){
       let cards : any
       
       if(!cards){
           
           cards = getPosts().map((card)=>{
            return(
                <div className={style.card} key= {card.id}>
                    <Image src={card?.backgroundImageURL} width={400} height={200} />
                    <Author {...{...card.author ,"minRead" : card.minRead }} key= {card.id}/>
                    <h1>{card?.title}</h1>
                    <p>{card?.text?.substring(0,300)}...</p>
                    <div className={style.buttonGroup}>
                        <button>
                            <Link href={`/article/${card?.id}`}>Read More</Link>
                        </button>
                    </div>
                </div>
            )
           })
       }
       else{
        return console.log(cards)
       }

       
    return(
        <div className={style.blog}>
            <h1>EDITORS PICK</h1>
        <div className={style.cardsAndTag}>
            <div className={style.cards}>
            {cards}
            </div>
            <Tags />
        </div>
        </div>
        )
}