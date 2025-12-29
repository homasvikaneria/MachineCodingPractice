// // frontend/practice/src/components/Search.jsx
// import React, { useEffect, useState } from 'react'

// function Search() {
//     const [data, setData] = useState([]);
//     const [input, setInput] = useState("");
//     const [output, setOutput] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch("https://jsonplaceholder.typicode.com/users")
//             const result = await response.json();
//             setData(result)
//         }
//         fetchData();
//     }, [])

//     useEffect(()=>{
//         if(input===""){
//             setOutput(data);
//         }else{
//             const filteredData=data.filter(val=>
//                 val.name.toLowerCase().includes(input.toLowerCase())
//             )
//             setOutput(filteredData)
//         }
//     },[data,input])


//     return (
//         <div>
//             <div>
//                 <input type="text" placeholder='search here' onChange={(e)=>setInput(e.target.value)} />
//             </div>
//             <div>
//                 {output.map(item => (
//                     <p key={item.id}>{item.name}</p>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Search



import React, { useEffect, useState } from 'react'


function Search() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [output,setOutput]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    useEffect((e)=>{
        if(input==""){
            setOutput(data)

        }else{
            const filteredData=data.filter(i=>
                i.name.toLowerCase().includes(input.toLowerCase())
            )
            setOutput(filteredData)
        } 
    })

    return (
    <div>
        <h1 className='text-xl font-bold'>FETCH API</h1>
      <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        {output.map((i)=>{
            return <div key={i.id}>
                {i.name}
            </div>
        })}
      </div>
    </div>
    )
}

export default Search
