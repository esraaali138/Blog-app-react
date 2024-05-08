import Carousel from 'react-bootstrap/Carousel';

function HeroSec() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>First slide label</h5>
          <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/pexels-photo-585753.webp"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/pexels-photo-682503.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Third slide label</h5>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSec;