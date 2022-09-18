import styles from '../styles/utils.module.css';
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/Link'
//function HomePage(){
//    const [contentSet] = React.useState()
//}

export default function Navbar(){
return(
<div>

<div className='flex justify-center'>
  <div className= ''>
    <Image
      alt="Image Alt"
      src="/img/kandL2.svg"
      height="100px"
      width="200px"
      objectFit="contain" // Scale your image down to fit into the container
    />
  </div>
    <div>
        <a href='./'><div className={styles.namePlate}>J Arthur</div></a>
    </div>
<div>
    <Image
      alt="Image Alt"
      src="/img/kandR2.svg"
      height="100px"
      width="200px"
      objectFit="contain" // Scale your image down to fit into the container
    />
</div>
</div>

           <div>
            <ul className={styles.navLinks}>
                    <Link href="#about-us">CV</Link>
                    <a href="graphics">Graphics</a>
                    <a href="physical">Physical</a>
                    <a href="photo.html">Photos</a>
                    <a href="#contact">Contact</a>
                    <a href="gpttest">GPT TEST</a>
            </ul>
            </div>

</div>
)
}
