import img from '../Assets/default.jpg'

import React from 'react'

const CardDisplay = (props) => {
  return (
    <div className='Card'>
            <div className="CardImg">
              <img src={img} alt="" />
            </div>
            <div className='CardContent'>
                <h3 className="CardTitle">{props.title}</h3>
                <div className="CardDesc">
                    <span className="CardSubject">{props.subject}</span>
                    <div className="SubjectDesc">
                        <span className="SubjectDescElement">Age: {props.age} years</span>
                        <span className="SubjectDescElement">Area: {props.area}</span>
                    </div>
                    <div className="DescContent">{props.desc}</div>
                    <div className="ViewMore"><a href="#">{'View More >>>'}</a></div>
                </div>
            </div>
    </div>
  )
}

export default CardDisplay