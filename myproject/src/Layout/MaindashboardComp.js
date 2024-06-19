import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import FooterComp from './FooterComp'
const MaindashboardComp = () => {
    return (
        <div className="container" >
            <h2>This is Maindashboard Component</h2>

            <div className='card border-primary'>
                <div className='card-header border-primary '><center>< NavComp /></center></div>
                <div className='card-body border-primary '><center><Outlet></Outlet></center>
                
                </div>
                <div className='card-footer border-primary '><center><FooterComp /></center></div>

            </div>

          
        </div>
    )
}

export default MaindashboardComp
