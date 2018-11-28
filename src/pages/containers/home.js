import React, { Component, Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import API from '../../lib/api';
import Form from '../components/form';
import RepoList from '../components/repo-list';

class Home extends Component {
  state = {
    repos: [],
    stars: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(this.form)
    this.username = form.get('username')
    console.log(this.username)
    API.getRepositoriesByUsername(this.username)
    .then((repos) => {
      this.setState({
        repos
      })
    })

  }
  handleRepoClick = (repoName) => {
    API.getTopicsByRepository(this.username, repoName)
    .then((stars) => {
      if (stars.length === 0) {
        alert('este repo no tiene estrellitas :(')
      }
      const newRepos = this.state.repos.map((repo)=> {
        if (repo.name === repoName) {
          repo.stars = stars
        }
        return repo
      })
      console.log(stars)
      this.setState({
        repo: newRepos
      })
    })

  }
  setRef = (element) => {
    this.form = element
  }
  render() {
		return(
      <Fragment>
        <Header/>
        <Form handleSubmit={this.handleSubmit} setRef={this.setRef} />
        <RepoList repos={this.state.repos} handleRepoClick={this.handleRepoClick} />
        <Footer/>
      </Fragment>
    )
  }
}

export default Home;
