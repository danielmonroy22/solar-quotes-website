import React from 'react'











// const MyDiv = styled.div`
//     background-image: url(${bg.src});





// `;

const HomePage = () => {
    function handleClick(event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        const finalTarget = target.substring(1);
        const element = document.querySelector(finalTarget);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>




            <div className='h-screen shadow-xl mainDiv bg-cover bg-center bg-no-repeat md:bg-cover ' style={{ backgroundImage: "url('../assets/HomePage1.jpg')" }} >

                {/* <Image
                className='z-[-1]'
                src={bg}
                alt="Pexels"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            /> */}
                <div className='text-white font-bold text-3xl w-full flex justify-center py-10'>
                    Logo
                </div>
                <div className='h-screen w-full  flex '   >


                    <div className='flex-1  items-start pt-28 justify-end flex px-10'>
                        <div className=' h-[60%] w-[80%]'>
                            <h1 className='text-white font-bold text-6xl'>Free Solar Quotes, Lowest price in the market</h1>

                            <p className='text-white pt-5 font-medium'>Enter Your Zip Code - Get Qualified Instantly. Compare Quotes. No Cost & No Obligation.</p>
                        </div>
                    </div>
                    <div className='flex-1  w-100 h-100 flex justify-start pt-28 px-10'>

                        <div className=' bg-white h-[60%] w-[70%] rounded-3xl pt-10'>
                            <p className='px-10 font-medium'>See if you qualify for incentives in your area and get solar with zero upfront costs!</p>
                            <div className='w-full flex  justify-start px-10 '>
                                <div className='flex-row pt-5  w-full'>
                                    <div className='pb-2'>
                                        <label >Zip Code</label>
                                    </div>
                                    <input type="number" class="bg-gray-50 border border-gray-300 w-full rounded py-1" placeholder="ZIP CODE" required />


                                </div>


                            </div>
                            <div className='flex justify-end pt-10 px-10 '>
                                <button type='button' className=' w-full py-5 text-white font-semibold bg-red-500 rounded'>FREE QUOTE</button>
                            </div>

                        </div>


                    </div>



                </div>


            </div >
        </>






    )
}

export default HomePage