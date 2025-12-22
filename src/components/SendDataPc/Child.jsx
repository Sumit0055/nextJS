// "use client"
import React from 'react'

export default function Child(props) {
    return (
        <>
            <h2>This Child Components</h2>
            <h3>Name : {props.name}</h3>
            <h2>Array :{props.arr.join()}</h2>
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
                            props?.data?.map((item) => {
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
