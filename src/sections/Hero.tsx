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
    <section className="flex flex-col items-center justify-center h-screen text-center space-y-6 bg-gray-50 p-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Welcome to <span className="text-primary-600">BookMyDriver</span>
        </h1>
        <p className="text-lg max-w-lg text-gray-700">
            The easiest way to book a driver for all your transportational needs. 
            Whether you are a client or a driver, we’ve got you covered.
        </p>

        <div className="flex space-x-4 mt-6">
            <button
            onClick={downloadClient}
            className="bg-primary-600 hover:bg-primary-900 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Download BookMyDriver Client App"
            >
            Book a Driver
            </button>
            <button
            onClick={downloadDriver}
            className="bg-primary-300 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Download BookMyDriver Driver App"
            >
            Be A Driver
            </button>
        </div>

        <div className="mt-4 text-sm text-gray-500">
            <p>
            Need help? <a href="/support" className="text-primary-600 underline">Visit our support page</a>
            </p>
        </div>
    </section>
  )
}
