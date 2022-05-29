import React from 'react'
import SmallCardDisplay from '../Components/SmallCardDisplay'
import { SmallCardData } from '../Components/SBRCardData'
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { FamilyData} from '../Components/FamilyData'
import MenuIcon from '@mui/icons-material/Menu';
import FamMem from '../Assets/FamMem.png'
import demo from '../Assets/default.jpg'
import { useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const data = FamilyData[0]
const mem = FamilyData[0].Members[0]
const memList = FamilyData[0].Members

const MyFamily = () => {

  const [search, setSearch] = useState('')
  // Use this for fetching from Firebase Database and using it
  const [familyLists, setFamilyLists] = useState([])
  const [notificationLists, setNotificationLists] = useState([])

  return (
    <div className='FamilyPage'>
        <div className="FamilyMain">
            <div className="MainHeader">
                <div className="MainTitle"><h3>My Family</h3></div>
                <div className="Menu" onClick={()=> {document.getElementById('MSideNav').style.visibility='visible'}}><MenuIcon/></div>
            </div>
            <div className="FamilyGrid">
              <div className="FamilyGridItem">
                <div className="FamCardHeader">
                  <div className="FamCardTitle">Family No. 1</div>
                  <div><EditIcon/></div>
                </div> 
                <div className="FamCardContent">
                  <div className="FCCItem">
                    <span className="FCCItemKey">Last Name:</span>
                    <span className="FCCItemVal">{data.LastName}</span>
                  </div>
                  <div className="FCCItem">
                    <span className="FCCItemKey">Area:</span>
                    <span className="FCCItemVal">{data.Area}</span>
                  </div>
                  <div className="FCCItem">
                    <span className="FCCItemKey">Native Place:</span>
                    <span className="FCCItemVal">{data.NativePlace}</span>
                  </div>
                  <div className="FCCItem">
                    <span className="FCCItemKey">Devsthaan:</span>
                    <span className="FCCItemVal">{data.Devsthaan}</span>
                  </div>
                  <div className="FCCItem">
                    <span className="FCCItemKey">Kuldevi:</span>
                    <span className="FCCItemVal">{data.Kuldevi}</span>
                  </div>
                  <div className="FCCItem">
                    <span className="FCCItemKey">Residental Address:</span>
                    <span className="FCCItemVal">{data.ResidentAdd}</span>
                  </div>
                  <div className="FCCItem">
                    <span className="FCCItemKey">Business Address:</span>
                    <span className="FCCItemVal">{data.BusinessAdd}</span>
                  </div>
                </div>
              </div>
              <div className="FamilyGridItem">
                <div className="FamCardHeader">
                  <div className="FamCardTitle">Family Members</div>
                  <div><PersonAddIcon/></div>
                </div>
                <div className="FamCardContent FamMemberList">
                  {memList.map((mem)=>(
                    <div className="FMemberCard">
                      <img src={FamMem} alt="" />
                      <p style={{fontSize: '12px'}}>{mem.Name}</p>
                  </div>
                  ))}
                </div>
              </div>  
              <div className="FamilyGridItem">
                <div className="FamCardHeader">
                  <div className="FamCardTitle">{mem.Name}</div>
                  <div><EditIcon/></div>
                </div>
                <div className="FamMemContent">
                  <div className="MemImg">
                    <img src={demo} alt="" />
                  </div>
                  <div className="MemDetails">
                    <div className="FCCItem">
                      <span className="FCCItemKey">Age:</span>
                      <span className="FCCItemVal">{mem.Age}</span>
                    </div>
                    <div className="FCCItem">
                      <span className="FCCItemKey">Marital Status:</span>
                      <span className="FCCItemVal">{mem.MaritalStatus}</span>
                    </div>
                    <div className="FCCItem">
                      <span className="FCCItemKey">Mobile Number:</span>
                      <span className="FCCItemVal">{mem.MobileNum}</span>
                    </div>
                    <div className="FCCItem">
                      <span className="FCCItemKey">Place of Birth:</span>
                      <span className="FCCItemVal">{mem.POB}</span>
                    </div>
                    <div className="FCCItem">
                      <span className="FCCItemKey">Education:</span>
                      <span className="FCCItemVal">{mem.Education}</span>
                    </div>
                    <div className="FCCItem">
                      <span className="FCCItemKey">Occupation:</span>
                      <span className="FCCItemVal">{mem.Occupation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
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
        </div>        
    </div>
  )
}

export default MyFamily