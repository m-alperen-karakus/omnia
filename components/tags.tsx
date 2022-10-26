import Link from "next/link"
import style from "../styles/tags.module.scss"

export default function Tags() {
    const tags = [
        "Technology",
        "Open Source",
        "JavaScript",
        "Minimalism",
        "Self-help",
        "Animals",
        "Herbivores",
        "HTML",
        "CSS",
        "PHP",
        "Web Technologies",
        "Career",
        "Life",
        "Spirituality",
        "Food",
        "Cooking",
        "Sports",
        "Racing",
        "Mountain Hiking",
        "Cruising"
    ]

    const everyTag = tags.map((item)=>{
        return <li key={item}><Link href="/category">{item}</Link></li>
    })

    return (
        <div className={style.tags}>
            <h1>tags</h1>
            <ul>
                {everyTag}
            </ul>
        </div>
    )
}