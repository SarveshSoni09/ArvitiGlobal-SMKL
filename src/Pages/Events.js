import React from 'react'
import CardDisplay from '../Components/CardDisplay'
import SmallCardDisplay from '../Components/SmallCardDisplay'
import { HomePageCardData } from '../Components/HomePageData'
import { SmallCardData } from '../Components/SBRCardData'
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Events = () => {

    const [search, setSearch] = useState('')
    // Use this for fetching from Firebase Database and using it
    const [eventLists, setEventLists] = useState([])
    const [notificationLists, setNotificationLists] = useState([])

  return (
    <div className='EventPage'>
        <div className="EventMain">
            <div className="MainHeader">
                <div className="MainTitle"><h3>Events</h3></div>
                <div className="Menu" onClick={()=> {document.getElementById('MSideNav').style.visibility='visible'}}><MenuIcon/></div>
            </div>
            {HomePageCardData.map((Data) => (
                <CardDisplay 
                    sx={{margin: '8px 0'}}    
                    title={Data.title}
                    img={Data.img}
                    subject={Data.subject}
                    age={Data.age}
                    area={Data.area}
                    desc={Data.desc}
                />        
            ))}
        </div>
        <div className="EventSBR">
        <div className="SearchBar">
                <div id='SearchText'>
                    <input type="text" 
                           placeholder={"Search"}
                           value={search} 
                           onChange={(e) => setSearch(e.target.value)}>
                    </input>
                </div>
                <div id='SearchIcon'><SearchOutlinedIcon /></div>
            </div>
            <div className="EventSBRContent">
                <h3>Upcoming Events</h3>
                {SmallCardData.map((Data) => (
                    <SmallCardDisplay
                        title={Data.title}
                        desc={Data.desc}
                        tstamp={Data.tstamp} />
                ))}
            </div>
        </div>        
    </div>
  )
}

export default Events