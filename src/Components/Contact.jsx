import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_985yn5d', 'template_7cjbqe9', form.current, {
        publicKey: 'Jyvueg-VehmtKcffB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
  };


  return (
    <div id="contact-section" className=" relative md:mt-40">
      <section className="text-gray-700 body-font relative bg-accent-blue">
        < div className="container px-5 py-24 mx-auto" >
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
              Whether it's to just say hi, or for a professional inquery, please fill out the form below
            </p>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="text-white leading-7 text-md }">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-gray-100 rounded border border-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="text-white leading-7 text-md"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-gray-100 rounded border border-white focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="text-white leading-7 text-md"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-white focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full ">
                <button className="cursor-pointer flex mx-auto text-accent-blue bg-white hover:bg-light-gray cursor- border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div >
      </section >
    </div >
  );
};

export default Contact;
