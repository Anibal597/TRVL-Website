import React from 'react'
import './Newsletter.css'
import '../../App.css'
import { Button } from './Button'

function Newsletter (){

    return (
        <div className="newsletter-container">
        <section className='newsletter-subscription'>
                <p className='newsletter-subscription-heading'>
                  Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='newsletter-subscription-text'>
                  You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                  <form>
                    <input
                      className='newsletter-input'
                      name='email'
                      type='email'
                      placeholder='Your Email'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                  </form>
                </div>
              </section>
              </div>
    )


}

export default Newsletter;
