//---Query Parameters in Client Component
// "use client"
// import { useSearchParams } from 'next/navigation'
// import React from 'react'

// export default function contactus() {
//   let searchParams = useSearchParams()
//   return (
//     <>
//     <h1>This is Contactus Page</h1>
//     {searchParams.get("name")?<h2>Name : {searchParams.get("name")}</h2>:null}
//     {searchParams.get("dsg")?<h2>Designation : {searchParams.get("dsg")}</h2>:null}
//     {searchParams.get("salary")?<h2>Salary : {searchParams.get("salary")}</h2>:null}
//     </>
//   )
// }

//---Query Parameters in Servcer Component

import React from 'react'

export default async function contactus(req, res) {
  let { name, dsg, salary } = await req.searchParams
  console.log(req.searchParams)
  return (
    <>
      <h1>This is Contactus Page</h1>
      {name ? <h2>Name : {name}</h2> : null}
      {dsg ? <h2>Designation : {dsg}</h2> : null}
      {salary ? <h2>Salary : {salary}</h2> : null}
    </>
  )
}
