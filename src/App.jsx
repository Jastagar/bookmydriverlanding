import React from "react";

export default function App(){
  return (
    <div className="font-sans bg-gradient-to-t from-purple-500 via-indigo-600 to-purple-700 min-h-screen text-white flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">Welcome to BookMyDriver</h1>
        <p className="text-lg max-w-lg">The easiest way to book a driver for all your travel needs. Whether you are a client or a driver, we’ve got you covered.</p>

        <div className="flex space-x-4 mt-6">
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Download for Client
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Download for Driver
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg text-gray-200">At BookMyDriver, we provide a reliable and efficient solution for individuals needing a driver, and drivers looking for job opportunities. Our platform connects clients and drivers seamlessly for a smooth and comfortable ride experience.</p>
      </section>

      {/* Contact Us Section */}
      <section className="bg-purple-800 py-20 w-full text-center text-white">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-lg">For any queries or feedback, reach out to us below:</p>
        <form className="mt-6 space-y-4">
          <input type="email" placeholder="Your Email" className="w-96 py-2 px-4 rounded-lg bg-purple-600 text-white focus:outline-none" />
          <textarea placeholder="Your Message" className="w-96 py-2 px-4 rounded-lg bg-purple-600 text-white focus:outline-none" rows="4"></textarea>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 w-full py-4 text-center text-gray-300">
        <p>&copy; 2025 BookMyDriver. All rights reserved.</p>
      </footer>
    </div>
  );
};
