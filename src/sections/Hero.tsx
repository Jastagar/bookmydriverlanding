export default function Hero() {
    function downloadClient(){
        const url = "https://dvsgoqec9qdbgbgg.public.blob.vercel-storage.com/bookMyDriver.apk"
        const a = document.createElement("a")
        a.href = url
        a.download = "BookMyDriver.apk"
        a.click()
    }
    function downloadDriver(){
        const url = "https://dvsgoqec9qdbgbgg.public.blob.vercel-storage.com/bookMeAsDriver.apk"
        const a = document.createElement("a")
        a.href = url
        a.download = "BookMeAsDriver.apk"
        a.click()
    }
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center space-y-6 p-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Welcome to <span className="text-primary-200">BookMyDriver</span>
        </h1>
        <p className="text-lg font-semibold max-w-lg text-gray-100">
            The easiest way to book a driver for all your transportational needs. 
            Whether you are a client or a driver, we’ve got you covered.
        </p>
        <div className="text-red-900">
            <span className="text-lg font-semibold max-w-lg">NOTE:</span>
            This is not an official release and the apps are still in MVP/POC stages,<br/> so there maybe unexpected bugs and errors.
        </div>

        <div className="flex space-x-4 mt-6 gap-6">
            <div className="flex flex-col gap-4" >
                <div className="text-center text-white">
                    Get app for booking your driver:
                </div>
                <button
                    onClick={downloadClient}
                    className="bg-primary-600 flex items-center gap-2 justify-center hover:bg-primary-1100 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="Download BookMyDriver Client App"
                    >
                    <img className=" aspect-square h-10" src="appIcon.png" alt="Client App icon" />
                    Download
                </button>
            </div>

            <div className="flex flex-col gap-4" >
                <div className="text-center">
                    Get app for to become a driver:
                </div>
                <button
                    onClick={downloadDriver}
                    className="bg-primary-1100 flex items-center gap-2 justify-center hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="Download BookMyDriver Driver App"
                >
                    <img className=" aspect-square h-10" src="driverAppIcon.png" alt="driver App icon" />
                    Download
                </button>
            </div>
        </div>
    </section>
  )
}
