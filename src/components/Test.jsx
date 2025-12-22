import React from 'react'

export default function Test() {
  let data = [
    {id:1,name:"Sumit Dutt",dsg:"Developer",salary:10000,city:"Ghaziabad",state:"UttarPardesh"},
    {id:2,name:"Sunil Dutt",dsg:"Private Jobs",salary:20000,city:"Nand Gram",state:"UttarPardesh"},
    {id:3,name:"Sumit Dutt",dsg:"Goverment",salary:230000,city:"Harvansh Nagar",state:"UttarPardesh"},
    {id:4,name:"Sumit Dutt",dsg:"Manager",salary:40000,city:"Ghukna More",state:"UttarPardesh"},
    {id:5,name:"Sumit Dutt",dsg:"CEO",salary:50000,city:"Paterl Nagar",state:"UttarPardesh"},
  ]
  return (
<>
<h1>Server Components</h1>
<h2>Array Of Objects</h2>
<table className='' border={2} cellPadding={10}>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Designation</th>
      <th>Salary</th>
      <th>City</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item)=>{
        return <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.dsg}</td>
        <td>{item.salary}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        </tr>
      })
    }
  </tbody>
</table>
</>
  )
}