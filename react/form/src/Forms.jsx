import React, { useState } from 'react'


function Forms() {
    const [user,setUser]=useState( {name:'',email:''} )
    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()} >
        <label htmlFor="">
            Name : -
            <input type="text" name='name' onChange={handleChange} value={user.name} />
        </label><br />
        <label htmlFor="">
            Name : -
            <input type="email" name='email' onChange={handleChange} value={user.email} />
        </label>
        <input type="submit" />
      </form>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}



// function Forms() {
//     const [name,setName]=useState('')

//     console.log(name)
//   return (
//     <div>
//       <form onSubmit={(e)=>e.preventDefault()} >
//         <label htmlFor="">
//             Name : -
//             <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
//         </label>
//         <input type="submit" />
//       </form>
//       <p>{name}</p>
//     </div>
//   )
// }

export default Forms



