import React from 'react'
import CardDisplay from '../Components/CardDisplay'
import SmallCardDisplay from '../Components/SmallCardDisplay'
import { HomePageCardData } from '../Components/HomePageData'
import { SmallCardData } from '../Components/SBRCardData'
import SidebarFooter from '../Components/SidebarFooter'
import MenuIcon from '@mui/icons-material/Menu';
import contact from '../Assets/contact.svg'
import aarthik from '../Assets/aarthik.svg'
import medical from '../Assets/medical.svg'
import edu from '../Assets/education.svg'
import member from '../Assets/membership.svg'
import { useState, useEffect } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Home = () => {

    const [search, setSearch] = useState('')
    // Use this for fetching from Firebase Database and using it
    const [homeFeedLists, setHomeFeedLists] = useState([])
    const [notificationLists, setNotificationLists] = useState([])

  return (
    <div className='HomePage'>
        <div className="HomeMain">
            <div className="MainHeader">
                <div className="MainTitle"><h3 id='NewsF'>News Feed</h3><h3 id="Home">Home</h3></div>
                <div className="Menu" 
                    onClick={()=> {document.getElementById('MSideNav').style.visibility='visible'}}><MenuIcon/>
                </div>
            </div>
            <div className="MobileHome">
                <div className="LatestUpdates">
                    <h3>Latest Updates</h3>
                    <p>No New Updates</p>
                </div>
                <div className="MobileHomeGrid">
                    <div className="HomeGridItem">
                        <h4>Contact Us</h4>
                        <img src={contact} alt="" />
                    </div>
                    <div className="HomeGridItem">
                        <h4>Events</h4>
                        <img src={contact} alt="" />
                    </div>
                </div>
                <div className="MobileForms">
                    <div className="FormLink">
                        <img src={aarthik} alt="" />
                        <p>Aarthik</p>
                    </div>
                    <div className="FormLink">
                        <img src={medical} alt="" />
                        <p>Medical</p>
                    </div>
                    <div className="FormLink">
                        <img src={edu} alt="" />
                        <p>Education</p>
                    </div>
                    <div className="FormLink">
                        <img src={member} alt="" />
                        <p>Member</p>
                    </div>
                    <div className="FormLink">
                        <img src={member} alt="" />
                        <p>Member</p>
                    </div>
                </div>
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
        <div className="HomeSBR">
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
            <div className="HomeSBRContent">
                <h3>Notifications</h3>
                {SmallCardData.map((Data) => (
                    <SmallCardDisplay
                        title={Data.title}
                        desc={Data.desc}
                        tstamp={Data.tstamp} />
                ))}
            </div>
            <div className="SBF">
                <SidebarFooter/>
            </div>
        </div>        
    </div>
  )
}

export default Home