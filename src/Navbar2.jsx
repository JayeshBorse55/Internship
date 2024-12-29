import React from "react";
function Navbar2(){
    return(
        <div className="bg-gray-900">
            <nav class="bg-black-50 opacity-90">
                <div class="max-w-screen-xl px-4 py-3 mx-auto h-10 ">
                    <div class="flex items-center h-full justify-between">
                        <div>
                        <ul class="flex flex-row font-medium space-x-8 text-sm items-center">
                            <div className="bg-red-600 h-full  text-center w-52 pt-3 pb-2 flex justify-center gap-x-2 ">
                                <i class="fa-solid fa-list mt-1 text-white"></i>
                                <a href="#" class="text-white   dark:text-white hover:underline" py-1 aria-current="page">All Categories</a>
                            </div>
                            <li> 
                                <a href="#" class="text-white dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-white dark:text-white hover:underline">Shop</a>
                            </li>
                            <li>
                                <a href="#" class="text-white dark:text-white hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#" class="text-white dark:text-white hover:underline">Contact Us</a>
                            </li>
                            </ul>
                            </div>
                            <div>
                            
                                <a href="#" class="text-white ml-96 dark:text-white hover:underline ">Login/Register</a>
                            
                            </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar2;