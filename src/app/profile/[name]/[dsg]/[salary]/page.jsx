//---------Reaquest Parameter in ClientComponent-----
// "use client"
// import { useParams } from 'next/navigation'
// import React from 'react'

// export default function profile() {
//   let { salary } = useParams()
//   return (
//     <>
//       <h1>This is a Profile Page</h1>
//       <h2>salary:{salary}</h2>
//     </>
//   )
// }


//-----Request Parameter in server Component
import React from 'react'

export default async function profile(req,res) {
  let params = {...await req.params}
  console.log(params.name)
  // console.log(await req.params)
  return (
    <>
      <h1>This is a Profile Page</h1>
      <h2>Salary: {params.salary}</h2>
    </>
  )
}