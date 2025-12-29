import React, { useEffect, useState } from 'react'

const ApiFetching = () => {
  const [data,setData]=useState([]);

  // async await methord
  useEffect(()=>{
    const fetchApi=async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const result =await response.json()
      setData(result)
    }
    fetchApi();
  },[])

  // .fetch method
  //   useEffect(()=>{
  //       fetch("https://jsonplaceholder.typicode.com/users")
  //       .then(res=>res.json())
  //       .then(data=>setData(data))
  //       .catch(err=>console.log(err))
  //   },[])

  return (
    <div>
      {data.map(user=>(
        <p key={user.id}>{user.title}</p>
      ))}
    </div>
  )
}

export default ApiFetching
