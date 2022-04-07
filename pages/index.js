import { useEffect } from "react"

export default function Home() {
  let myIndex = 0;
  useEffect(() => {
    const carousel = () => {
      let i;
      let x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    carousel();
  },[myIndex])
  return (
    
    <div className="w3-content w3-section">
      <img className="mySlides w3-image" src="/img_la.jpg" alt="img_la" style={{}}/>
      <img className="mySlides w3-image" src="/img_ny.jpg" alt="img_ny" style={{}}/>
      <img className="mySlides w3-image" src="/img_chicago.jpg" alt="img_chicago" style={{}}/>

    </div>
  )
}
