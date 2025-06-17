import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import slide1 from '../assets/jpw_1.jpg'
import slide2 from '../assets/jpw_2.jpg'
import slide3 from '../assets/jpw_3.jpg'

const divStyle = {
  display: 'flex',
  backgroundSize: '100vw 100vh',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw'
}

const slideImages = [
  {
    url: slide1,
    caption: 'Powerful, Efficient, Reliable',
    color: 'blue'
  },
  {
    url: slide2,
    caption: 'High performance motor with long-lasting durability',
    color: 'white'
  },
  {
    url: slide3,
    caption: 'Powerful, Efficient, Reliable',
    color: 'blue'
  },
];


const Hero = () => {
  return (
    <div className=''>
      <Slide autoplay duration={5000} transitionDuration={1000} easing='ease' infinite>
         {slideImages.map((slideImage, index)=> (
            <div className='' key={index}>
              <div className='' style={{ ...divStyle, backgroundSize: 'cover', 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <h1 style={{color: slideImage.color}} className='slideshow-text flex w-full justify-center mt-10 text-6xl font-bold px-2'>{slideImage.caption}</h1> */}
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default Hero