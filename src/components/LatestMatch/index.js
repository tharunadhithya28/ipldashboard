const LatestMatch = props => {
  const {latestMatch} = props
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
  } = latestMatch

  return (
    <div>
      <div>
        <p> {competingTeam} </p>
        <p> {date} </p>
        <p> {venue} </p>
        <p> {result} </p>
      </div>
      <div>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      </div>
      <div>
        <h1> First Innings </h1>
        <p> {firstInnings} </p>
        <h1> Second Innings </h1>
        <p> {secondInnings} </p>
        <h1> Man of the Match </h1>
        <p> {manOfTheMatch} </p>
        <p> Umpires </p>
        <p> {umpires} </p>
      </div>
    </div>
  )
}
export default LatestMatch
