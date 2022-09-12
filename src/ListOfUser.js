import React from 'react'
import './ListOfUser.css'

function ListOfUser({ userData }) {
    return (
        <div>
            <h1>List Of User fetch</h1>
            {
                userData.map(el =>
                    <div className='user' key={el.id}>
                        <div className='container'>
                            <h1>{el.name}</h1>
                            <h2>{el.email}</h2>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default ListOfUser