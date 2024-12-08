import React from 'react';
import Image from "next/image";


function Hero() {
  return (
    <div className='container'>
      <Image src="/banner.png" alt="banner" width="1530" height="500" className='absolute h-full' />
      
      {/* Centered Frame */}
      <div 
        className="absolute top-[59%] left-[70%] translate-x-[-50%] translate-y-[-50%] w-[650px] h-[460px] bg-[#FFF3E3]"
        aria-hidden="true"
      />
      <div className='absolute left-[52%] top-[40%] font-mono'>
        <p className='text-black'>New Arrival</p>
        <h1 className='text-6xl font-extrabold' style={{ color: '#C19531' }}>
          Discover Our<br/> New Collection
        </h1>
        <p className='relative -bottom-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit alias<br/> 
          que earum, quo blanditiis nobis corporis temporibus dicta.
        </p>
        <button className='relative top-16 mt-4 px-14 py-5 text-white font-semibold hover:bg-orange-600' 
          style={{ backgroundColor: '#C19531', color: 'white' }}>
          Shop Now
        </button>
      </div>
      
      <div className="absolute -bottom-60 left-0 w-full text-center pb-8">
        <h2 className="text-4xl font-bold pt-2 text-gray-800">Browse The Range</h2>
        <p className='text-sm font-normal text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis numquam.
        </p>

        <div className="flex justify-center gap-4 mt-4">
          {/* Image 1 */}
          <div className="absolute text-center -bottom-[400%] left-60">
            <Image
              className="w-[320px] h-[400px] object-cover rounded shadow-lg"
              src="/Dinning.png"
              height={150}
              width={150}
              alt="Dinning"
            />
            <h2 className="font-medium text-xl mt-4">Dinning</h2>
          </div>

          {/* Image 2 */}
          <div className="absolute -bottom-[400%] text-center left-[38%]">
            <Image
              className="w-[320px] h-[400px] object-cover rounded shadow-lg"
              src="/Living.png"
              height={150}
              width={150}
              alt="Living"
            />
            <h2 className="font-medium text-xl mt-4">Living</h2>
          </div>

          {/* Image 3 */}
          <div className="absolute -bottom-[400%] text-center right-[19%]">
            <Image
              className="w-[320px] h-[400px] object-cover rounded shadow-lg"
              src="/Bedroom.png"
              height={150}
              width={150}
              alt="Bedroom"
            />
            <h2 className="font-medium text-xl mt-4">Bedroom</h2>
          </div>
        </div>

        <div className="absolute -bottom-[950%] left-0 w-full text-center pb-8">
          <h2 className="text-4xl font-bold pt-2 text-gray-800">Our Products</h2>
          
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                <ul>
                  <Image
                    src={"/Images.png"}
                    height={250}
                    width={250}
                    alt="Pingky"
                    className="w-[230px] h-[230px]"
                  />
                </ul>
                <div className="p-1 px-1">
                  <h2 className="relative font-bold py-2 text-xl">Pingky</h2>
                  <p className='text-gray-500 right-16'>cute bed set</p>
                  <div className="flex py-2">
                    <h3 className="relative font-bold left-2">Rp 7.000.000</h3>
                    <p className="relative left-1 text-gray-500 px-3 line-through">Rp 14.000.000</p>
                  </div>
                </div>
              </div>

              <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                <ul>
                  <Image
                    src={"/img1.png"}
                    height={250}
                    width={250}
                    alt="Syltherine"
                    className="w-[230px] h-[230px]"
                  />
                </ul>
                <div className="p-1 px-1">
                  <h2 className="relative font-bold py-2 text-xl">Syntherine</h2>
                  <p className='text-gray-500 right-16'>Stylish cafe chair</p>
                  <div className='flex py-2'>
                    <h3 className="relative left-2 font-bold py-2 ">Rp 2.500.000</h3>
                    <p className="relative top-2 left-1 text-gray-500 px-3 line-through">Rp 3.500.000</p>
                  </div>
                </div>
              </div>

              <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                <ul>
                  <Image
                    src={"/img2.png"}
                    height={250}
                    width={250}
                    alt="Lolito"
                    className="w-[230px] h-[230px]"
                  />
                </ul>
                <div className="p-1 px-1">
                  <h2 className="relative font-bold py-2 text-xl">Lolito</h2>
                  <p className='text-gray-500 right-16'>Luxury big sofa</p>
                  <div className='flex py-2'>
                    <h3 className="relative left-2 font-bold py-2">Rp 7.000.000</h3>
                    <p className="relative top-2 left-1 text-gray-500 px-3 line-through">Rp 14.000.000</p>
                  </div>
                </div>
              </div>

              <div className="text-sm bg-[#e9e8e8] w-[230px] h-[340px]">
                <ul>
                  <Image
                    src={"/img3.png"}
                    height={250}
                    width={250}
                    alt="Muggo"
                    className="w-[230px] h-[230px]"
                  />
                </ul>
                <div className="p-1 px-1">
                  <h2 className="relative font-bold py-2 text-xl">Muggo</h2>
                  <p className='text-gray-500 right-16'>Small mug</p>
                  <div className='flex py-2'>
                    <h3 className="relative left-2 font-bold py-2">Rp 1.500.000</h3>
                    <p className="relative top-2 left-1 text-red-500 px-3 ">new</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button below products */}
          <div className="mt-8">
            <button className="px-12 py-3 text-white font-semibold rounded border-2" 
           style={{ backgroundColor: 'white', color: '#C19531', borderColor:'#C19531' }} >
              Show More
            </button>
            <div className='absolute -bottom-[100%]'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#FCF8F3]">
                    <div className="text-center md:text-start lg:text-start lg:w-[800px] px-2 md:px-6 lg:px-6 my-[150px] md:my-[250px] lg:my-[250px]">
                        <h3 className="absolute right-[60%] top-32 text-3xl md:text-4xl lg:text-5xl font-bold text-[#323131] py-3">50+ Beautiful rooms <br/> inspiration</h3>
                        <p className='absolute right-[52%] '>Our designer already made a lot of beautiful prototipe of rooms that inspire you.</p>

                        <button className="absolute top-72 left-32 bg-[#B88E2F] mt-3 text-sm font-bold py-3 md:py-4 lg:py-5 px-10 md:px-12 lg:px-20 duration-1000 border text-white hover:border-[#B88E2F] hover:bg-white hover:text-[#B88E2F]">EXPLORE MORE</button>

                    </div>
                     {/* Add Picture */}
          <div className="flex justify-center items-center">
            <Image 
              src="/pic.png" 
              alt="Beautiful Room Inspiration" 
              width={300} 
              height={100} 
              className="rounded shadow-lg object-cover"
            />
            
  <Image 
    src="/pic 2.png" 
    alt="Additional Inspiration" 
    width={300} 
    height={100} 
    className="relative left-4 -top-5 rounded shadow-lg object-cover"
  />
      <Image
      src='/Indicator.png'
      alt="ind"
      width={80}
      height={80}
      className='relative -bottom-[42%] right-[37%]'/>
          </div>
          
          </div>
      
          </div>
          </div>
          </div> 
          
      </div> 
  
    </div>
    
  );
}

export default Hero;
