"use client"
import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {

    let [data, setData] = useState([])

    function getData(data) {
        setData(data)
    }
    return (
        <>
            <h1>Send Data From Child to Parent Components</h1>
            <h2>This is Parent Component</h2>
            {
                data.length ?
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
                                data?.map((item) => {
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
                    : null
            }
            <hr />
            <Child getData={getData} />
        </>
    )
}
