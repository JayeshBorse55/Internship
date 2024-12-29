import React from "react";

function FooterProj()
{
    return(
        <div className="bg-gray-900 text-white mt-12 h-14 flex items-center">
            <div className="ml-36 opacity-80">
                <h5>&copy;TailCommerce - All Right Reserved</h5>
            </div>

            <div className="ml-[37rem] flex">
                <img src="/Visa.png" className="w-12 h-5 mr-2 rounded-[2px]"/>
                <img src="/Mastercardnew.webp" className="w-12 h-5 mr-2 rounded-[2px]"/>
                <img src="/paypal.png" className="w-12 h-5 mr-2 rounded-[2px]"/>
                <img src="/skrill.png" className="w-12 h-5 mr-2 rounded-[2px]"/>
                <img src="/Mastercardnew.webp" className="w-12 h-5 mr-2 rounded-[2px]"/>
                <img src="/Visa electron.png" className="w-12 h-5 mr-2 rounded-[2px]"/>
            </div>
        </div>
    )
}

export default FooterProj;