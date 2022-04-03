import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NbaTeam from '../component/Team/NbaTeam';
import Link from 'next/link';

const Team = (props) => {
    const [nbaTeam, setNbaTeam] = useState({});

    useEffect(() => {
            axios.get(`http://data.nba.net/data/10s/prod/v1/2021/teams.json`)
            .then((res) => {
                // console.log(res.data.league.standard);
                let team = res.data.league.standard;
                // console.log(team);
                // console.log(team.city);
                setNbaTeam(team);
            })

    }, [])
   
    const showStats = () =>{
        // console.log(nbaTeam);
        // return nbaTeam.map((item, index) => {
        //     return item.teamId;
            
        // })
        return nbaTeam
    }

    
    // const indiTeamId = () =>{
    //     return props.teamID.map((item, index) =>{
    //         console.log(item);
    //     })
    // }

    console.log(nbaTeam)
    return (
        <div className='nbaTeams'>
            <Link href='/'>
                <button>Back</button>
            </Link>
            <NbaTeam teamID={showStats()}/>

        
        </div>
        
    )
}


export default Team
