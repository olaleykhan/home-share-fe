import React from 'react';
import type { NextPage } from 'next';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import safety from '../assets/images/safety.jpg';
import people from '../assets/images/people.jpg';
import roommate from '../assets/images/roommate-search.jpg';
import transparency from '../assets/images/transwalk.jpg';

const about:NextPage = () => {
  return (
    <div className={styles.about_main}>
        <div className={styles.about_card}>
         <div className={styles.text_card}>
            <h1>ABOUT US</h1>
            <p>Founded 2021, We are your online concierge keen on making HouseMate search as easy and interesting as it can be. In doing this, 
                we are focused on bringing you the best matching algorithm based on your set preferences. This is so you 
                can have a variety of choices to pick from. You make the rules and we bring you the choices.
            </p>
         </div>
         <div className={styles.img_card}>
             <Image src={roommate} alt='House search' className={styles.img_carder} />
         </div>
        </div>
        <div className={styles.about_card}>
        <h2>
            We understand that living with the right people beats living on your own any day, anytime. When you live with 
            the right people, you don’t just share your space; you share your lifetime. Finding roommate(s)/housemate(s) 
            who are compatible with your lifestyle and preferences can be very time-consuming and frustrating, sometimes 
            expensive.
        </h2>
        </div>
        <div className={styles.bit_container}>
        <div className={styles.bit_card}>
            <Image src={people} alt='Different People'/>
            <h3> People</h3>
            <p>
               Everyone’s idea of a perfect housemate differs, so our searches and matching algorithm are based on your 
                preference and what’s important to you.
            </p>
        </div>
        <div className={styles.bit_card}>
            <Image src={safety} alt='safety lock'/> 
           <h3> Safety</h3>
            <p>
               Your safety is our priority as we verify the identity of all our clients before matching them on our platform.
            </p>
        </div>
        <div className={styles.bit_card}>
            <Image className='pic-fix' src={transparency} alt='Transparent Walks'/>
            <h3>Transparency</h3>
            <p>
             In a world of shady dealings, HouseMate was built to bridge the gap between individuals seeking to share an apartment or space.
            </p>
        </div>
        </div>
    </div>
  )
}

export default about;