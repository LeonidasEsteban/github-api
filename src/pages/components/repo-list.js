import React from 'react';
import Repo from '../components/repo'


function RepoList({ repos, handleRepoClick }) {
  return (
    <div>
      {repos.map((repo, index) => (
        <Repo key={index} {...repo} handleRepoClick={handleRepoClick} />
      ))}
    </div>
  )
}


export default RepoList
