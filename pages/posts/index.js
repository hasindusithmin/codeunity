
import Link from "next/link"
import Head from 'next/head'


export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  const posts = await res.json()
  return {
    props:{posts}
  }
}


export default function Posts({posts}) {  

  
  return (
    <>
      <Head>
        <title>posts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      </Head>
      <h1>All Posts</h1>
      {posts.map(post => (
          <div className="w3-card-4 w3-panel" key={post.id}>
            <Link href={'/posts/' + post.id}  ><h3>{ post.title }</h3></Link>
            <p>{post.title}</p>
            <p>written by:-------</p>
          </div>
      ))}
    </>
  )

}