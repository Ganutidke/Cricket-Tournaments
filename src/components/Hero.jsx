
const Hero = () => {
    return (
        <section className="w-full text-[#022A60] bg-[url('../../public/coverImg.svg')] h-[90vh] bg-center bg-cover bg-no-repeat">
            <div className="lg:max-w-7xl mx-auto flex h-[70%] items-center">
                <div className="flex flex-col gap-4 ml-2 lg:ml-0">
                    <div className="">
                        <h3 className="max-w-[640px] font-semibold text-2xl md:font-bold md:text-5xl">
                            Where Cricket Stars Align & Teams Take Flight&quot;
                        </h3>
                        <p className="text-sm md:text-base mt-4 font-normal text-gray-700">&ldquo;Discover Auction Marvels and Experience Team Glory Unleashed&rdquo;</p>
                    </div>
                    <div>
                        <button className="px-3  rounded-md py-2 font-semibold text-base text-white bg-[#1E487F]">
                            Register for Auction
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero