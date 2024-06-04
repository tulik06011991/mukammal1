import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UsersAllData = () => {
    
  return (
    <div>
        <br /><br /><br />
        <div>
            <div></div>
            <div>
                <table className='table'>

                    <thead>
                    <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>Haridlar</th>
                        <th>Vaqti</th>
                        <th>miqdori </th>
                        <th>summa</th>
                        </tr>
                    </thead>

                    <tbody>
                      <tr>

                        <td>
                            men
                        </td>
                        <td>
                            men@gmail.com
                        </td>
                        <td>
                         notebook
                        </td>
                        <td>
                            12:00
                        </td>
                        <td>
                            3 ta
                        </td>
                        <td>
                            13 mln
                        </td>
                        <button className='btn btn-primary me-4 ms-4'>Update</button>
                        <button className='btn btn-primary me-4 ms-4'>Delete</button>
                      </tr>  
                    </tbody>
                    
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default UsersAllData
