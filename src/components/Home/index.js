import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamCard: [],
  }

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCard: updatedData})
  }

  render() {
    const {teamCard} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1> IPL Dashboard </h1>
        </div>
        <ul>
          {teamCard.map(eachItem => (
            <TeamCard teamCard={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
