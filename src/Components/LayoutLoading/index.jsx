import React from "react";
import { Mosaic } from "react-loading-indicators";


const LayoutLoading = () => {
    return (
        <div className="fixed flex justify-center items-center flex-col w-full h-full">
            <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} />
            <h1 className="text-gray-400 font-bold text-2xl">
                PRODUCE HOUSE
            </h1>
        </div>
    );
};

export default LayoutLoading;
