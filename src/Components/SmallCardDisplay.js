import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import React from 'react'
import img from '../Assets/Group394.png'

const SmallCardDisplay = (props) => {
  return (
    <Card className='SmallCard' sx={{margin: '12px 0', display: 'flex', borderRadius:'8px'}}>
            <CardMedia sx={{width: '80px'}}
            component="img"
            image={img}/>
            <CardContent className='SCardContent' sx={{ padding:'4px 8px', paddingRight:'0', }}>
                <h3 className="SCardTitle">{props.title}</h3>
                <div className="SCardDesc">
                    <div className="SDescContent">{props.desc}</div>
                    <div className="SDescTimeStamp" style={{float:'right'}}>{props.tstamp}</div>
                </div>
            </CardContent>
            <CardContent/>
    </Card>
  )
}

export default SmallCardDisplay