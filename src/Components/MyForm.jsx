import React, { useState } from 'react'

const MyForm = () => {
  const [form, setForm] = useState({});

const handlechange = (e)=>{
    let {name,value} = e.target
     setForm({
       ...form,[name]:value
     })
}




  return (
    <div>
    
         <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={form.name} placeholder="Enter name" onChange={handlechange} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name='email' value={form.email} placeholder="Enter email" onChange={handlechange} />
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input type="text" name='age' value={form.age} placeholder="Enter Age" onChange={handlechange} />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name='name' value={form.name} placeholder="Enter name" onChange={handlechange} />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name='name' value={form.name} placeholder="Enter name" onChange={handlechange} />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name='name' value={form.name} placeholder="Enter name" onChange={handlechange} />
          </div>

         </form>
    
    </div>
  )
}

export default MyForm