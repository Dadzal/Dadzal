import React from 'react';
import './Footer.css';
import kl from '../Components/img/imgs.png';


function Footer() {
    return(
        <div className='footer-container'>
            <section className="footer-subscription">
               <p className="footer-subscription-heading">
                    Join the adventure newsletter to receive our best vacation deals
               </p>
               <p className="footer-subscription-text">
                    You can unsubscribe at any time.
               </p>
               <div className="input-areas">
                  <form>
                      <input
                         type='email'
                         name='email'
                         placeholder='Your Email'
                         className='footer-input'
                      />

                <button>Subscribe</button>
  
                  </form>
                  <img src={kl} alt="map"/>
               </div>
            </section>
        </div>
    );
}


export default Footer;




