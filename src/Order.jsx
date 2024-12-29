import React from "react";

function Order() {
    return (
        <div className="border w-3/12 ml-8 mt-5 rounded h-[28rem]">
            <div className="mx-6">
                <h2 className="my-3 font-medium">ORDER SUMMARY</h2>
                <div className="flex">
                    <h5 className="mr-12 text-sm font-medium">Italian shape sofa</h5>
                    <h5 className="text-gray-600">x3</h5>
                    <h5 className="ml-24 text-gray-800 text-sm">$320</h5>
                </div>
                <div>
                    <p className="text-xs text-gray-600">Size:M</p>
                </div>

                <div className="flex">
                    <h5 className="mr-12 text-sm font-medium">Italian shape sofa</h5>
                    <h5 className="text-gray-600">x3</h5>
                    <h5 className="ml-24 text-gray-800 text-sm">$320</h5>
                </div>
                <div>
                    <p className="text-xs text-gray-600">Size:M</p>
                </div>

                <div className="flex">
                    <h5 className="mr-12 text-sm font-medium">Italian shape sofa</h5>
                    <h5 className="text-gray-600">x3</h5>
                    <h5 className="ml-24 text-gray-800 text-sm">$320</h5>
                </div>
                <div>
                    <p className="text-xs text-gray-600">Size:M</p>
                </div>

                <div className="flex">
                    <h5 className="mr-12 text-sm font-medium">Italian shape sofa</h5>
                    <h5 className="text-gray-600">x3</h5>
                    <h5 className="ml-24 text-gray-800 text-sm">$320</h5>
                </div>
                <div>
                    <p className="text-xs text-gray-600">Size:M</p>
                </div>
            </div>

            <div className="mt-2 pb-4 mx-6 border-b flex">
                <h5 className="text-base">subtotal</h5>
                <h5 className="ml-[13.3rem] text-gray-800 text-sm">$1280</h5>
            </div>

            <div className="mt-2 pb-4 mx-6 border-b flex">
                <h5>shipping</h5>
                <h5 className="ml-[13rem] text-gray-800 text-sm">Free</h5>
            </div>

            <div className="mt-2 mx-6 flex">
                <h5 className="font-medium">Total</h5>
                <h5 className="ml-[14.5rem] text-gray-800 text-sm">$1280</h5>
            </div>

            <div className="flex text-sm mx-6 mt-4">
                <div class="flex items-center mb-4">
                <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"/>
                <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-600 opacity-75">I agree with the <a href="#" class="text-red-500 opacity-100 dark:text-red-500 hover:underline">terms & conditions</a>.</label>
                </div>
            </div>

            <div className="mx-6">
            <button type="submit" class="text-white absolute w-80 bg-red-500 focus:outline-none font-medium rounded-md text-sm px-4 py-2" >Search</button>
            </div>
        </div>
    )
}

export default Order;