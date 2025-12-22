//-----------Server Component API Calling Example----------- 

async function getAPIData() {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            if (response && response.length) {
              return  response
            }
            else {
                return []
            }
}

export default async function APICallingExample() {
   let data = await getAPIData()
// let data = []
    return (
        <>
            <h1>Server Components API Calling Example</h1>
            <table border={2} cellPadding={10} cellSpacing={0}>
                <caption>Blog Post Data</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.userId}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}





// //-----------Client Component API Calling Example----------- 
// "use client"
// import React, { useEffect, useState } from 'react'

// export default function APICallingExample() {
//     let [data, setData] = useState([])

//     useEffect(() => {
//         (async () => {
//             let response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//                 method: "GET",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             response = await response.json()
//             if (response && response.length) {
//                 setData(response)
//             }
//         })()
//     })
//     return (
//         <>
//             <h1>Client Components API Calling Example</h1>
//             <table border={2} cellPadding={10} cellSpacing={0}>
//                 <caption>Blog Post Data</caption>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>User Id</th>
//                         <th>Title</th>
//                         <th>Body</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((item) => {
//                             return <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>{item.userId}</td>
//                                 <td>{item.title}</td>
//                                 <td>{item.body}</td>
//                             </tr>
//                         })
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }
