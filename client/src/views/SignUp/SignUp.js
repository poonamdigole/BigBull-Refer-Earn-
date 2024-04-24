import React ,  { useEffect }from 'react'
import './SignUp.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import {Link} from 'react'
import logo from './logo.png';

function SignUp() {
    useEffect(()=>{
        Aos.init();
      }, [])
  return (
    <div>

<div class="main">

            <div class="box " data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"   data-aos-duration="3000">
                <form action="">
               
                    <div class="border-b border-gray-900/10 pb-12 .form">

                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img src={logo} className='h-56 w-56 mx-auto'/>
                            <h2 >SignUp</h2>
                        </div>

                        <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-white">First
                                    name</label>
                                <div class="mt-2">
                                    <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset fs-5 px-3 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium leading-6 text-white">Last
                                    name</label>
                                <div class="mt-2">
                                    <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  fs-5 px-3  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="email" class="block  fs-5 px-3  text-sm font-medium leading-6 text-white">Email
                                    address</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email"
                                        class="block  fs-5 px-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>

                                
                            </div>

                            <div class="sm:col-span-3">
                                <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
                                <div class="mt-2">
                                    <input id="password" name="password" type="password" autocomplete="password"
                                        class="block w-full  fs-5 px-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>

                                
                            </div>

                            {/* <div class="sm:col-span-3">
                                <label for="country"
                                    class="block text-sm font-medium leading-6 text-white">Country</label>
                                <div class="mt-2">
                                    <select id="country" name="country" autocomplete="country-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>United States</option>
                                        <option>India</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div> */}

                            <div class="col-span-full">
                                <label for="street-address"
                                    class="block text-sm font-medium leading-6 text-white">Street
                                    address</label>
                                <div class="mt-2">
                                    <input type="text" name="street-address" id="street-address"
                                        autocomplete="street-address"
                                        class="block  fs-5 px-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2 sm:col-start-1">
                                <label for="city" class="block text-sm font-medium leading-6 text-white">City</label>
                                <div class="mt-2">
                                    <input type="text" name="city" id="city" autocomplete="address-level2"
                                        class="block  fs-5 px-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="region" class="block text-sm font-medium leading-6 text-white">State /
                                    Province</label>
                                <div class="mt-2">
                                    <input type="text" name="region" id="region" autocomplete="address-level1"
                                        class="block  fs-5 px-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="postal-code" class="block text-sm font-medium leading-6 text-white">ZIP /
                                    Postal
                                    code</label>
                                <div class="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                                        class="block  fs-5 px-3  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                class="mt-8 flex w-full justify-center rounded-md bg-danger px-3 py-1.5 text-sm font-semibold leading-6 fs-5 py-1.5 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a
                                    href="">Sign up </a></button>
                                    {/* Already have an account ? <Link to="/login">LogIn</Link> */}
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp