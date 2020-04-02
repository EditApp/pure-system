import React from "react";

import { IEpisode } from "../Interfaces/interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavouriteAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <li key={episode.id} className="episode-box">
        <img
          //src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <p>Season : {episode.season}</p>
        <p>Number : {episode.number}</p>
        <p>Duration : {episode.airtime}</p>
        <button
          type="button"
          onClick={() => toggleFavouriteAction(state, dispatch, episode)}
        >
          {favourites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Unfavorite"
            : "Favourite"}
        </button>
      </li>
    );
  });
}
