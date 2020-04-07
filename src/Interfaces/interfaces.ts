export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}
export interface IAction {
  type: string;
  payload: any;
}
export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: any };
  toggleFavouriteAction: (
    state: IState,
    dispatch: any,
    episode: IEpisode
  ) => IAction;
  favourites: Array<IEpisode>;
}

export interface IInput {
  id?: string;
  value?: string;
  label: string;
  type: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ISelect {
  id?: string;
  value?: string;
  label: string;
  options: any;
  selectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
