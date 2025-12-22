// "use client"
import React from 'react'
import Child from "./Child"
export default function Parent() {
    let name = "Sumit DUtt"
    let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    let data = [
        { id: 1, name: "Sumit Dutt", dsg: " MERN Stack Developer", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 2, name: "Sunil Dutt", dsg: "Private Employee", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 3, name: "Aayush kumar", dsg: "Data Analist", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 4, name: "Neeraj Kumart", dsg: "Ai Full Stack Developer", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 5, name: "Mayank Pandit", dsg: "Developer", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
    ]
    return (
        <>
            <h1>Sending Data From Parent to Child Components</h1>
            <h3> This is Parent Component</h3>
            <hr />
            <Child name={name} arr={arr} data={data} />
          
        </>
    )
}
