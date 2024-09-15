import React from 'react';
import Card from '../../Components/Card';
import { CiSearch } from "react-icons/ci";

function Main({ results }) {
  function formatDate(unixTimestamp) {
    if (!unixTimestamp) return 'N/A';
    const date = new Date(unixTimestamp * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const validResults = Array.isArray(results) ? results.flat() : [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-between p-5 gap-12">
      <div className="flex flex-col w-[65vw]">
        {validResults.length > 0 ? (
          validResults.map((result, index) => (
            <Card
              key={result._id}
              title={result._source?.mark_identification}
              owner={result._source?.current_owner}
              status={result._source?.status_type}
              id={result._id}
              registrationDate={formatDate(result._source?.registration_date)}
              statusDate={formatDate(result._source?.status_date)}
              renewalDate={formatDate(result._source?.renewal_date)}
              description={
                result._source?.mark_description_description?.[0]?.substring(0, 60) +
                (result._source?.mark_description_description?.[0]?.length > 60 ? '...' : '') ||
                'No Description'
              }
              classes={result._source?.class_codes}
            />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

      <div className="flex flex-col w-[30vw] gap-8 sticky top-0">
        <div className="p-5 shadow-lg rounded-2xl">
          <h1 className="font-bold text-lg">Status</h1>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="p-4 border border-blue-500 bg-blue-100 text-blue-500 rounded-lg cursor-pointer">All</div>
            <div className="flex items-center gap-2  p-4 border rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-[#EEF4FF] cursor-pointer">
              <div className="bg-green-500 rounded-full h-3 w-3"></div>
              <span>Registered</span>
            </div>
            <div className="flex items-center gap-2  p-4 border rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-[#EEF4FF] cursor-pointer">
              <div className="bg-yellow-500 rounded-full h-3 w-3"></div>
              <span>Pending</span>
            </div>
            <div className="flex items-center gap-2  p-4 border rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-[#EEF4FF] cursor-pointer">
              <div className="bg-red-500 rounded-full h-3 w-3"></div>
              <span>Abandoned</span>
            </div>
            <div className="flex items-center gap-2  p-4 border rounded-lg hover:border-blue-500 hover:text-blue-500 hover:bg-[#EEF4FF] cursor-pointer">
              <div className="bg-blue-500 rounded-full h-3 w-3"></div>
              <span>Others</span>
            </div>
          </div>
        </div>
        <div className="p-5 shadow-lg rounded-2xl">
          <div className='flex flex-row item-center gap-6'>
            <div className="flex flex-col justify-between items-center mb-4">
              <span className='font-bold text-lg'>Owners</span>
              <div className="h-[2px] w-16 bg-black"></div>
            </div>
            <span className=' text-lg'>Law Firms</span>
            <span className=' text-lg'>Attorney</span>
          </div>
          <div className="flex items-center gap-4 mt-4 border p-2 rounded-lg">
            <CiSearch className="text-xl cursor-pointer" />
            <input
              className="outline-none bg-transparent w-full"
              type="text"
              placeholder="Search Owners"
            />
          </div>
          <div className="flex flex-col mt-4 max-h-40 overflow-y-scroll">
            <label className="flex items-center gap-2 mb-2 p-3">
              <input type="checkbox" />
              <span>Tesla</span>
            </label>
            <label className="flex items-center gap-2 mb-2  p-3">
              <input type="checkbox" />
              <span>LEGALFORCE RAPC</span>
            </label>
            <label className="flex items-center gap-2 mb-2  p-3">
              <input type="checkbox" />
              <span>Space Inc</span>
            </label>
            <label className="flex items-center gap-2  p-3">
              <input type="checkbox" />
              <span>Another Company</span>
            </label>
          </div>
        </div>
        <div className="p-5 shadow-lg rounded-2xl">
          <h1 className="font-semibold text-lg mb-4">Display</h1>
          <div className="bg-gray-200 p-2 rounded-lg flex justify-around">
            <div className="p-2 bg-white rounded-lg cursor-pointer">Grid View</div>
            <div className="p-2 cursor-pointer">List View</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;



//COMPLETELY MAID ON CSS
// import React from 'react'
// import './Main.css';
// import Card from '../Components/Card';
// import { CiSearch } from "react-icons/ci";

// function Main({results}) {
//   function formatDate(unixTimestamp) {
//     const date = new Date(unixTimestamp * 1000);
//     const day = date.getDate();
//     const month = date.toLocaleString('en-US', { month: 'short' });
//     const year = date.getFullYear();
//     // Function to get the correct ordinal suffix
//     // function getOrdinalSuffix(day) {
//     //   if (day > 3 && day < 21) return 'th'; // Covers 11th to 20th
//     //   switch (day % 10) {
//     //     case 1: return 'st';
//     //     case 2: return 'nd';
//     //     case 3: return 'rd';
//     //     default: return 'th';
//     //   }
//     // }
//     const dayWithSuffix = day;
//     return `${dayWithSuffix} ${month} ${year}`;
//   }
  
//   // Example usage:
//   const formattedDate = formatDate(425001600);
//   console.log(formattedDate); // Output: "4th Jan 1983"
  
//   const validResults = Array.isArray(results) ? results.flat() : [1,2,3,4,5];
//   // const i=0;

//   console.log(results)
//   return (
//     <div className="main">
//       <div className="sl">
//       {validResults.length > 0 ? (
//           validResults.map((result,index) => (
//             <Card
//               key={result._id}
//               title={result._source?.mark_identification}
//               owner={result._source?.current_owner}
//               status={result._source?.status_type}
//               id={result._id}
//               // const formattedDate = ;
//               registrationDate={
//                 formatDate(result._source?.registration_date)
//               }
//               statusDate={
//                 formatDate(result._source?.status_date)
//               }
//               renewalDate={
//                 formatDate(result._source?.renewal_date)
//               }
//               description={
//                 result._source?.mark_description_description?.[0]?.substring(0, 60) + 
//                 (result._source?.mark_description_description?.[0]?.length > 60 ? '...' : '') || 
//                 'No Description'
//               }
//               classes={
//                 result._source?.class_codes
//               }
//               />
//           ))
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//       <div className="sr">
//         <div className="status">
//           <h1 style={{fontWeight:"bolder"}}>Status</h1>
//           <div className="statuss">
//             <div className="all" style={{border:"1px solid blue",backgroundColor:"#EEF4FF",color:"blue"}}>All</div>
//             <div className="bar">
//               <div className="round" style={{backgroundColor:"green",borderRadius:"50%",height:"1vh",width:"1vh"}}></div>
//               <span>Registered</span>            
//             </div>
//             <div className="bar">
//               <div className="round" style={{backgroundColor:"yellow",borderRadius:"50%",height:"1vh",width:"1vh"}}></div>
//               <span>Pending</span>
//             </div>
//             <div className="bar">
//               <div className="round" style={{backgroundColor:"red",borderRadius:"50%",height:"1vh",width:"1vh"}}></div>
//               <span>Abandoned</span>
//             </div>
//             <div className="bar">
//               <div className="round" style={{backgroundColor:"blue",borderRadius:"50%",height:"1vh",width:"1vh"}}></div>
//               <span>Others</span>
//             </div>
//           </div>
//         </div>
//         <div className="blockr">
//           <div className="role">
//             <div className="dd">
//             <span>Owners</span>
//             <div className='linee'></div>
//             </div>
//             <span>Law Firms</span>
//             <span>Attorney</span>
//           </div>
//           <div className="search">
//             <CiSearch style={{cursor:"pointer",fontSize:18}} />
//             <input className='input' type="text" placeholder='Search Owners' />
//           </div>
//           <div className="check">
//             <div className="checkbox">
//               <input type="checkbox"  name="topping" value="Tesla" /><span>Tesla</span>
//             </div>
//             <div className="checkbox">
//               <input type="checkbox"  name="topping" value="Tesla" /><span>LEGALFORCE RAPC</span>
//             </div><div className="checkbox">
//               <input type="checkbox"  name="topping" value="Tesla" /><span>Space Inc</span>
//             </div><div className="checkbox">
//               <input type="checkbox"  name="topping" value="Tesla" /><span>Space Inc</span>
//             </div>
//           </div>
//         </div>
//         <div className="blockd">
//           <h1 style={{fontWeight:"600"}}>Display</h1>
//           <div className="back">
//             <div className="l" style={{backgroundColor:"white"}}>
//               Grid View
//             </div>
//             <div className="r">
//               List View
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Main
