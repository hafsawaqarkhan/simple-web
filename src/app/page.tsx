import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import Styles from "./header.module.css";
import Link from "next/link"
export default function Home() {
  return (
    <div
    >
      <Header></Header>
      <div>
        <ul>
          <li><Link href= "/">Home</Link></li>   
           <li><Link href="/about" target = "_blank">About</Link></li>
          <li>< Link href="/contact">contact</Link></li> 
          <li> <Link href= "/services">services</Link></li>
        </ul>
       
      </div>
      <h1 >Hafsa Khan </h1>
      <Footer></Footer>
    </div>
    
  );
} 

