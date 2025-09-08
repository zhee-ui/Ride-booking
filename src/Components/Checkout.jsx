import React from "react";

export default function Checkout({ car }) {
    return(
        <div>
          <div className="bg-white shadow w-[350px] rounded-lg px-8 ">
            <h3 className="text-lg font-bold pt-8 ">Total charges</h3>
           <div className="flex justify-between items-center ">
             <p>Base Rate:</p>
            <span>$1000</span>
           </div>
            <hr className="my-1 border-gray-300 py-1 pb-2" />
            <div className="flex justify-between items-center">
              <p>Fuel</p>
              <span>$50</span>
            </div>
            <hr className="my-1 border-gray-300 py-1 pb-2" />
            <div className="flex justify-between items-center">
              <p>Gratuity</p>
              <span>$20</span>
            </div>
           <hr className="my-1 border-gray-300 py-1 pb-2" />
           <div className="flex justify-between items-center pb-4">
             <p className="font-bold">Total</p> 
            <span>$1,070</span>
           </div>
           <div className="flex justify-center items-center pb-8">
              <button className="bg-black py-2 px-8 text-white rounded-lg">Proceed to checkout</button>
            </div>
        </div>
          
    </div>

    )
}