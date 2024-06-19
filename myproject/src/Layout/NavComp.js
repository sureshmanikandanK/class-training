import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            <h2>This is Nav Component</h2>
            <Link to="myimages" className='btn btn-primary' >Images</Link> &nbsp;
            <Link to="myslider" className='btn btn-primary' >Slider</Link> &nbsp;
            <Link to="parent" className='btn btn-primary' >Parent</Link> &nbsp;
            <Link to="UseState" className='btn btn-primary' >UseState</Link> &nbsp;
            <Link to="ReactHooks" className='btn btn-primary' >ReactHooks</Link> &nbsp;
            
            
        </div>
    )
}

export default NavComp
