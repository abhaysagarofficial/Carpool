'use client';

import { MapComponent } from "../components/map";
import { MapProvider } from "../providers/map-provider";


function Search_Rides() {
    return (
        <div className="flex justify-center items-center h-screen text-white" >
            <div className="bg-gray-800 h-[100%] w-[50%] bg-gray-800">
                <form action="" className="flex flex-col justify-center items-center h-screen">
                    <label htmlFor="from" className="m-8 text-xl text-bold">From Where : </label>
                    <input type="text" className="border-2 border-gray-700 m-8" />
                    <label htmlFor="from" className="m-8 text-xl text-bold">To Where : </label>
                    <input type="text" className="border-2 border-gray-700 m-8"/>
                    <label htmlFor="from" className="m-8 text-xl text-bold">Date : </label>
                    <input type="date" className="border-2 border-gray-700 m-8" />
                    <button className="border-2 border-gray-700 m-8">Search</button>
                </form>
            </div>
            <div className="bg-pink-800 h-[100%] w-[50%]">
                <MapProvider>
                    <MapComponent />
                </MapProvider>
            </div>
        </div>
    );
}

export default Search_Rides;   