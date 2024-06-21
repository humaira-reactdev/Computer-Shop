import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {singleProductData} from '../slices/ProductSlice'

const Home = () => {

    const[productData, setProductData]=useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(()=>{
        axios.get('https://api.jsonbin.io/v3/b/6673dd4facd3cb34a85a3f89')
        .then((res)=> setProductData(res.data.record))
        .catch((err)=> console.log(err))
    },[])
    
    // console.log(productData)

    const handleShow=(item)=>{
        navigate('/data')
        // console.log(item )
        dispatch(singleProductData(item))
    }

    const handleBuy=(item)=>{
        navigate('/buy')
        dispatch(singleProductData(item))
    }

  return (
    <>
    <div className='heading text-[#E7F0DC] flex flex-col justify-center items-center'>
        <h1 className='font-bold text-[50px]'>Welcome to Tech  World!</h1>
        <h2 className='font-semibold text-[25px] mb-9'>Shop from our wide range of devices, available both online and in showrooms</h2>

    </div>
      <section className='p-10'>
        <div className='container'>
            <div className='mainRow flex gap-5 flex-wrap justify-center'>
                {
                    productData.map((item,i)=>(
                        <div key={i} className='singleCard w-[250px] h-[590px] bg-[#FFFED3] p-5 rounded-lg hover:scale-110'>
                    <div className='productImage w-full h-[130px] overflow-hidden'>
                        <img className='w-full h-full' src={item.image_link} alt="" />
                    </div>
                    <div className='product_text'>
                        <h2 className='text-[18px] font-semibold text-black mt-5 mb-5 truncate'>{item.product_title}</h2>
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
                        <button onClick={()=>handleBuy(item)} className='w-full h-[40px] flex justify-center items-center bg-[#BBE9FF] rounded-lg font-bold hover:bg-[#E8C5E5]'>Buy Now</button>
                        <button onClick={()=>handleShow(item)} className='w-full h-[40px] flex justify-center items-center bg-[#B1AFFF] rounded-lg font-bold mt-2 hover:bg-[#E8C5E5]'>View details</button>
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