import React from "react";

function Checkout() {
    return (
        <div className="border mt-5 ml-36 px-3 w-6/12 rounded">
            <h5 className="text-base font-medium ml-2 mt-3 mb-3 text-black">Checkout</h5>
            <form>
                <div>
                    <div className="flex">
                        <div className="text-base ml-2 mt-3 mb-3">
                            <label htmlFor="fname" className="text-gray-600">First Name</label><br />
                            <input id="fname" class="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-[22rem]" />
                        </div>

                        <div className="text-base ml-3 mt-3 mb-3">
                            <label htmlFor="lname" className="text-gray-600">Last Name</label><br />
                            <input id="lname" class="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow w-[22rem]" />
                        </div>
                    </div>
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="company1" className="text-gray-600">Company</label><br />
                    <input id="company1" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="country" className="text-gray-600">Country/Region</label><br />
                    <input id="country" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="street" className="text-gray-600">Street Address</label><br />
                    <input id="street" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="city" className="text-gray-600">City</label><br />
                    <input id="city" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="phone" className="text-gray-600">Phone Number</label><br />
                    <input id="phone" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="email" className="text-gray-600">Email Address</label><br />
                    <input id="email" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="mx-2 mb-3">
                    <label htmlFor="company2" className="text-gray-600">Company</label><br />
                    <input id="company2" class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>
            </form>
        </div>
    )
}

export default Checkout;