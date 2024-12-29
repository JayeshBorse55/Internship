import React from "react";
import LinkingProp from "./LinkingProp";

function Base()
{
    return(
        <div className="border-t mt-14 flex">
            <div className="ml-36 mt-10">
                <div className="text-2xl font-medium text-red-500">RAF<span className="text-gray-700">CART</span></div>
                <h5 className="text-sm mt-4 font-normal opacity-70 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Quia,hic?</h5>
                <div className="mt-7 space-x-4 opacity-50">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>

            <div className="ml-14 mt-10 text-gray-600 text-sm">
                <LinkingProp head={"SOLUTIONS"} one={"Marketing"} two={"Analitycs"} three={"Commerce"} four={"Insights"}/>
            </div>
            
            <div className="ml-36 mt-10 text-gray-600 text-sm">
                <LinkingProp head={"SUPPORT"} one={"Pricing"} two={"Documentation"} three={"Guides"} four={"API Status"}/>
            </div>

            <div className="ml-36 mt-10 text-gray-600 text-sm">
                <LinkingProp head={"SOLUTIONS"} one={"Marketing"} two={"Analitycs"} three={"Commerce"} four={"Insights"}/>
            </div>

            <div className="ml-36 mt-10 text-gray-600 text-sm">
                <LinkingProp head={"SUPPORT"} one={"Pricing"} two={"Documentation"} three={"Guides"} four={"API Status"}/>
            </div>
        </div>
    )
}

export default Base;
