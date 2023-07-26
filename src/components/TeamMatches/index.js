import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBanner: [],
    latestMatch: [],
    recentMatch: [],
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedTeamBanner = {
      teamBannerUrl: data.team_banner_url,
    }
    const updatedLatestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }
    const updatedRecentMatch = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      teamBanner: updatedTeamBanner,
      latestMatch: updatedLatestMatch,
      recentMatch: updatedRecentMatch,
    })
  }

  render() {
    const {teamBanner, latestMatch, recentMatch} = this.state
    const {teamBannerUrl} = teamBanner
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <div>
          <LatestMatch latestMatch={latestMatch} key={latestMatch.id} />
        </div>
        <div>
          {recentMatch.map(eachItem => (
            <MatchCard recentMatch={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default TeamMatches
