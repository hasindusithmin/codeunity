import Head from 'next/head'
import Link from "next/link"

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(comment => {
      return {
        params: { id: comment.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const comments = await res.json();
  
    return {
      props: { comments}
    }
  }

export default function Demo({comments}) {
    
    return (
        <>
        <Head>
          <title>posts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        </Head>
        <div>
          <h1>All Comments <Link href={'/posts'}><span className='w3-button w3-right'>posts</span></Link></h1>
          {comments.map(com => (
            <div key={com.id} className="w3-card-4 w3-panel">
                <h3>{com.email}</h3>
                <h2>{com.name}</h2>
                <p>
                    {com.body}
                </p>
            </div>
          ))}
        </div>
        </>
      )
}