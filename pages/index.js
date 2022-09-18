import Head from 'next/head';
//import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import App from './App';
import Link from 'next/link'
import Navbar from './IntroNavbar'
import Image from 'next/image'
import { ChakraProvider } from "@chakra-ui/react";
import React, {useState, useEffect} from 'react';
import TitleGraph from './titleGraphic'

export default function Home() {
  return (
  <>
    <Navbar />
    <TitleGraph />
  </>
  );
}