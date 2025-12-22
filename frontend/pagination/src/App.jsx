// pagination/src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from "axios";
import PaginationNumber from './PaginationNumber';
import PaginationData from './PaginationData';

const App = () => {
  const dataPerPage=5;
  const [usersdata, setusersData] = useState([]);
  const [currentPage,setCurrentPage]= useState(1);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://dummyjson.com/users");
      setusersData(res.data.users); 
    }
    getData();
  }, []);

  const totalPages=Math.ceil(usersdata.length / dataPerPage);
  let lastIndex= currentPage*dataPerPage;
  let firstIndex= lastIndex-dataPerPage;
  let currentData=usersdata.slice(firstIndex,lastIndex)
  console.log(currentData)


  return (
    <div>

      <PaginationData currentData={currentData}></PaginationData>

      <PaginationNumber 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}>

      </PaginationNumber>
    </div>
  );
}

export default App;
