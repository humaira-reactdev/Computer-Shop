import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Data = () => {

    const navigate=useNavigate()

    const handleSeeMore=()=>{
        navigate('/')
    }

    const handleBuy=()=>{
        navigate('/buy')
    }
    const data=useSelector((state)=>state.counter.value)
    // console.log(data)
    
  return (
    <>
        <section className='pt-20 bg-white'>
            <div className="container">
                <div className='mainRow flex gap-10 flex-wrap pb-5'>
                    <div className='product_image w-[500px] pl-24'>
                        <img src={data.image_link} alt="product image" />
                    </div>
                    <div className='product_text w-[900px]'>
                        <h2 className='text-[25px] font-semibold italic mb-[50px]'>{data.description}</h2>
                        <h3 className='text-2xl font-semibold'>Key Features</h3>
                        <ul className='mt-[50px] text-[18px] font-normal'>
                            <li>Model: {data.product_title} </li>
                            <li>Processor: {data.processor} </li>
                            <li>RAM: {data.ram} </li>
                            <li>Storage: {data.storage} </li>
                            <li>Display: {data.display_type} </li>
                        </ul>
                        <div className='flex gap-10'>
                            <h2 className='text-3xl font-bold italic mt-5 text-[#FFA62F]'>Price: {data.price}</h2>
                            <button onClick={handleBuy} className='bg-[#402E7A] font-semibold text-white p-3 rounded-lg'>Buy now</button>
                            <button onClick={handleSeeMore} className='bg-[#402E7A] font-semibold text-white p-3 rounded-lg'>See more products</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
        <section className='mainData bg-[#FFFED3] p-5 rounded-lg'>
            <h2 className='text-xl font-bold text-black'>Specifications</h2>
            <ul className='mt-[50px] text-[15px] font-normal'>
                <li>Charging capacity: {data.charging_capacity}</li>
                <li>Battery backup: {data.battery_backup}</li>
                <li>Display Resolution: {data.display_resolution}</li>
                <li>Storage: {data.storage}</li>
                <li>Weight: {data.weight}</li>
                <li>Operating system: {data.operating_system}</li>
                <li>Warranty: {data.warranty}</li>
            </ul>
        </section>
    
    </>
  )
}

export default Data