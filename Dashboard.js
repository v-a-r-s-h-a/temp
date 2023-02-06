import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {
  return (
    <>
    <nav>
        <NavLink to='/'><p>Authoring Interface</p></NavLink>
        <div>
            <ul id="navbar">            
                <li><NavLink to="/usrgenerate">Generate USR</NavLink></li>
                <li><NavLink to="/dashboard">Username : user1</NavLink></li>
            </ul>
        </div>
    </nav>
    <div class="cards">
        <div id="card">
            5 Discourses created
        </div>
        <div id="card">
            25 USRs Generated
        </div>
        <div id="card">
            2 Discourses Approved
        </div>
    </div>

    <div class="dis_table">
        <table>
            <tr>
                <th>S.No</th>
                <th>Discourse</th>
                <th>USRs</th>
                <th>Actions</th>
                <th>Status</th>
            </tr>

            <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td>
                    <button><a href='http://localhost:3000/usrgenerate'>View</a></button>
                    <button><a href='http://localhost:3000/usrgenerate'>Edit Discourse</a></button>
                    <button>Delete</button>
                </td>
                <td>Approved</td>
            </tr>
        </table>
    </div>
    </>
  )
}

export default Dashboard
