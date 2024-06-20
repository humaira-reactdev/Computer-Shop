import React from 'react'
import axios from 'axios'

const Home = () => {

    axios.get('https://api.jsonbin.io/v3/b/6673d8f8ad19ca34f87bc010')
    .then((res)=> console.log(res))
  return (
    <>
      <section className='p-10'>
        <div className='container'>
            <div className='mainRow flex gap-5 flex-wrap justify-center'>
                <div className='singleCard w-[250px] h-[590px] bg-[#FFFED3] p-5 rounded-lg'>
                    <div className='productImage w-full h-[130px] overflow-hidden'>
                        <img className='w-full h-full' src="" alt="" />
                    </div>
                    <div className='product_text'>
                        <h2 className='text-[18px] font-semibold text-black mt-5 mb-5'>Product name</h2>
                        <ul className='list-desc p-5'>
                            <li>brand</li>
                            <li>processor</li>
                            <li>RAM</li>
                            <li>Charging capacity</li>
                            <li>Display</li>
                            <li>Display resolution</li>
                        </ul>
                        <hr />
                        <h4 className='mt-5 mb-2 text-[20px] font-bold text-[#FF7F3E] text-center'>Price: </h4>
                        <button className='w-full h-[40px] flex justify-center items-center bg-[#BBE9FF] rounded-lg font-bold'>Buy Now</button>
                        <button className='w-full h-[40px] flex justify-center items-center bg-[#B1AFFF] rounded-lg font-bold mt-2'>View details</button>
                    </div>                    
                </div>      
               
            </div>

        </div>

      </section>
    </>
  )
}

export default Home