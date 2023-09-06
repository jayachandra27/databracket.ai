import React from 'react';
import Link from 'next/link'


const ContactUs = () => {
    return (
        <div className='pb-4'>
            <Link href="https://forms.gle/fzxCqTbtHXSCP3dn7" target="_blank" rel="noopener noreferrer">
                <button className='bg-white rounded-lg p-3 shadow-md transform transition-transform hover:bg-yellow-400'>Contact Us</button>
            </Link>            
        </div>
    )
  };

  export default ContactUs;