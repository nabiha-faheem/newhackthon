import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function Payment() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6  flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">Name</label>
                <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="num">Phone Number</label>
                <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Address</label>
                <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Town/City</label>
                <Input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
              </div>
            </div>
          </CardContent>
        </Card>

    
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first flex">
              <Image src={"/Ellipse 11.png"} alt="Pick Up" width={12} height={10} />
              <h2 className=" font-bold text-lg ml-2">Pick-Up</h2>
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
            <div className="fourth flex">
              <Image src={"/Ellipse 11.png"} alt="Drop Off" width={12} height={12} />
              <h2 className=" font-bold ml-2">Drop-off</h2>
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="add">Locations</label>
                <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">Date</label>
                <select title="cty" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Date</option>
                </select>
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="city">Time</label>
                <select title="cit" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className=" flex">
            <Image src={"/Ellipse 11.png"} alt="Credit Card" width={12} height={10} />
            <h1 className=" font-bold text-lg ml-2">Credit Card</h1>
            </div>


            <div>

                <div className=" flex">

                <div className="flex items-center space-x-2">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-black text-2xl font-semibold">
        PayPal
      </label>
    </div>


            <Image src={"/PayPal.png"} alt="PayPal" width={80} height={56} className=" ml-[40rem]" />
            </div>



            <div>    
    </div>



    <div className=" flex mt-4">

    <div className="flex items-center space-x-2">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-black text-2xl font-semibold">
        Bitcoin
      </label>
    </div>
            <Image src={"/Bitcoin.png"} alt="Bitcoin" width={80} height={56} className=" ml-[40rem]" />

            </div>
            </div>
          </CardContent>
        </Card>

      
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            {/* <Image src={"/Confirmation.png"} alt="Confirmation" width={804} height={136} /> */}


<div>


<div className="flex items-center space-x-2">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-gray-700  font-semibold">
      I agree with sending an Marketing and newsletter emails. No spam, promissed!
      </label>
    </div>





    <div className="flex items-center space-x-2">
      <input type="checkbox" id="sport" className="mr-2" />
      <label htmlFor="sport" className="text-gray-700  font-semibold">
      I agree with our terms and conditions and privacy policy.
      </label>
    </div>


</div>






            <Link href={'/admin'}>
            <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
              Rent Now
            </button></Link>
            
            <Image src={"/Layer.png"} alt="Safe Data" width={48} height={100} />

            <h2 className=" font-bold">All your data are safe</h2>
            <p>We are using the most advanced security to provide you the best experience ever.</p>
          </CardContent>
        </Card>
      </div>


<div>
      <h1 className=" text-2xl font-bold">Rental Summary</h1>
      <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>
      <div
      
      className="details w-full flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center">

    </div> 












      {/* Right Section (Rental Summary) */}
      <div className="lg:w-[28rem] bg-white rounded-lg p-6 mb-6 lg:mb-0 lg:mr-6">
        <h1 className="font-bold text-xl">Rental Summary</h1>
        <p className="text-gray-400 mt-3">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>

        <div className="bg-[#3563E9] w-full h-40 pb-5 pt-16 mt-12 flex justify-between items-center">
          <Image src="/car (1).png" alt="Car" width={100} height={100} />
          <div className="ml-9 w-96">
            <h2 className="font-bold text-2xl">Nissan GT-R</h2>
            <div className="flex">
              <FaStar className="text-[#FBAD39]" />
              <FaStar className="text-[#FBAD39]" />
              <FaStar className="text-[#FBAD39]" />
              <FaStar className="text-[#FBAD39]" />
              <FaStar className="text-gray-300" />
              <span className="text-gray-400 ml-2 text-xs">440+ Reviews</span>
            </div>
          </div>
        </div>
      </div>


</div>






  );
}