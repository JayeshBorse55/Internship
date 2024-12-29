import React from "react";

function LinkingProp(links)
{
    return(
        <div className="space-y-4">
            <h5 className="font-medium opacity-70">{links.head}</h5>
            <p className="hover:underline opacity-85"><a href="#">{links.one}</a></p>
            <p className="hover:underline opacity-85"><a href="#">{links.two}</a></p>
            <p className="hover:underline opacity-85"><a href="#">{links.three}</a></p>
            <p className="hover:underline opacity-85"><a href="#">{links.four}</a></p>
        </div>
    )
}

export default LinkingProp;