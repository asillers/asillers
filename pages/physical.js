import Head from 'next/head';
//import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/utils.module.css';
import App from './App';
import Link from 'next/link';
import Navbar from './IntroNavbar';
import Image from 'next/image';
import devLogo from '../public/img/albumcover.jpg';

export default function Physical() {
  return (
<>
<Navbar />
            <div>
                 <div className={styles.descrTitle}>Signs</div>
            </div>


<div className='flex'>  
  <div className= 'flex-1'>
    <Image
      alt="Image Alt"
      src="/img/kinfesignfull2.jpg"
      height="500px"
      width="620px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
  <div className='flex-1'>
    <Image
      alt="Image Alt"
      src="/img/knifesign1.jpg"
      height="500px"
      width="590px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>

<div className='imageBox' style={{ position: "dynamic" }}>
  <div style={{ position: "dynamic"}} >
    <Image
      alt="Image Alt"
      src="/img/circlesignfull.jpg"
      height="1000px"
      width="2000px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>


<div className='flex'>
  <div>
    <Image
      alt="Image Alt"
      src="/img/america2full.jpg"
      height="4000px"
      width="4500px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
  <div>
    <Image
      alt="Image Alt"
      src="/img/america1full.jpg"
      height="4000px"
      width="4500px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>

<div className='imageBox' style={{ position: "dynamic" }}>
  <div style={{ position: "dynamic"}} >
    <Image
      alt="Image Alt"
      src="/img/woodfacefull.jpg"
      height="2000px"
      width="3000px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>

</>
  );
}