import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import yesImage from '../../public/assets/yes.png';
import noImage from '../../public/assets/close.png';




import { useState } from 'react';

const dataEntry = () => {
    const [sliderValue, setSliderValue] = useState(50);




    /** Input field component */
    const Input = ({ label, required, type, placeholder }) => (
        <div>
            <legend>{label}</legend>
            <input
                {...register(label, { required })}
                className={errors[label] && "flex flex-col gap-1 mb-8 w-full bg-gray-100 border border-gray-300 p-2 rounded focus:border-blue-500 focus:bg-white placeholder-gray-400"}
                type={type} placeholder={placeholder}
            />
            {errors[label] && <span>mandatory</span>}
        </div>
    )

    /** Group the person input fields in a component */
    const PersonFields = () => (
        <div className='flex flex-col items-center '>
            <div className='py-10 font-semibold w-full h-auto text-center text-3xl'>
                Current Monthly Power Bill
            </div>





            <div class="rounded-lg p-4 shadow-lg w-[70%] " >
                <div class="price-range p-4">
                    <span class="text-xl">$</span>
                    {sliderValue !== null ? <span class="text-xl">{sliderValue}</span> : <span class="text-lg">$300</span>}
                    <input class="w-full accent-indigo-600" type="range" defaultValue={sliderValue} min="0" max="1000" onChange={(e) => setSliderValue(e.target.value)} />
                    <div class="-mt-2 flex w-full justify-between">
                        <span class="text-sm text-gray-600">0</span>
                        <span class="text-sm text-gray-600">1000</span>
                    </div>
                </div>
            </div>

        </div>
    )

    /** Group the contact input fields in a component */
    const ContactFields = () => (
        <div className='flex flex-col items-center w-full h-auto '>
            <div className=' font-semibold w-[70%] h-auto text-center text-3xl'>
                Do You Own A Home?
            </div>





            <div class="rounded-lg shadow-lg h-80  flex gap-10 w-full items-center justify-center" >
                <div className=' h-auto w-36 '>
                    <div className=' h-auto p-5 cursor-pointer '>
                        <Image src={yesImage} />

                    </div>
                    <div className='text-center text-2xl rounded bg-blue-500 cursor-pointer'>
                        yes

                    </div>

                </div>
                <div className=' h-auto w-36 '>
                    <div className=' h-auto p-10'>
                        <Image src={noImage} />

                    </div>
                    <div className='text-center text-2xl rounded cursor-pointer'>
                        No

                    </div>

                </div>

            </div>

        </div>
    )

    /** Group the address input fields in a component */
    const AddressFields = () => (
        <div className="flex flex-col gap-1 mb-8 bg-blue-500 items-center w-[50%]">
            <h3 className='text-purple-500'>Address</h3>
            <input className="flex flex-col gap-1 mb-8 w-full bg-gray-100 border border-gray-300 p-2 rounded focus:border-blue-500 focus:bg-white placeholder-gray-400" label="Street" required type="text" placeholder="Street name, avenue, etc..." />
            <input className="flex flex-col gap-1 mb-8 w-full bg-gray-100 border border-gray-300 p-2 rounded focus:border-blue-500 focus:bg-white placeholder-gray-400" label="Number" required type="number" placeholder="000" />
        </div>
    )

    /** Nnavigation between steps */
    const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
    const leftArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"

    const Navigation = () => (
        <div className="w-full  justify-around  mt-4 flex flex-row-reverse ">
            {
                step === fieldGroups.length - 1 &&
                <button type="submit" className="py-3 px-5 text-blue-100 rounded text-sm font-bold" >
                    SAVE
                </button>
            }
            {
                step < fieldGroups.length - 1 &&
                <button type="button" className="  rounded py-10 px-10 text-blue-600 flex-row-reverse" onClick={() => { setStep(step + 1) }}>
                    <img src={rightArrow} />
                    NEXT
                </button>
            }
            {
                step > 0 &&
                <button type="button" className="bg-gray-100 text-gray-400 rounded py-2 px-3" onClick={() => { setStep(step - 1) }}>
                    <img src={leftArrow} />
                    BACK
                </button>
            }
        </div>
    )

    /** Mark the input group already filled as blue or gray if not */


    const [step, setStep] = useState(0)

    const fieldGroups = [
        <PersonFields />,
        <ContactFields />,
        <AddressFields />
    ]

    return (
        <>



            <div className="min-h-screen h-screen font-roboto flex  flex-col  items-center bg-cover bg-center bg-no-repeat md:bg-cover  " style={{ backgroundImage: "url('../assets/dataentry.jpg')" }}>
                <div className='text-black bg-transparent py-10 font-bold text-3xl flex justify-center '>
                    Logo
                </div>
                <div className=' w-[70%] px-10 py-10 flex  flex-col bg-white rounded'>



                    {fieldGroups[step]}
                    <Navigation />


                </div>


            </div>

        </>









    )
}

export default dataEntry