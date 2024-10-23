import React, { useState } from 'react';
// import locationIcon from '../assets/icons/location-icon.svg';
// import phoneIcon from '../assets/icons/phone-icon.svg';
// import mailIcon from '../assets/icons/mail-icon.svg';
// import githubLogo from '../assets/logos/github-logo.svg';
// import linkedinLogo from '../assets/logos/linkedin-logo.svg';
// import facebookLogo from '../assets/logos/facebook-logo.png';
// import instaLogo from '../assets/logos/insta-logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: REACT_APP_EMAIL_ACCESS_KEY,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      setFormStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='px-10'>
      <p className='text-2xl border-l-4 pl-5 border-black my-5 md:my-10'>Let's Connect</p>
      <div className='flex flex-col sm:flex-row'>
        <div className='sm:w-3/6 xl:w-2/6 py-2 pr-2 text-sm lg:text-[16px] flex flex-col justify-between'>
          <div className='space-y-3 sm:space-y-5 xl:space-y-8 sm:text-xs md:text-sm'>
            <p className=' w-11/12 lg:w-5/6 sm:text-lg'>Get in touch to collaborate. Whether you have a question, a suggestion or just want to say hello, feel free to reach out. We'd love to hear from you!</p>
            {/* <div className='space-y-3 sm:space-y-5'>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={phoneIcon} alt="phone" className='w-6 sm:w-5 md:w-8' />03087165428
              </div>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={mailIcon} alt="mail" className='w-6 sm:w-5 md:w-8' />musmanmustafa181@gmail.com
              </div>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={locationIcon} alt="location" className='w-6 sm:w-5 md:w-8' />Lahore, Pakistan
              </div>
            </div> */}
          </div>
          {/* <div className='flex gap-3 md:gap-5 my-5'>
            <a href="https://github.com/umscripts" target='_blank'><img src={githubLogo} alt="github" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
            <a href="https://www.linkedin.com/in/usmanmustafa181" target='_blank'><img src={linkedinLogo} alt="linkedin" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
            <a href="https://www.facebook.com/usman.mustafa.90813236" target='_blank'><img src={facebookLogo} alt="facebook" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
            <a href="https://www.instagram.com/heyy_usmaan" target='_blank'><img src={instaLogo} alt="instagram" className='w-8 md:w-10 hover:shadow-custom-shadow cursor-pointer rounded-lg' /></a>
          </div> */}
        </div>
        <div className='sm:w-3/6 xl:w-4/6'>
          <form onSubmit={handleSubmit} className='flex flex-col text-xs md:text-lg gap-2'>
            <div className='relative'>
              {/* <label class={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.name && '-translate-y-1/2 scale-90 -top-0 left-2 bg-white'} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Full Name
              </label> */}
              <input
                placeholder='Full Name'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none'
                required
              />
            </div>
            <div className='relative'>
              {/* <label htmlFor="phone" className={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.phone ? '-translate-y-1/2 scale-90 -top-0 left-2 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Phone Number</label> */}
              <input
                placeholder='Phone Number (Optional)'
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none'
              />
            </div>
            <div className='relative'>
              {/* <label htmlFor="email" className={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.email ? '-translate-y-1/2 scale-90 -top-0 left-2 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Email Address</label> */}
              <input
                placeholder='Email Address'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none'
                required
              />
            </div>
            <div className='relative'>
              {/* <label htmlFor="message" className={`text-sm absolute left-4 top-[10px] pointer-events-none transition-all duration-700 transform ${formData.message ? '-translate-y-1/2 scale-90 -top-0 left-2 bg-white' : ''} peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:py-0 peer-focus:mt-0 peer-focus:bg-white peer-focus:px-1`}>Message</label> */}
              <textarea
                placeholder='Message'
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='rounded-lg p-2 w-full border focus:outline-none resize-none min-h-40'
                required
              />
            </div>
            <button type="submit" className='w-40 border p-2 rounded-lg bg-black text-white hover:shadow-custom-shadow text-sm hover:bg-white hover:text-black border-black'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
