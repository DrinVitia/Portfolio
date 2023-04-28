import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!", name, email, message);
    // You can add your form submission logic here
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 5 seconds (5000 milliseconds)
  };

  return (
    <div id="Contact" className="bg-gradient-to-b from-black to-slate-800 text-white w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white shadow-md hover:cursor-pointer">
            Contact
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-500 text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="border-gray-500 bg-transparent border-b-2 focus:outline-none focus:border-b-4 w-full text-xl pb-1"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-500 text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="border-gray-500 bg-transparent border-b-2 focus:outline-none focus:border-b-4 w-full text-xl pb-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-500 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="border-gray-500 bg-transparent border-b-2 focus:outline-none focus:border-b-4 w-full text-xl pb-1"
              placeholder="Enter your message"
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors duration-150 focus:outline-none"
          >
            Submit
          </button>
        </form>
        {showPopup && (
          <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-white text-gray-800 py-2 px-4 rounded-md shadow-lg">
            Message sent!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
