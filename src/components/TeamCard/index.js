import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    console.log('here')
    const {teamCard} = this.props
    const {name, id, teamImageUrl} = teamCard
    return (
      <Link to={`/ipl/${id}`}>
        <div>
          <li className="teamCards">
            <img src={teamImageUrl} className="teamlogo" alt={name} />
            <p> {name} </p>
          </li>
        </div>
      </Link>
    )
  }
}
export default TeamCard
