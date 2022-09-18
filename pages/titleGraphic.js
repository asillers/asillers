import styles from '../styles/utils.module.css';
import App from './App';
import Link from 'next/link';
import Image from 'next/image';

export default function TitleGraph() {
  return (
<div>
<div className={styles.nameText}>
<svg viewBox="5 0 50 20" xmlns="http://www.w3.org/2000/svg">

  <path id="MyPathE" fill="none" stroke="none"
        d="M 0 -40 L 140 100" />
<text>
    <textPath href="#MyPathE">
    <animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

  <path id="MyPathD" fill="none" stroke="none"
        d="M 0 -40 L 140 100" />
<text>
    <textPath href="#MyPathD">
    <animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

  <path id="MyPathC" fill="none" stroke="none"
        d="M 0 -30 L 130 100" />
<text fill="#000" fontSize="5">
    <textPath href="#MyPathC">
     <animate attributeName="startOffset" from="-100%" to="00%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

  <path id="MyPathB" fill="none" stroke="none"
        d="M 0 -20 L 120 100" />
<text>
    <textPath href="#MyPathB">
    <animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

  <path id="MyPathA" fill="none" stroke="none"
        d="M 0 -10 L 110 100" />
<text>
    <textPath href="#MyPathA">
     <animate attributeName="startOffset" from="-100%" to="00%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

  <path id="MyPath" fill="none" stroke="none"
        d="M 0 0 L 100 100" />
<text>
    <textPath href="#MyPath">
    <animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>

  </text>

   <path id="MyPath2" fill="none" stroke="none"
        d="M 0 10 L 90 100" />
<text>
    <textPath href="#MyPath2">
    <animate attributeName="startOffset" from="-100%" to="00%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

   <path id="MyPath3" fill="none" stroke="none"
        d="M 0 20 L 80 100" />
<text>
    <textPath href="#MyPath3">
    <animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="50s" repeatCount="indefinite"></animate>
      J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur J Arthur
   </textPath>
  </text>

</svg>
</div>
</div>
)}
  //    <TitleGraph />