import Navbar from '../components/navbar/Navbar';
import Blogs from '../components/Blogs/Blogs';
import Footer from '../components/footer/Footer';
import HeroSec from './HeroSec';

export default function Home({authenticated}) {
 
  return (
    <div>
      <Navbar authenticated = {authenticated}   />
      <HeroSec/>
      <Blogs authenticated = {authenticated}  />
      <Footer />
    </div>
  );
}
