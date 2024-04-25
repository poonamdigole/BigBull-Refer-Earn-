import React, {useEffect} from 'react'
import './SignUp.css'
// import {Link} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import logo from "./logo.png"
import Navbar from '../../components/Navbar/Navbar'

function SignUp() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <div>
<Navbar/>
<div class="main">

            <div class="box ">
                <form action="" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="3000">


                    <div class="border-b border-gray-900/10 pb-12 form">

                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                           {/* <img src={logo} height={'100px'}/> */}
                            <h1>SignUp</h1>
                        </div>

                        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-white">First
                                    name</label>
                                <div class="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        class="input block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium leading-6 text-white">Last
                                    name</label>
                                <div class="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        class="block input w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="email" class=" inputblock text-sm font-medium leading-6 text-white">Email
                                    address</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email"
                                        class="block w-full input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                          

                            <div class="col-span-full">
                                <label for="street-address"
                                    class="block text-sm font-medium leading-6 text-white">Street
                                    address</label>
                                <div class="mt-2">
                                    <input type="text" name="street-address" id="street-address"
                                        autocomplete="street-address"
                                        class="block input w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2 sm:col-start-1">
                                <label for="city" class="  block text-sm font-medium leading-6 text-white">City</label>
                                <div class="mt-2">
                                    <input type="text" name="city" id="city" autocomplete="address-level2"
                                        class="block w-full input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="region" class=" block text-sm font-medium leading-6 text-white">State /
                                    Province</label>
                                <div class="mt-2">
                                    <input type="text" name="region" id="region" autocomplete="address-level1"
                                        class="block w-full input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="postal-code" class="block text-sm font-medium leading-6 text-white">ZIP /
                                    Postal
                                    code</label>
                                <div class="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                                        class="block w-full input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                class="mt-8 flex w-full input text-white justify-center rounded-md bg-danger px-3 py-1.5 text-lg font-semibold leading-6  shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a
                                    href="">Sign up </a></button>
                                    <p className='text-center text-white'>Already have an account ?Login</p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp