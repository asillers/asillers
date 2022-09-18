import Head from 'next/head';
//import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/utils.module.css';
import App from './App';
import Link from 'next/link';
import Navbar from './IntroNavbar';
import Image from 'next/image';
import devLogo from '../public/img/albumcover.jpg';

export default function Graphics() {
  return (
<>
<Navbar />
            <div>
                 <div className={styles.descrTitle}>Selected Personal and Commercial</div>
            </div>


<div className='flex justify-center mt-10'>  
  <div className= ''>
    <Image
      alt="Image Alt"
      src="/img/vietnam.png"
      height="1200px"
      width="800px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
  <div className=''>
    <Image
      alt="Image Alt"
      src="/img/easter.png"
      height="1200px"
      width="600px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>

<div className=''>
  <div >
    <Image
      alt="Image Alt"
      src="/img/sub1.jpg"
      height="1000px"
      width="2000px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>


<div className='mt-10'>
  <div>
    <Image
      alt="Image Alt"
      src="/img/whatwhhhh.jpg"
      height="700px"
      width="1000px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
</div>

<div className='flex justify-center mt-10 align-top'>
  <div className='align-top'>
    <Image
      alt="Image Alt"
      src="/img/Green Lodge Poster 2.jpg"
      height="1450px"
      width="900px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
  <div className='m-3 align-top'>
    <Image
      alt="Image Alt"
      src="/img/Green Lodge Poster 1.jpg"
      height="1400px"
      width="900px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
  <div className='align-top'>
    <Image
      alt="Image Alt"
      src="/img/threnodies black afk.png"
      height="960px"
      width="700px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>

</div>

</>
  );
}