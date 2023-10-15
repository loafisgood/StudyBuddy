import React from 'react';

const Contact = () => {
  return (
    <div className="text-black bg-white min-h-screen flex flex-col items-center border border-gray-400 p-8 rounded-lg shadow-lg">
      <div className='align-start flex flex-col space-y-4 text-start'>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <hr></hr>
        <p>
          If you have any questions or need to reach out to us, feel free to contact us using the information below:
        </p>
        <p>Email: contact@studdybuddy.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, Toronto, Canada</p>
      </div>
    </div>
  );
};

export default Contact;
