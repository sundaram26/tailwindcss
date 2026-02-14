
function Hero() {
    return (
        <div className="px-4 py-2 flex items-center flex-col w-full my-20">
            <button className="px-4 py-1 border rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer pointer duration-200 bg-gray-100 text-neutral-800 text-sm font-semibold">
                What are early stage tax requirement?
            </button>      
            <div>
                <h1 className="font-medium mt-10 text-6xl text-black tracking-tighter text-center ">
                    Magically simplify <br /> accouting and taxes
                </h1>
                <p className="max-w-lg text-center mt-4 text-lg text-neutral-700">
                    Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 12:13am.
                </p>
            </div>
            <div className="flex items-center gap-4 mt-10">
                <button className='bg-[#2579F4] px-4 py-2 rounded-lg text-white font-bold shadow-lg text-shadow-md'>
                    Start free trial
                </button>
                <button className='cursor-pointer px-4 py-2 rounded-lg text-black font-semibold tracking-wide'>
                    Pricing &rarr;
                </button>
            </div>
        </div>
    )
}

export default Hero;