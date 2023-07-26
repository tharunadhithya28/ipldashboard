import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {recentMatch} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = recentMatch

    return (
      <li>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p> {competingTeam} </p>
        <p> {result} </p>
        <h1> {matchStatus} </h1>
      </li>
    )
  }
}
export default MatchCard
