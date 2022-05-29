import React from 'react'
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SearchIcon from '@mui/icons-material/Search';

const MobileBottomNav = () => {

    const handleChange = (event, newValue) => {
        if(newValue==='news') {
            document.getElementsByClassName('MobileHome').style.display='none';
        }
      };

  return (
    <div>
        <Paper className='MobileBottomNav'>
            <BottomNavigation sx={onchange={handleChange}}>
                <BottomNavigationAction
                    href='/'
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    href='/News'
                    value="news"
                    icon={<FeedIcon />}
                />
                <BottomNavigationAction
                    href='/MobileSearchPage'
                    value="search"
                    icon={<SearchIcon />}
                />
                <BottomNavigationAction
                    href='/MyFamily'
                    value="myfamily"
                    icon={<FamilyRestroomIcon />}
                /> 
            </BottomNavigation>
      </Paper>
    </div>
  )
}

export default MobileBottomNav