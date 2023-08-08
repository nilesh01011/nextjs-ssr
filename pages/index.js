import CommonHeadTag from '@/components/CommonHeadTag';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {

  const [showApi, setShowApi] = useState(false)

  return (
    <>
      <CommonHeadTag title="Dummy API Call with SSR" />

      <main className="w-full h-full p-[2rem] pt-0">
        {/* button */}
        <div className='sticky top-0 w-full h-max p-[2rem] flex items-center justify-center z-50 bg-[#f2f2f2]'>
          <button onClick={() => setShowApi(!showApi)} type='button' aria-label="click-to-call-api" role="button" className='w-max p-[0.8rem_1.2rem] bg-black text-white rounded-[5px]'>
            {
              showApi === true ? 'Click to hide APIs' : 'Click to call APIs'
            }
          </button>
        </div>
        {/* products */}
        {
          showApi === true &&
          <div className='w-full h-full grid grid-cols-4 gap-[20px]'>
            {
              products?.map((ele) => {
                const { id, title, thumbnail, price } = ele;
                return (
                  <div key={id} className='w-full h-max p-[20px] rounded-[10px] bg-white flex flex-col hover:shadow'>
                    {/* images */}
                    <div className='w-full h-[80%] bg-[#f2f2f2] mb-[12px] py-[10px]'>
                      <Image src={thumbnail} alt={title} width={200} height={150} className='h-[150px] w-full object-contain' />
                    </div>
                    {/* title */}
                    <p className='text-[16px] font-[500] mb-[8px]'>{title}</p>
                    {/* price */}
                    <p className='text-[18px] font-semibold text-red-500 mb-[12px]'>₹{price}</p>
                    {/* button */}
                    <button type='button' aria-label="add-to-cart" role="button" className='w-full h-max p-[0.8rem_1.2rem] bg-black text-white font-[500] rounded-[5px] shadow-md hover:shadow-none hover:opacity-80'>Add to cart</button>
                  </div>
                )
              })
            }
          </div>
        }
      </main >
    </>
  )
};

export const getServerSideProps = async (context) => {

  // api call with SSR product limit of 12
  const response = await fetch('https://dummyjson.com/products?limit=24');
  const data = await response.json();
  const products = data.products;

  return {
    props: {
      products
    }
  }
}
