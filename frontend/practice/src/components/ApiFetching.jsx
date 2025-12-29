// // frontend/practice/src/components/ApiFetching.jsx
// import React, { useEffect, useState } from 'react';

// function ApiFetching() {
//   // State to store API data
//   // useState is used because data changes over time
//   const [data, setData] = useState([]);

//   /**
//    * useEffect is used for side effects like API calls
//    * Empty dependency array [] ensures it runs only once
//    */
//   useEffect(() => {
//     // Async function to fetch data from API
//     const apiFetch = async () => {
//       // Fetch data from external API
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );

//       // Convert response stream into JavaScript object
//       // API returns JSON → we convert it to usable data
//       const result = await response.json();

//       // Update state with fetched data
//       setData(result);
//     };

//     // Call the async function
//     apiFetch();
//   }, []);

//   return (
//     <div>
//       {data.map(item => (
//         // Key helps React identify list items efficiently
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default ApiFetching;



import React, { useEffect, useState } from 'react'

const ApiFetching = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchApi=async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const result =await response.json()
      setData(result)
    }
    fetchApi();

  },[])

  return (
    <div>
      {data.map(user=>(
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  )
}

export default ApiFetching
