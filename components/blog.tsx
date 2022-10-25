import Tags from "./tags";
import Image from "next/image";
import Author from "./author";
import style from "../styles/blog.module.scss"
export default function Blog(){

   const data = [
          {   
            "minRead":5,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "author":"Andrea Wise",
            "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a"
        },
        {   
            "minRead":5,
            "id": 2,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "author":"Andrea Wise",
            "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a"
        },
        {   
            "minRead":5,
            "id": 3,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "author":"Andrea Wise",
            "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a"
        },
        {   
            "minRead":5,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "author":"Andrea Wise",
            "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a"
        },
        {   
            "minRead":5,
            "id": 2,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "author":"Andrea Wise",
            "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a"
        },
        {   
            "minRead":5,
            "id": 3,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "text": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "author":"Andrea Wise",
            "backgroundImage": "https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a"
        },
        ]

       const cards = data.map((card)=>{
        return(
            <div className={style.card}>
                <Image src={card.backgroundImage} width={400} height={200} />
                <Author />
                <h1>{card.title}</h1>
                <p>{card.text}</p>
                <div className={style.buttonGroup}>
                    <button>Read More</button>
                </div>
            </div>
        )
       })


    return(
        <div className={style.blog}>
            <h1>Editors Pick</h1>
        <div className={style.cardsAndTag}>
            <div className={style.cards}>
            {cards}
            </div>
            <Tags />
        </div>
        </div>
        )
}