import React from "react";

const Contact = () => {
  return (
    <div id='contact-section' className=" w-full relative bg-accent-blue">
      {/* <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8"></div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e3705b01-403c-4c5b-89e6-f8d474a2a956"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 border-greenleaf rounded-md text-browngray focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 bg-transparent border-2 border-greenleaf rounded-md text-browngray focus:outline-none my-4"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 border-greenleaf rounded-md text-browngray focus:outline-none"
            ></textarea>
            <button className="text-browngray bg-olive px-6 py-3 border-2 border-olive my-8 mx-auto flex items-center rounded-md hover:bg-tanly duration-300">
              Let's Chat!
            </button>
          </form>
        </div>
      </div> */}
      {/* <!-- component --> */}
      <div class="flex justify-center items-center w-screen h-screen ">
        {/* <!-- COMPONENT CODE --> */}
        <div class="container mx-auto my-4 px-4 lg:px-20 ">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl">Let's get in touch</h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-accent-blue text-white p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        {/* <!-- COMPONENT CODE --> */}
      </div>
    </div>
  );
};

export default Contact;
