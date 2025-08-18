import React from 'react'
import './SignUp.css'
import '../../App.css'
import { Button } from './Button'

function SignUp (){

    return (
        <div className="SignUp-container">
        <section className='SignUp-subscription'>
                <p className='SignUp-subscription-heading'>
                Join the TRVL Adventure Club
                </p>
                <p className='SignUp-subscription-text'>
                Get exclusive access to our vacation deals, travel tips and early offers.
                </p>
                <div className='input-areas'>
                  <form>
                    <input
                      className='SignUp-input'
                      name='email'
                      type='email'
                      placeholder='Your Email'
                    />
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                  </form>
                </div>
              </section>
              </div>
    )


}

export default SignUp;
