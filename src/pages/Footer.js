import React from 'react'

function Footer () {
    const newLocal = <input type="email" name="email" placeholder="Your Email" className="footer-input" />
    return (
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
                        <button buttonStyle='btn-outline'>Subscribe</button>
                    </form>
              </div>
          </section>
        </div>
    );
}


export default Footer