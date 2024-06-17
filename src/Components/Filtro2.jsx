import { useState, useEffect } from 'react'

function Filtro2() {

  const [pkms, setPkms] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => setPkms(data))
  })

  const filteredPkm = pkms.length > 0
    ? pkms.filter(pkm => pkm.name.includes(search))
    : [];

  return (
    <>
      <h1>Filtros com Select</h1>

      <select name="search" id="">
        <option value="">Select com Map</option>
          
      </select>

      {
        
      }
    </>
  )
}

export default Filtro2