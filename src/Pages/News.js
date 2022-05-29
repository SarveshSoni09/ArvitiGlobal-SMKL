import React from 'react'
import { HomePageCardData } from '../Components/HomePageData'
import CardDisplay from '../Components/CardDisplay'
import MenuIcon from '@mui/icons-material/Menu';

const News = () => {
  return (
    <div className='NewsPage'>
        <div className="NewsMain">
            <div className="MainHeader">
                <div className="MainTitle"><h3>News Feed</h3></div>
                <div className="Menu" 
                    onClick={()=> {document.getElementById('MSideNav').style.visibility='visible'}}><MenuIcon/>
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
    </div>
  )
}

export default News