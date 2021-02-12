import React, { useState } from 'react'

export default function FunctionalSection({ onchange }) {
 const [searchValue, setSearchValue] = useState('')
 return (
  <div>
   <input
    placeholder="Search Here"
    type="text"
    onChange={(e) => onchange(e)}
   ></input>
  </div>
 )
}
