import React from 'react'
import { Link } from '@mui/material';
import logo from '../Assets/logo_panchang.png'

import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import TranslateIcon from '@mui/icons-material/Translate';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className="Logo">
        <img src={logo} alt="" />
        <div>App Name</div>
        <div id='AppVersion'>v1.0.0</div>
      </div>
      <div className="SideNav">
          <h4>Admin</h4>
          <Link className='SideNavLink' href='/' ><BookmarksOutlinedIcon /> Booking Enquiry</Link>
          <Link className='SideNavLink' href='/' ><LocalActivityIcon/> Events</Link>
          <Link className='SideNavLink' href='/' ><NotificationAddIcon/> Notifications</Link>
          <Link className='SideNavLink' href='/' ><ReceiptLongIcon/> Receipt Generator</Link>
          <Link className='SideNavLink' href='/' ><PendingActionsIcon/> Requests</Link>
          <Link className='SideNavLink' href='/' ><ManageAccountsIcon/> Users</Link>
          <Link className='SideNavLink' href='/' ><FolderSharedIcon/> Vastipatrak</Link>
      </div>
      <div className="SideNav">
          <h4>Pages</h4>
          <Link className='SideNavLink' href='/' ><HomeIcon/> Home</Link>
          <Link className='SideNavLink' href='/Events' ><InsertInvitationIcon/> Events</Link>
          <Link className='SideNavLink' href='/MyFamily' ><FamilyRestroomIcon/> Family</Link>
      </div>
      <div className='SideNav'>
          <Link className='OtherLink'><TranslateIcon/> Language</Link>
          <Link className='OtherLink'><LogoutIcon/> Sign Out</Link>
      </div>
    </div>
  )
}

export default Sidebar