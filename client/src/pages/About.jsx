import React from 'react'

export default function About() {
  return (
    <div class="gap- flex flex-col">

    <div class=" mx-auto flex flex-col items-center justify-center mt-8">
        <h1 class="text-4xl font-bold text-center text-black mb-8">About Us</h1>
    
        <div class="md:flex-row items-center justify-center w-full flex gap-8 mb-8">
            <div class="md:w-1/3 mb-8 md:mb-0 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-150">
                <p class="text-lg text-gray-800">
                   This is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
                </p>
            </div>
            <div class="md:w-1/3 mb-8 md:mb-0 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-150">
                <p class="text-lg text-gray-800">

                Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
                </p>
            </div>
        </div>
            <div class="md:w-1/3 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-150">
                <p class="text-lg text-gray-800">
                Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
                </p>
            </div>
    
      
    </div>
    
    </div>
  )
}