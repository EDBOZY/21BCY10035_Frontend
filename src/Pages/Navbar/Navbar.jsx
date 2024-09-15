import React, { useEffect, useState } from 'react';
import a from "../../assests/Logo.png";
import { CiSearch } from "react-icons/ci";
import axios from 'axios';

function Navbar({ onSearchResults, onSearchTotals, onSearchName }) {
  const [searchQuery, setSearchQuery] = useState("Nike");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a search query.');
      return;
    }
    setLoading(true);
    setError(null);
    const data = JSON.stringify({
      input_query: searchQuery,
      input_query_type: "",
      sort_by: 'default',
      status: [],
      exact_match: false,
      date_query: false,
      owners: [],
      attorneys: [],
      law_firms: [],
      mark_description_description: [],
      classes: [],
      page: 1,
      rows: 10,
      sort_order: 'desc',
      states: [],
      counties: []
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://vit-tm-task.api.trademarkia.app/api/v3/us',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      onSearchResults(response.data.body.hits.hits);
      onSearchTotals(response.data.body.hits.total.value);
      onSearchName(searchQuery);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="flex items-center gap-8 p-4 h-[10vh] bg-[#F8FAFE] ml-16">
      <img src={a} alt="Logo" className="cursor-pointer h-[3.5vh]" />
      <div className="flex items-center gap-4 w-[45vw] p-2 border border-black rounded-xl">
        <CiSearch className="cursor-pointer text-lg" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search TradeMarkia here eg. Mickey Mouse"
          className="w-full bg-transparent outline-none text-lg"
        />
      </div>
      <div className="bg-[#4380EC] text-white p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform flex items-center justify-center w-[4.5vw]" onClick={handleSubmit}>Search</div>
    </div>
  );
}

export default Navbar;


//COMPLETELY MADE FROM CSS
// import React, { useEffect, useState } from 'react'
// import "./Navbar.css"
// import a from "../../assests/Logo.png"
// import { CiSearch } from "react-icons/ci";
// import axios from 'axios';
// function Navbar({ onSearchResults,onSearchTotals,onSearchName}) {
//   const [searchQuery, setSearchQuery] = useState("Nike");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
 
//   const fetchData = async () => {
//     if (!searchQuery.trim()) {
//       setError('Please enter a search query.');
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     const data = JSON.stringify({
//       input_query: searchQuery,  // use the searchQuery from state
//       input_query_type: "",
//       sort_by: 'default',
//       status: [],
//       exact_match: false,
//       date_query: false,
//       owners: [],
//       attorneys: [],
//       law_firms: [],
//       mark_description_description: [],
//       classes: [],
//       page: 1,  // page is passed as a parameter
//       rows: 10,  // 15 rows per page
//       sort_order: 'desc',
//       states: [],
//       counties: []
//     });
//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://vit-tm-task.api.trademarkia.app/api/v3/us',
//       headers: {
//         'accept': 'application/json, text/plain, */*',
//         'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
//         'content-type': 'application/json',
//         'origin': 'http://localhost:3000',
//         'priority': 'u=1, i',
//         'referer': 'http://localhost:3000/',
//         'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
//         'sec-ch-ua-mobile': '?0',
//         'sec-ch-ua-platform': '"macOS"',
//         'sec-fetch-dest': 'empty',
//         'sec-fetch-mode': 'cors',
//         'sec-fetch-site': 'cross-site',
//         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
//       },
//       data: data
//     };
//     axios.request(config)
//     .then((response) => {
//       console.log(response.data.body.hits.hits[0]._source.mark_identification);
//       console.log(searchQuery)
//       setResults(response.data)
//       onSearchResults(response.data.body.hits.hits)
//       onSearchTotals(response.data.body.hits.total.value)
//       onSearchName(searchQuery)
//       // onSearchName(response.data.body.hits.hits[0]._source.mark_identification)
//       // setTotal(response.data.hits.total.value)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//     setLoading(false);
//     // console.log(results)
//   };
//   useEffect(() => {
//     // onSearchName("Nike");
//     fetchData();
//     // onSearchName("Nike")
//   }, []);
//   // fetchData()
//   // Handle search input change
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     // onSearchName(e.target.value);
//   };
//   // Handle search submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // onSearchResults(e);
//     // onSearchName(searchQuery)
//     fetchData();
//   };
//   // fetchData();
//   return (
//     <div className="Navbar">
//         <img src={a} alt="" style={{cursor:"pointer",height:"3.5vh"}}/>
//         <div className="search">
//             <CiSearch style={{cursor:"pointer"}} fontSize="18" />
//             <div className="input">
//                 <input type="text" value={searchQuery} onChange={handleSearch} placeholder='Seacrch TradeMarkia here eg. Mickey Mouse' />
//             </div>
//         </div>
//         <div className="button" onClick={handleSubmit}>
//             Search
//         </div>
//     </div>
//   )
// }

// export default Navbar




