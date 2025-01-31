// import React from 'react'

const serviceContent = [
    {
        heading: "Airport Transfers",
        des: "Reliable and hassle-free rides to and from the airport, ensuring timely arrivals and departures.",
        bgImage: "airport.jpg"
    },
    {
        heading: "Hourly Rentals",
        des: "Book a driver by the hour for your personal or business needs, offering flexibility and convenience.",
        bgImage: "rental.jpg"
    },
    {
        heading: "Outstation Trips",
        des: "Comfortable and safe long-distance travel with experienced drivers for intercity journeys.",
        bgImage: "outstations.jpg"
    },
    {
        heading: "Corporate Travel",
        des: "Professional and punctual drivers tailored for your business meetings and corporate events.",
        bgImage: "corporateTravel.jpg"
    },
];

export default function Services() {
  return (
    <section className='h-screen w-full'>
        <h1 className='text-3xl font-bold text-center'>
            Our Services
        </h1>
        <div className='h-full flex flex-col justify-center items-center px-10 gap-10'>
            
            <div className='flex gap-10 w-2/3 h-1/4'>
                <ServiceContent {...serviceContent[0]} />
                <ServiceContent {...serviceContent[1]} />
            </div>

            <div className='flex gap-10 w-2/3 h-1/4'>
                <ServiceContent {...serviceContent[2]} />
                <ServiceContent {...serviceContent[3]} />
            </div>
        
        </div>  
    </section>
  )
}

function ServiceContent({heading,des,bgImage}:{heading:string,bgImage:string,des:string}){
    return(
        <div className='relative border rounded-md shadow-md'>
            <div className='absolute top-0 right-0 h-full'>
                <img className='aspect-square h-full' src={bgImage} alt={bgImage} />
                <div className='absolute top-0 h-full w-full bg-gradient-to-r from-primary-600 hover:from-transparent to-transparent' />
            </div>
            
            <div className='relative z-10 overflow-hidden h-full w-full p-4'>
            {/* <div className='relative z-10 overflow-hidden bg-gradient-to-r from-[#ff000033] hover:from-transparent to-transparent h-full w-full p-4'> */}
                <h2 className='text-lg font-bold'>{heading}</h2>
                <p className='p-2'>
                    {des}
                </p>
            </div>
        </div>
    )
}