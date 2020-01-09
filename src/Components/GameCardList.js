import React from "react";
import GameCard from "./GameCard";

export default function GameCardList({ games }) {
  return (
    <div className="card-list">
      {games
        ? games.map(game => {
            return <GameCard game={game} />;
          })
        : null}
    </div>
  );
}
