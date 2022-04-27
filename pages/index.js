import { useEffect } from "react"
import Head from "next/head";
export default function Home() {
  let myIndex = 0;
  useEffect(() => {
    // const carousel = () => {
    //   let i;
    //   let x = document.getElementsByClassName("mySlides");
    //   for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";
    //   }
    //   myIndex++;
    //   if (myIndex > x.length) { myIndex = 1 }
    //   x[myIndex - 1].style.display = "block";
    //   setTimeout(carousel, 3500); // Change image every 2 seconds
    // }
    // carousel();
  }, [])

  return (

    <>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </Head>
      <div className="w3-content w3-section">
        <img className="mySlides w3-image" src="/uno.jpg" alt="img_la" style={{}} />
        {/* <img className="mySlides w3-image" src="/due.jpg" alt="img_ny" style={{}} />
        <img className="mySlides w3-image" src="/tre.jpg" alt="img_chicago" style={{}} /> */}
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
        </p>
      </div>
 
    </>
  )
}
