import React, { useEffect, useState } from 'react'

function DataFetching() {
    let [posts,setPosts]=useState([])
    async function getData() {
        let res=await fetch('https://jsonplaceholder.typicode.com/posts')
        let data=res.json()
        console.log(data)
        setPosts(data)
    }
    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default DataFetching
