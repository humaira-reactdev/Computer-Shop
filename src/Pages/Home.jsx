import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const[productData, setProductData]=useState([])


    useEffect(()=>{
        axios.get('https://api.jsonbin.io/v3/b/6673dd4facd3cb34a85a3f89')
        .then((res)=> setProductData(res.data.record))
        .catch((err)=> console.log(err))
    },[])
    
    console.log(productData)

  return (
    <>
      <section className='p-10'>
        <div className='container'>
            <div className='mainRow flex gap-5 flex-wrap justify-center'>
                {
                    productData.map((item,i)=>(
                        <div key={i} className='singleCard w-[250px] h-[590px] bg-[#FFFED3] p-5 rounded-lg'>
                    <div className='productImage w-full h-[130px] overflow-hidden'>
                        <img className='w-full h-full' src={item.image_link} alt="" />
                    </div>
                    <div className='product_text'>
                        <h2 className='text-[18px] font-semibold text-black mt-5 mb-5'>{item.product_title}</h2>
                        <ul className='list-desc p-5'>
                            <li>{item.brand}</li>
                            <li>{item.processor}</li>
                            <li>{item.ram}</li>
                            <li>{item.charging_capacity}</li>
                            <li>{item.display_type}</li>
                            <li>{item.display_resolution}</li>
                        </ul>
                        <hr />
                        <h4 className='mt-5 mb-2 text-[20px] font-bold text-[#FF7F3E] text-center'>Price: {item.price} </h4>
                        <button className='w-full h-[40px] flex justify-center items-center bg-[#BBE9FF] rounded-lg font-bold'>Buy Now</button>
                        <button className='w-full h-[40px] flex justify-center items-center bg-[#B1AFFF] rounded-lg font-bold mt-2'>View details</button>
                    </div>                    
                </div>  

                    ))
                }  
               
            </div>

        </div>

      </section>
    </>
  )
}

export default Home