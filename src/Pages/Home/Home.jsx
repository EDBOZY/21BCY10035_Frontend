import React from 'react';
import { FiFilter } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import Main from '../Main/Main';

function Home({ results, total, name }) {
  return (
    <div className="flex flex-col bg-[#FEFEFE]">
      <div className="flex p-5 ml-12">
        <span className="text-lg font-semibold">
          {`About ${total} Trademarks found for "${name}"`}
        </span>
      </div>
      <div className="bg-black h-[0.1vh] w-[95vw] ml-5"></div>
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-4">
          <span className="text-lg">Also searching for</span>
          <div className="bg-[#FEF7F0] text-[#E87B15] px-4 py-2 border border-[#E87B15] rounded-lg font-semibold cursor-pointer">
            {`'${name.slice(0, name.length - 1)}'`}
          </div>
          <div className="bg-[#FEF7F0] text-[#E87B15] px-4 py-2 border border-[#E87B15] rounded-lg font-semibold cursor-pointer">
            {`'${name}'`}
          </div>
        </div>
        <div className="flex gap-4 p-5 mr-10">
          <div className="flex items-center justify-center border border-black rounded-lg gap-2 px-4 py-2 cursor-pointer">
            <FiFilter className="text-lg" />
            Fill
          </div>
          <div className="flex items-center justify-center border border-black rounded-full p-2 cursor-pointer">
            <IoShareSocialOutline className="text-lg" />
          </div>
          <div className="flex items-center justify-center border border-black rounded-full p-2 cursor-pointer">
            <MdOutlineSort className="text-lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-[60vw] gap-8 p-5 ml-6">
        <span className="font-semibold">Mark</span>
        <span className="font-semibold">Details</span>
        <span className="font-semibold">Status</span>
        <span className="font-semibold">Class/Description</span>
      </div>
      <div className="bg-black h-[0.1vh] w-[65vw] ml-5"></div>
      <Main results={results} />
    </div>
  );
}

export default Home;

//COMPLETELY MADE FROM CSS


// import React, { useState } from 'react'
// import "./Home.css"
// import { FiFilter } from "react-icons/fi";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { MdOutlineSort } from "react-icons/md";
// import Main from '../Main';
// import axios from 'axios';
// function Home({results,total,name}) {
//     // console.log(results.hits)
//   return (
//     <div className="home" style={{backgroundColor:"FEFEFE"}}>
//         <div className="No">
//             <span style={{fontSize:"18",fontWeight:"600"}}>
//             {`About ${total} Trademarks found for "${name}"`}
//             </span>
//         </div>
//         <div className="line"></div>
//         <div className="similiar">
//             <div className="sl">
//                 <div className="sll">
//                     <span style={{fontSize:"18"}}>Also searching for</span>
//                     <div className="buttonn" style={{fontWeight:"600"}}>
//                     {/* {`'${results[0]._source?.mark_identification.slice(0,results[0]._source?.mark_identification.length-1)}'`} */}
//                     {`'${name.slice(0,name.length-1)}'`}
//                     </div>
//                     <div className="buttonn" style={{fontWeight:"600"}}>
//                         {/* {`'${results[0]._source?.mark_identification}'`} */}
//                         {`'${name}'`}
//                     </div>
//                 </div>
//             </div>
//             <div className="sr">
//                 <div className="fil1">
//                     <FiFilter style={{fontSize:"18"}} />
//                     Fill
//                 </div>
//                 <div className="fil">
//                     <IoShareSocialOutline style={{fontSize:"18"}} />
//                 </div>
//                 <div className="fil">
//                     <MdOutlineSort style={{fontSize:"18"}} />
//                 </div>
//             </div>
//         </div>
//         <div className="table">
//             <span style={{fontWeight:"600"}}>Mark</span>
//             <span style={{fontWeight:"600"}}>Details</span>
//             <span style={{fontWeight:"600"}}>Status</span>
//             <span style={{fontWeight:"600"}}>Class/Description</span>
//         </div>
//         <div className="line2"></div>
//         {/* <div className="main">
//             <div className="sll">
//                 <Main/>
//             </div>
//             <div className="srr">
//                 filter
//             </div>
//         </div> */}
//         <Main results={results} />

//     </div>
//   )
// }

// export default Home

