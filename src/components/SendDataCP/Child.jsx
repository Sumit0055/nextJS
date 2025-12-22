import { useState } from "react"
import React from 'react'

export default function Child(props) {
    let [data, setData] = useState([
        { id: 1, name: "Sumit Dutt", dsg: " MERN Stack Developer", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 2, name: "Sunil Dutt", dsg: "Private Employee", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 3, name: "Aayush kumar", dsg: "Data Analist", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 4, name: "Neeraj Kumart", dsg: "Ai Full Stack Developer", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
        { id: 5, name: "Mayank Pandit", dsg: "Developer", salary: 10000, city: "Ghaziabad ", state: "Uttar Pardesh" },
    ])
    return (
        <>
            <h2>This is Child Component</h2>
            <button onClick={() => props.getData(data)}>Send data to Parent</button>
        </>
    )
}
