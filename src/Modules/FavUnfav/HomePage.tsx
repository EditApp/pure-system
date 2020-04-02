import React, { useContext, useEffect } from "react";

import { Store } from "./Context/Store";
import { IEpisodeProps } from "../../Interfaces/interfaces";
import { fetchDataAction, toggleFavouriteAction } from "./Context/Actions";

const EpisodeList = React.lazy<any>(() =>
  import("../../Components/EpisodesList")
);

export default function HomePage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavouriteAction,
    favourites: state.favourites
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ul className="episode-layout">
        <EpisodeList {...props} />
      </ul>
    </React.Suspense>
  );
}
