import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import ShowStats from "../Stats/ShowStats";
const Player = (props) => {
  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [nbaPlayer, setNbaPlayer] = useState([]);
  const [playerStats, setPlayerStats] = useState({});

  useEffect(() => {
    axios
      .get("http://data.nba.net/data/10s/prod/v1/2021/players.json")
      .then((res) => {
        // console.log(res.data.league.standard);
        let player = res.data.league.standard;
        setNbaPlayer(player);
        setLoadingPlayer(false);
        // console.log(player);
      })
      .catch((err) => console.log(err));
  }, []);

  const showStats = () => {
    nbaPlayer.map((item) => {});
    // return (
    //     <div>
    //         <div className='player_Stats'>
    //             <h1>Points</h1>
    //         </div>
    //     </div>
    // )
  };

  const showPlayer = () => {
    if (loadingPlayer !== true) {
      // let size = 5;
      // let players = nbaPlayer.slice(nbaPlayer,size);

      return nbaPlayer.map((item, index) => {
        if (props.teamID.teamId == item.teamId) {
          //  console.log(item)
          return (
            <>
              <div key={index} className="player" id={item.teams.teamId}>
                <div className="player_Name">
                  <p>Name</p>

                    {/* Remember you want to change this page so that it only displays the players picture and
                    that picture is a link that lead to the selected players stats and infor 
                    might need to make a new page; */}
                  <Image
                    src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}
                    key={index}
                    width={100}
                    height={100}
                  />
                  <p>
                    {item.firstName} {item.lastName} born in {item.country} at{" "}
                    {item.dateOfBirthUTC}. Graduated from {item.collegeName}{" "}
                    school and was drafted by in {item.draft.seasonYear}
                  </p>
                </div>
                <div className="player_Description">
                  <div className="player_Jersey">
                    <p>Jersey # {item.jersey}</p>
                  </div>

                  <div className="player_dimen">
                    <p>Weight {item.weightPounds}</p>
                    <p>
                      Height {item.heightFeet} ' {item.heightInches}
                    </p>
                  </div>

                  <div className="player_Pos">
                    <p>
                      Position: {item.pos} / {item.teamSitesOnly.posFull}
                    </p>
                  </div>

                  <div className="player_draft">
                    <p className="draft_title">Draft Info</p>
                    <p className="pickRound">
                      Round number {item.draft.roundNum}
                    </p>
                  </div>

                  <div className="player_draftNUm">
                    <p className="pickNumber">
                      Pick number {item.draft.pickNum}
                    </p>
                  </div>

                  <div className="player_draftYear">
                    <p className="pickYear">
                      Year Drafted {item.draft.seasonYear}
                    </p>
                  </div>

                  <div className="player_Stats">
                    <ShowStats stats={item.personId} />
                  </div>
                </div>
              </div>
            </>
          );
        }
      });
    } else {
      return <div>Loading Player </div>;
    }
  };

  return <div className="player_info">{showPlayer()}</div>;
};

export default Player;
