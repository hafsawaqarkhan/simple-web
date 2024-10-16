import Header from "../components/Header/Header"
import styles from "../about/about.module.css"
import Footer from "../components/Footer/Footer"

function AboutPage  () {
    return(
     <div className ={styles.container}>
        <Header></Header>

        <h1 className = {styles.header}>This is AboutPage</h1>
        
        <Footer></Footer>
        </div>
    ) 
}

export default AboutPage;