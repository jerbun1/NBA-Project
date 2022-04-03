import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
const ShowStats = (props) => {

    const [loadingPlayer, setLoadingPlayer] = useState(true);
    const [nbaPlayer, setNbaPlayer] = useState([]);
    const [playerStats, setPlayerStats] = useState({});

    
    useEffect(() => {
        axios.get(`http://data.nba.net/data/10s/prod/v1/2021/players/${props.stats}_profile.json`)
        .then(res => {
            let stats = res.data.league.standard.stats.careerSummary;
            // console.log(res.data.league.standard.stats.careerSummary);
            setPlayerStats(stats);
            // console.log(playerStats)
            // console.log(stats)
        })
        .catch(err => console.log(err));   
        
    }, [])

    
    console.log(playerStats)

    return (
        <>
            <div className="player_Points" >
                
                <p>Points per Game </p><p>{playerStats.ppg}</p>
            </div>
            <div className="player_Assists" >
                
                <p>Assists per Game </p><p>{playerStats.apg}</p>
            </div>
            <div className="player_Rebound" >
                
                <p>Rebounds per Game </p><p>{playerStats.rpg}</p>
            </div>
            <div className="player_Steals" >
                
                <p>Steals per Game </p><p>{playerStats.spg}</p>
            </div>
            <div className="player_Blocks" >
                
                <p>Blocks per Game</p><p> {playerStats.bpg}</p>
            </div>
        </>
        
        
    )
}


export default ShowStats
