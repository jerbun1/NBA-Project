import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// const $ = require("jquery");
// $.DataTable = require('datatables.net');

const NbaTeam = (props) => {
    const [teamStats, setTeamStats] = useState([])
    const [loadingTeam, setLoadingTeam] = useState(true);
    const [loadingPlayer, setLoadingPlayer] = useState(true);
    const [showRoster, setShowRoster] = useState(false);

    //Recipe Api link https://api.spoonacular.com/recipes/random/?apiKey=874d780edaf849ada97b5ee325300b4a
    useEffect(() => {
        let dataTable;
        axios.get(`http://data.nba.net/data/10s/prod/v1/2021/team_stats_rankings.json`)
            .then((res) => {
                // console.log(res.data.league.standard);
                let team = res.data.league.standard.regularSeason.teams;
                console.log(team);
                // console.log(team.city);
                setTeamStats(team);
                
                setLoadingTeam(false)
            })
    }, [])

    

    const TeamRoster = () =>{
        
            return (
            <>
                {showWestConf()}
            </>
            )

    }
  
    const HideTeamRoster = () => {
        console.log(showRoster);

    }
   
    // const teamTable = (id, name, nicName, abb) =>{
        
    //     if(id ){
    //         return(
    //         <table>
    //             <tbody>
    //             <tr>
    //                 <td>Team Name</td>
    //                 <td>Team Abbreviation</td>
    //                 <td>Team Conference</td>
    //                 <td>Team Division</td>
    //             </tr>
    //             <tr>
    //                 <td>{name} {nicName}</td>
    //                 <td>{abb}</td>
    //                 <td>{props.teamID.confName}</td>
    //                 <td>{props.teamID.divName}</td>
    //             </tr>
    //             </tbody>
                
    //         </table>
    //          )
    //     }
       
    // }
    const [columnDefs] = useState([
        { field: "name" },
        { field: "nickname" },
        { field: "abbreviation" },
        { field: "ppg.avg" },
        { field: "apg.avg" },
        { field: "spg.avg" },
        { field: "bpg.avg" },
        { field: "eff.avg" },
        
    ]); 

    const rowStyle = {
        background: 'linear-gradient(117deg, rgba(52,72,134,1) 0%, rgba(228,228,237,1) 51%, rgba(215,89,94,1) 100%)',
        color: '#04911c'
    }
    
    const getRowStyle = params => {
        console.log(params)
        if (params.node.rowIndex == 0) {
            return {background: 'url("https://wallpapercave.com/wp/wp8928681.jpg")',
            color: 'wheat',
            backgroundSize: 'cover' };
        } 
        else if(params.node.rowIndex == 1) {
            return {background: 'url("https://wallpapercave.com/wp/wp9116387.png")' };
        } 
        else if(params.node.rowIndex == 2) {
            return {background: 'url("https://wallpapercave.com/wp/wp1962510.jpg")' };
        }
        else if(params.node.rowIndex == 3) {
            return {background: 'url("https://wallpapercave.com/wp/wp1930957.jpg")' };
        }
        else if(params.node.rowIndex == 4) {
            return {background: 'url("https://wallpapercave.com/dwp1x/wp9706726.png")' };
        }
        else if(params.node.rowIndex == 5) {
            return {background: 'url("https://wallpapercave.com/wp/wp1918419.jpg")' };
        }
        else if(params.node.rowIndex == 6) {
            return {background: 'url("https://wallpapercave.com/wp/wp8928681.jpg")' };
        }
        
    };

    const teams = teamStats.slice(0, 30)
    const rowHeight = 80;

    const showWestConf = () => {

        if(loadingTeam !== true){
            return(
                <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }} >
                {/* {teamTable(item.teamId, item.name, item.nickname, item.abbreviation)} */}
                    <AgGridReact getRowStyle={getRowStyle} rowHeight={rowHeight} rowData={teams} columnDefs={columnDefs} >

                    </AgGridReact>
            </div> 
            )
            8
            
            // return teamStats.map((item, index) => {
            //     if(item.nickname === "Team Durant" || item.nickname === "Team LeBron" || 
            //         item.nickname === "Team Walton" || item.nickname === "Team Barry" || 
            //         item.nickname === "Team Payton" || item.nickname === "Team Isiah"
            //         || item.nickname === "Team Worthy"){
            //             return "";
            //         }
                    
            //         return( 
            //             <div className="ag-theme-alpine" style={{ height: 400, width: 600 }} id={item.nickname} key={index}>
            //                 {/* {teamTable(item.teamId, item.name, item.nickname, item.abbreviation)} */}
            //                     <AgGridReact rowData={teamStats} columnDefs={columnDefs}>

            //                     </AgGridReact>
            //                 {/* <h1>{item.name}</h1>
            //                 <h1>{item.nickname}</h1>
            //                 <div className='teamInfo'>
            //                     <div className='teamDiv'> 
            //                         <h2>Abbreviation</h2>
            //                         <p>{item.abbreviation}</p>
            //                     </div>
            //                     <div className='teamNick'>
            //                         <h2>Nickname</h2>
            //                         <p>{item.nickname}</p>
            //                     </div>
            //                 </div>
            //                 <h2>Stats</h2>
            //                 <div className="teamRoster">
            //                     <div className='team-assist'>
            //                         <p>Assists Per Game</p>
            //                         <p>Points Per Game</p>
            //                         <p>Steals Per Game</p>
            //                         <p>Blocks Per Game</p>
            //                     </div>
            //                     <div className='team-numbers'>
            //                         <p>{item.apg.avg}</p>
            //                         <p>{item.ppg.avg}</p>
            //                         <p>{item.spg.rank}</p>
            //                         <p>{item.bpg.rank}</p>
            //                     </div>
            //                 </div> */}
            //             </div> 
                       
                        
            //         )
                   
            // })
            
        } else {
            return <div>Loading Team </div>;
        }

    }
  



    return (
    
        <div className="team_info">
            {TeamRoster()}
        {/* {showWestConf()}    */}
        </div>
        
      
    )
}

export default NbaTeam
        