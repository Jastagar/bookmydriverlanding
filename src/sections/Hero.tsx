import React from 'react'

export default function Hero() {
    function downloadClient(){
        const url = ""
        const a = document.createElement("a")
        a.href = url
        a.download = "BookMyDriver.apk"
        a.click()
    }
    function downloadDriver(){
        const url = ""
        const a = document.createElement("a")
        a.href = url
        a.download = "BookMeAsDriver.apk"
        a.click()
    }
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">Welcome to BookMyDriver</h1>
        <p className="text-lg max-w-lg">The easiest way to book a driver for all your transportational needs. Whether you are a client or a driver, we’ve got you covered.</p>

        <div className="flex space-x-4 mt-6">
            <button onClick={downloadClient} className="bg-primary-600 hover:bg-primary-900 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105">
            Book a Driver
            </button>
            <button onClick={downloadDriver} className="bg-primary-300 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105">
            Be A Driver
            </button>
        </div>
    </section>
  )
}
