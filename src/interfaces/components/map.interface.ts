export interface SelectedProps {
  lat: number;
  lng: number;
}

export interface locationProps {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: SelectedProps;
}
