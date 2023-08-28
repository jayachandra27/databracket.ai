import React from 'react';
import Link from 'next/link';
import ContactUs from './contactUs';


const RedirectButton = () => {
  return (
    <Link href="/form-submission">
        <ContactUs/>
    </Link>
  );
};

export default RedirectButton;