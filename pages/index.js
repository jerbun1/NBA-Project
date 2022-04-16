import Head from 'next/head';
import Image from 'next/image';
import NbaTeam from '../component/Team/NbaTeam';
import styles from '../styles/Home.module.css';
import Header from '../component/Header/Header';
import Link from 'next/link';
import Footer from '../component/Footer/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      <div className='main'>
        <div className='title'>
          {/* <h1>NBA</h1>
          <h2>Where Amazing Happens</h2> */}
          <div className='title-logo'>
            <img className="nba-Logo" src='https://content.sportslogos.net/logos/6/982/full/8147__national_basketball_association-primary-2018.png' alt='NBA Jobe Logo'/>
          </div>

        </div>
   
         
        {/* <img className="stephCurry" src="https://i.ibb.co/LCjSFzN/Steph-Curry.png" alt="Steph-Curry" border="0"/>      
        <img className="kevinDurant" src="https://i.ibb.co/tsznL6T/Kevin-Durant.png" alt="Kevin-Durant" border="0"/>    
        <img className="giannis" src="https://i.ibb.co/XS3TkQX/giannis.png" alt="giannis" border="0"/>        */}
        
        <div className="content">
          <h1 className='gradient-Text'>Basketball 
          <br />It doesnt produce greatness it reveals it</h1>
          
        </div>
        <div className='bar'>
          
          <div className='slide1'>
            <Link href='/Team'>
              <button className="team-btn_1">Teams</button>
            </Link> 
          </div>
          
          <div className='slide2'>
            <Link href="/Players">
              <button className="team-btn_2">Players</button>
            </Link>
          </div>
          
        </div>
        



      </div>
    </div>
  )
}
