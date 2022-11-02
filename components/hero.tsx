import { getFeaturedPost, getPosts } from "../services/post.service";
import style from "../styles/hero.module.scss";
import Author from "./author";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const featuredPost = { ...getFeaturedPost()[0] };
  return (
    <div
      className={style.hero}
      style={{ background: `url(${featuredPost.backgroundImageURL})` }}
    >
      <div className={style.card}>
        <h4>FEATURED ARTICLE</h4>
        <h1>{featuredPost.title}</h1>
        <Author
          {...{ ...featuredPost.author, minRead: featuredPost.minRead }}
          key={featuredPost.id}
        />
        <p>{featuredPost?.text?.substring(0, 300)} ...</p>
        <div className={style.buttonGroup}>
          <button>
            <Link href={`/article/${featuredPost?.id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
