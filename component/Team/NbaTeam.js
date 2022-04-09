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
        { field: "name"},
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
        // cellStyle: params => {
        //     console.log(params)
        //     return {background: 'url("https://wallpapercave.com/wp/wp8928681.jpg")'}
        // }
    }
    
    const getRowStyle = params => {
        console.log(params)
        if(params.node.rowIndex == 0) {
            return {background: 'url("https://images5.alphacoders.com/920/920849.jpg")',
                    backgroundSize: 'contain',
                color: 'white' };
        } 
        else if(params.node.rowIndex == 1) {
            return {background: 'url("https://wallpapercave.com/wp/wp9116387.png")',
            backgroundSize: 'contain',
            color: 'white' };
        } 
        else if(params.node.rowIndex == 2) {
            return {background: 'url("https://wallpapercave.com/wp/wp1962510.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 3) {
            return {background: 'url("https://wallpapercave.com/wp/wp1930957.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 4) {
            return {background: 'url("https://wallpapercave.com/wp/3GqAsTf.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 5) {
            return {background: 'url("https://wallpapercave.com/wp/wp1918419.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 6) {
            return {background: 'url("https://wallpapercave.com/wp/wp2012180.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 7) {
            return {background: 'url("https://wallpapercave.com/wp/wp1962571.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 8) {
            return {background: 'url("https://wallpapercave.com/dwp1x/wp1844065.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 9) {
            return {background: 'url("https://wallpapercave.com/wp/wp5382045.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 10) {
            // https://wallpapercave.com/wp/wp8731834.jpg
            return {background: 'url("https://wallpapercave.com/wp/wp8731850.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 11) {
            return {background: 'url("https://wallpapercave.com/wp/CklhPHc.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 12) {
            return {background: 'url("https://wallpapercave.com/wp/wp9468836.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 13) {
            return {background: 'url("https://wallpapercave.com/wp/wp3905076.jpg")',
            backgroundSize: 'contain',
            color: 'white' };
        }
        else if(params.node.rowIndex == 14) {
            return {background: 'url("https://wallpapercave.com/wp/wp1909079.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 15) {
            return {background: 'url("https://wallpapercave.com/wp/wp1853854.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 16) {
            return {background: 'url("https://wallpapercave.com/wp/wdW3Agk.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 17) {
            return {background: 'url("https://wallpapercave.com/wp/wp1878775.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 18) {
            return {background: 'url("https://wallpapercave.com/wp/wp4264319.png")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 19) {
            return {background: 'url("https://wallpapercave.com/wp/wp2004645.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 20) {
            return {background: 'url("https://wallpapercave.com/wp/wp2015321.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 21) {
            return {background: 'url("https://wallpapercave.com/wp/wp1928709.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 22) {
            return {background: 'url("https://wallpapercave.com/wp/wp10063844.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 23) {
            return {background: 'url("https://wallpapercave.com/wp/wp4018454.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 24) {
            return {background: 'url("https://wallpapercave.com/dwp1x/wp1840219.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 25) {
            return {background: 'url("https://wallpapercave.com/wp/wp1919103.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 26) {
            return {background: 'url("https://wallpapercave.com/wp/wp1884481.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 27) {
            return {background: 'url("https://wallpapercave.com/wp/wp1982967.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 28) {
            return {background: 'url("https://wallpapercave.com/wp/wp1931518.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        else if(params.node.rowIndex == 29) {
            return {background: 'url("https://wallpapercave.com/wp/wp1955396.jpg")',
            backgroundSize: 'contain',
            color: 'white',
            fontSize: 'x-larger' };
        }
        
    };

    const teams = teamStats.slice(0, 30)
    const rowHeight = 80;

    const showWestConf = () => {

        if(loadingTeam !== true){
            return(
                <div className="ag-theme-alpine" style={{ height: 700, width: 1000, margin: 'auto' }} >
                {/* {teamTable(item.teamId, item.name, item.nickname, item.abbreviation)} */}
                    <AgGridReact  getRowStyle={getRowStyle} rowHeight={rowHeight} rowData={teams} columnDefs={columnDefs} >

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
        