import style from "../styles/hero.module.scss"
import Author from "./author"

export default function Hero() {
    const backgroundStyle = "linear-gradient(0deg, rgba(28, 28, 28, 0.1}), rgba(28, 28, 28, 0.1)), url(https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a)"

    return (
        <div className={style.hero} style={{ background: "url(https://firebasestorage.googleapis.com/v0/b/omnio-eb0f4.appspot.com/o/ArticleImage.png?alt=media&token=3866f189-62bb-428e-bfe1-e06be72f789a)" }}>

            <div className={style.card}>
                <h4>FEATURED ARTICLE</h4>
                <h1>World’s Most Dangerous Technology Ever Made.</h1>
                <Author />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className={style.buttonGroup}>
                    <button>Read more</button>
                </div>
            </div>

        </div>
    )
}