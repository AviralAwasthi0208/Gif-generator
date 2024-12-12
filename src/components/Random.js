import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";
import { useGif } from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Random = () => {

const{gif,loading,fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div className="w-1/2  bg-green-500  border border-black rounded-xl flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold"> A Random Gif</h1>
      {
      loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
      }
      <button
        onClick={clickHandler}
        className="bg-yellow-500 w-10/12 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};
