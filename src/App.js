import React, { useState } from 'react'

export default function App() {
  const [repositories, setRepositories] = useState([
    { name: 'repoTest 1', id: 1 },
    { name: 'repoTest 2', id: 2 },
    { name: 'repoTest 3', id: 3 },
    { name: 'repoTest 4', id: 4 },
    { name: 'repoTest 5', id: 5 }
  ])

  function handleAddRepositorie() {
    setRepositories([...repositories, { id: Math.random(), name: 'novo.repo' }])
  }

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <button onClick={handleAddRepositorie}>add repositorie</button>
    </>
  )
}
