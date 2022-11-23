import React from 'react';
import './Gallery.css';
import images from '../../constants/images';
import { MenuItem, SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';



const imagess = [images.gallery01,
images.gallery02,
images.gallery03,
images.gallery04,]


const Gallery = () => {

  const scroolRef = React.useRef(null);
  const scrool = (direction) => {
    const { current } = scroolRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instragram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}  >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore accusantium asperiores quidem eaque consequuntur optio.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scroolRef}>
          {imagess.map((image, index)=>(
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`} >
              <img src={image} alt="Gallery Image" />
              <BsInstagram className='gallery__images-icon' />

            </div>
          )) }
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scrool('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scrool('right')} />
        </div>

      </div>

    </div>
  )


}


export default Gallery;
