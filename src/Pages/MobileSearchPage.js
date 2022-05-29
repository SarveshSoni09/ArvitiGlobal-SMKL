import React from 'react'
import { useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const MobileSearchPage = () => {
  const [search, setSearch] = useState('')
  return (
    <div className='MobileSearchPage'>
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
    </div>
  )
}

export default MobileSearchPage