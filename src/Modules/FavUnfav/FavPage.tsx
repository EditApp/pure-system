import React, { useContext } from "react";

import { Store } from "./Context/Store";
import { toggleFavouriteAction } from "./Context/Actions";
import { IEpisodeProps } from "../../Interfaces/interfaces";

const EpisodeList = React.lazy<any>(() =>
  import("../../Components/EpisodesList")
);

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavouriteAction,
    favourites: state.favourites
  };
  console.log(props);
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ul className="episode-layout">
          <EpisodeList {...props} />
        </ul>
      </React.Suspense>
    </>
  );
}
