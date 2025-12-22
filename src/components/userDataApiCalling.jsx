//----------server component api calling-----------

// async function getUser() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
//         method:"GET",
//         headers:{
//             "content-type":"application/json"
//         }
//     })
//     response = await response.json()
//     if(response && response.length)
//     {
//         return response
//     }else{
//         return []
//     }
// }

// export default async function userDataApiCalling() {
//     let data = await getUser()
//   return (
//     <>
    
//             <h1>Server Components API Calling Example</h1>
//             <table border={2} cellPadding={10} cellSpacing={0}>
//                 <caption>User Post Data</caption>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>name</th>
//                         <th>User Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Phone</th>
//                         <th>Website</th>
//                         <th>Company</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((item) => {
//                             return <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.username}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.address.street},{item.address.zipcode},{item.address.geo.lat},{item.address.geo.lng}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.website}</td>
//                                 <td>{item.company.name},{item.company.catchPhrase}{item.company.bs}</td>
//                             </tr>
//                         })
//                     }
//                 </tbody>
            
//             </table>
//     </>
//   )
// }

//-----------------------Client Components---------------------
"use client"
import React, { useEffect, useState } from 'react'

export default function userDataApiCalling() {
    let [data,setData]=useState([])

    useEffect(()=>{
        (async()=>{
            let response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    })
    response = await response.json()
    if(response && response.length)
    {
        setData(response)
    }else{
        return []
    }

        })()
    })
  return (
       <>
    
            <h1>Server Components API Calling Example</h1>
            <table border={2} cellPadding={10} cellSpacing={0}>
                <caption>User Post Data</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street},{item.address.zipcode},{item.address.geo.lat},{item.address.geo.lng}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name},{item.company.catchPhrase}{item.company.bs}</td>
                            </tr>
                        })
                    }
                </tbody>
            
            </table>
    </>
  )
}
