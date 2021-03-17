import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

export const Repos = () => {
    const githubContext = useContext(GithubContext)
    const {repos} = githubContext
    return repos.map(repo=> <RepoItem repo={repo} key={repo.id}/>)
}

Repos.propType={
    repos: PropTypes.array.isRequired,
}

export default Repos;