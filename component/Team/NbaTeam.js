import axios from 'axios';
import { React, useState, useEffect } from 'react';
const NbaTeam = (props) => {
    const [teamStats, setTeamStats] = useState([])
    const [loadingTeam, setLoadingTeam] = useState(true);
    const [loadingPlayer, setLoadingPlayer] = useState(true);
    const [showRoster, setShowRoster] = useState(false);

    //Recipe Api link https://api.spoonacular.com/recipes/random/?apiKey=874d780edaf849ada97b5ee325300b4a
    useEffect(() => {
        axios.get(`http://data.nba.net/data/10s/prod/v1/2021/team_stats_rankings.json`)
            .then((res) => {
                // console.log(res.data.league.standard);
                let team = res.data.league.standard.regularSeason.teams;
                // console.log(team);
                // console.log(team.city);
                setTeamStats(team);
                // setNbaTeam(team);
                setLoadingTeam(false)
            })
    }, [])

    

    const TeamRoster = () =>{
        // console.log("button Clicked")
        // setShowRoster(true);
        console.log(showRoster);
        return (
        <div>
            <h1>Show Team Stats</h1>
            {showWestConf()}
        </div>
     
        
        
        )

    }
  
    const HideTeamRoster = () => {
        console.log(showRoster);

    }
    // console.log(props)
    const showWestConf = () => {
        
        if(loadingTeam !== true){
            return teamStats.map((item, index) => {
                
                let id = props.teamID.map((item) => { return item.teamId});

                    if(item.nickname === "Team Durant" || item.nickname === "Team LeBron" || 
                        item.nickname === "Team Walton" || item.nickname === "Team Barry" || 
                         item.nickname === "Team Payton" || item.nickname === "Team Isiah"
                         || item.nickname === "Team Worthy"){
                             return "";
                         }
                   
                        return( 
                            <div className='nbaTeam' id={item.nickname} key={index}>
                                <h1>{item.name}</h1>
                                <h1>{item.nickname}</h1>
                                <div className='teamInfo'>
                                    <div className='teamDiv'> 
                                        <h2>Abbreviation</h2>
                                        <p>{item.abbreviation}</p>
                                    </div>
                                    <div className='teamNick'>
                                        <h2>Nickname</h2>
                                        <p>{item.nickname}</p>
                                    </div>
                                </div>
                                <h2>Stats</h2>
                                <div className="teamRoster">
                                    <div className='team-assist'>
                                        <p>Assists Per Game</p>
                                        <p>Points Per Game</p>
                                        <p>Steals Per Game</p>
                                        <p>Blocks Per Game</p>
                                    </div>
                                    <div className='team-numbers'>
                                        <p>{item.apg.avg}</p>
                                        <p>{item.ppg.avg}</p>
                                        <p>{item.spg.rank}</p>
                                        <p>{item.bpg.rank}</p>
                                    </div>
                                   

                                </div>


                            </div>
                        )
                   
            })
            
        } else {
            return <div>Loading Team </div>;
        }

    }
  
  


    return (
        <div>
             <div className="team_info">
                 {TeamRoster()}
                {/* {showWestConf()}    */}
             </div>
        
        </div>
    )
}

export default NbaTeam
        