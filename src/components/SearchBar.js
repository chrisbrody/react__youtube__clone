import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  // create searchTerm variable
  const [searchTerm, setSearchTerm] = useState('')

  // set up useNavigate
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // send data to search page using useNavigate
    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
    }

    // reset search term
    setSearchTerm("")
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input 
        className="search-bar" 
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p:'10px', color:'red'}}>
        <Search />
      </IconButton>
      <div>{searchTerm}</div>
    </Paper>
  )
}

export default SearchBar