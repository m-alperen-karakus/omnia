import { useRouter } from "next/router";
import { getPostWithID } from "../../services/post.service";
import Image from "next/image";
import Author from "../../components/author";
import style from "../../styles/article.module.scss";
const Article = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = getPostWithID(`${id}`);
  const everyTag = post?.tags?.map((tag: any) => {
    return <p className={style.tag}> # {tag}</p>;
  });

  return (
    <div>
      <Image
        src={post?.backgroundImageURL}
        height={600}
        width={1920}
        layout="responsive"
      />
      <div className={style.article}>
        <h1>{post?.title}</h1>
        <Author {...{ ...post.author, minRead: post.minRead }} key={post.id} />
        <div className={style.tags}>{everyTag}</div>
        <p className={style.text}>{post?.text}</p>
      </div>
    </div>
  );
};

export default Article;
