import React from 'react';
import type { NextPage } from 'next';
import Button from '../components/ui/Button';

const contact: NextPage = () => {
  return (
    <div>
      <div>
        <h1>Contact us</h1>
        <p>We are excited yoy would love to start the match,
          Kindly reach us via:
        </p>
        <p>Phone</p>  
        <p>Email</p>  
        <p>Addr</p>  
        <ul>
          <li>IG</li>
          <li>FB</li>
          <li>TW</li>
        </ul>
      </div>
      <div>
        <p>Enter Details</p>
        <form>
          <input type='text' placeholder='Enter Full Name' />
          <input type='email' placeholder='Enter Email' />
          <input type='text-area' placeholder='Type Message' />
          <Button rounded={true} text="Send Msg" />
        </form>
      </div>
    </div>
  )
}

export default contact