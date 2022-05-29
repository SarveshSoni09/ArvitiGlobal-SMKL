import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import logo from '../Assets/logo_panchang.png'

const MobileSideNav = () => {
  return (
    <div className='MobileSideNav'>
        <div className="HideNav" onClick={()=>{document.getElementById('MSideNav').style.visibility='hidden'}}><CloseIcon/></div>
        <div className="Logo">
            <img src={logo} alt="" />
            <div>App Name</div>
            <div id='AppVersion'>v1.0.0</div>
        </div>
        <div className="SideNav">
          <Link className='SideNavLink' href='/' > Settings</Link>
          <Link className='SideNavLink' href='/' > Support and Feedback</Link>
          <Link className='SideNavLink' href='/' > Terms of Use</Link>
          <Link className='SideNavLink' href='/' > Sign Out</Link>
      </div>
    </div>
  )
}

export default MobileSideNav