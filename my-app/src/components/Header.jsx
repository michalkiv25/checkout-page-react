// impory from project
import "../App.css";

function Header() {
    // All img at Header
    const img1="/images/Screen Shot 2022-03-24 at 17.28 2-1.png";
    const img2="/images/Screen Shot 2022-03-24 at 17.28 3.png";
    const img3="/images/Screen Shot 2022-03-24 at 17.28 4.png";
    const img4_Big="/images/Screen Shot 2022-03-24 at 17.28 1.png"
  return (

      <div className="center-container">
          <header>
              <img className='img' src={img1} alt="Screen Shot"></img>
              <img className='img' src={img2} alt="Screen Shot"></img>
              <img className='img' src={img3} alt="Screen Shot"></img>
              <h1 className='title_header'>What we'll ship <br></br> you today</h1>
          </header>
              <img className='img_header' src={img4_Big} alt="CuraLin" width="500" height="600"></img>
      </div>
  )
}

export default Header