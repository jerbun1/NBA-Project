import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Player from '../component/Player/Player';


const Players = (props) => {

    const [nbaTeam, setNbaTeam] = useState([]);


    useEffect(() => {
        axios.get(`http://data.nba.net/data/10s/prod/v1/2021/players/203954_profile.json`)
        .then(res => {
            let stats = res.data.league.standard.stats.careerSummary;
            // console.log(res.data.league.standard.stats.careerSummary);
            setPlayerStats(stats);
            console.log(playerStats.ppg)
            console.log(stats)
            console.log(res)
        })
        .catch(err => console.log(err));

        //This was gonna be used to somehow get the roster of a team but found an easier way.
        axios.get(`http://data.nba.net/data/10s/prod/v1/2021/teams.json`)
        .then((res) => {
            // console.log(res.data.league.standard);
            let team = res.data.league.standard;
            // console.log(team);
            // console.log(team.city);
            setNbaTeam(team);
        })
        .catch(err => console.log(err));
    }, [])

    console.log
    
    return (
        nbaTeam.map((item, index) => {
            <Link href='/' className='return-Link'>
                <button>Back</button>
            </Link>
            if(item.fullName == "Team LeBron" || item.fullName == "Team Team Durant"|| item.fullName == "Utah White" || item.fullName == "Utah Blue" ){
                return ""
            }
            return(
                <div className='nbaTeam' id={index}>
                    <h2>{item.fullName}</h2>
                    <Player key={index} teamID={item} team={nbaTeam} />
                </div>
            )
            
        })
      
    )
}


export default Players
