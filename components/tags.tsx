import Link from "next/link"
import style from "../styles/tags.module.scss"

export default function Tags() {
    const tags = [
        "Technology",
        "History",
        "JavaScript",
        "Cooking",
        "Photography",
        "Animals",
        "Angular",
    ]

    const everyTag = tags.map((item)=>{
        return <li key={item}><Link href={`/tags/${item.toLowerCase()}`}>{item}</Link></li>
    })

    return (
        <div className={`${style.tags} col-md-2`}>
            <h1>tags</h1>
            <ul>
                {everyTag}
                <li><Link href={`/`}>Editors Pick</Link></li>
            </ul>
        </div>
    )
}