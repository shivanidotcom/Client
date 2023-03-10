import React from 'react'
import { Button } from 'react-bootstrap';
import AdminNavbar from './AdminNavbar';
import './AdminNavbar.css'
export const AdminHome = () => {
  return (
    <>
    <AdminNavbar />
    <div>
    <section id='section-hero' class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div id='text' class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Welcome <br/>Admin!!!.</h1>
                <p id='para' class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Women can bring a fresh approach and offer unique perspectives to meet challenges, solve problems, and design new products. They can also bring more women into the tech fold, and since technology often offers high salary opportunity, their presence in the industry can help reduce the overall gender pay gap</p>
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <button class="button" >Check More Profiles!</button>
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://www.dreamhost.com/blog/wp-content/uploads/2017/09/Must-Reads-for-Women-in-Tech-opt.jpg" alt="hero image"/>
            </div>   
                      
        </div>
        

    </section>
    
    </div>
   
    </>
  )
}
