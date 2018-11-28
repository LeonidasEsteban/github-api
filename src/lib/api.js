
class API {
  getRepositoriesByUsername(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        return data
      });
  }
  getTopicsByRepository(username, repo) {
    return fetch(`https://api.github.com/repos/${username}/${repo}/stargazers`)
      .then(function (response) {
        // console.log(response)
        return response.json()
      })
      .then(function (data) {
        return data
      });
  }
}

export default new API()


