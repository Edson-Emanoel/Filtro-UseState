import { useState, useEffect } from 'react'

function Filtro1() {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')
  
  console.log("Rend");
  
  useEffect(() => {
    fetch("https://api.github.com/users/MuelEdson/repos")
    .then(response => response.json())
    .then(data => setRepos(data))
  }, [])
  
  const filteredRepos = repos.length > 0 
  ? repos.filter(repo => repo.name.includes(search))
  : [];
  
  // const [filteredRepos, setFilteredRepos] = useState([])
  //   useEffect(() => {
  //     if (search.length) {
  //         setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  //     }
  //   }, [search])

  return (
    <div>
      <input 
        name='search'
        type="text"
        placeholder='Buscar...'
        onChange={e => setSearch(e.target.value)}
        value={search}
        />

        { search.length > 0 ? (
            <ul>
                {filteredRepos.map((repo) => {
                    return(
                        <li key={repo.name}>
                            {repo.name}
                        </li>
                    )
                })}
            </ul>
            ) : (
            <ul>
                {repos.map(repo => {
                    return(
                        <li key={repo.name}>
                            {repo.name}
                        </li>
                    )
                })} 
            </ul>
        )}

    </div>
  )
}

export default Filtro1