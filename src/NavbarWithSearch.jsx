import React from "react";
function NavbarWithSearch() {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <nav className="bg-white text-white py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-medium text-red-500 ml-11">RAF<span className="text-gray-700">CART</span></div>
          <div className="space-x-6">
            <form class="max-w-md mx-auto">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-[19.5rem] p-4 ps-10 text-sm text-gray-900 border border-red-500 rounded-md dark:placeholder-gray-400 dark:text-white h-9" placeholder="Search" required />
              </div>
              
            </form>
           
          </div>
          <button type="submit" class="text-white absolute bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-2 ml-[840px]" >Search</button>
          <div className="mr-5 text-gray-800 flex text-center">
            <span className="mr-[20px]"><i class="fa-regular fa-heart"><sup className="bg-red-500 text-white p-[3px] rounded-full" >8</sup></i><div className="text-sm"><a href="/wishlist">Wishlist</a></div></span>
            <span className="mr-[22px]"><i class="fa-solid fa-bag-shopping"><sup className="bg-red-500 p-[3px] rounded-full text-white" style={{fontSize:"0.7rem"}}>3</sup></i> <div className="text-sm"><a href="/cart">Cart</a></div></span>
            <span className="mr-[24px]"><i class="fa-regular fa-user"></i> <div className="text-sm"><a href="/account">Account</a></div></span> 
          </div>
        </div>
      </nav>
      <hr></hr>
    </div>
  )
}

export default NavbarWithSearch;