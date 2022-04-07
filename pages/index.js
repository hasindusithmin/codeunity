import { useEffect } from "react"

export default function Home() {



  useEffect(() => {
    const carousel = () => {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    var myIndex = 0;
    carousel();
  }, [])
  return (
    <div className="w3-content w3-section">
      <div className="w3-display-container w3-text-white">
        <img className="mySlides w3-image" src="/img_la.jpg" alt="img_la"/>
        {/* <div className="w3-display-middle w3-large">img_la</div> */}
      </div>
      <div className="w3-display-container w3-text-white">
        <img className="mySlides w3-image" src="/img_ny.jpg" alt="img_ny"/>
        {/* <div className="w3-display-middle w3-large">img_ny</div> */}

      </div>
      <div className="w3-display-container w3-text-white">
        <img className="mySlides w3-image" src="/img_chicago.jpg" alt="img_chicago"/>
        {/* <div className="w3-display-middle w3-large">img_chicago</div> */}
      </div>
    </div>
  )
}
