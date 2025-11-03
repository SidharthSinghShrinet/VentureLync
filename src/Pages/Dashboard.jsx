import  { useState, useEffect } from 'react'

function Dashboard() {
    let [input,setInput] = useState("");
    let [allUsers, setAllUsers] = useState([]);
    let [selectedUser, setSelectedUser] = useState([]);
    useEffect(()=>{
        async function getData(){
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/users");
                let data = await response.json();
                setAllUsers(data);
                setSelectedUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[]);
    useEffect(()=>{
        if(input.trim() === ""){
            if(selectedUser.length!==allUsers.length){
                setSelectedUser(allUsers);
            }
            return;
        }
        let filteredUsers = allUsers.filter((user)=>user.name.toLowerCase().includes(input.toLowerCase()) || user.email.toLowerCase().includes(input.toLowerCase()));
        setSelectedUser(filteredUsers); 
    },[input]);
    console.log(input);
    console.log(allUsers);
    console.log(selectedUser);
  return (
    <div className='w-full h-[calc(100vh-75px)] flex flex-col gap-10 items-center'>
        <input type="search" className='mt-15 border-2 lg:w-[40%] h-10 p-2 text-slate-700 text-xl tracking-wider font-semibold rounded-2xl' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search by name or email...'/>
            {selectedUser.length>0?(
                selectedUser.map((user,idx)=>(
                    <div key={idx} className='w-[85%] lg:w-[65%] h-fit bg-gray-100 shadow-2xl rounded-2xl p-5'>
                        <p className='text-lg'><span className='text-xl font-bold'>Name : </span>{user.name}</p>
                        <p className='text-lg'><span className='text-xl font-bold'>Email: </span>{user.email}</p>
                        <p className='text-lg'><span className='text-xl font-bold'>Company: </span>{user.company.name}</p>
                        <p className='text-lg'><span className='text-xl font-bold'>Website: </span>{user.website}</p>
                    </div>
                ))
            ):<p>No user details found</p>}
    </div>
  )
}

export default Dashboard