export type RouteType = {
  pathName: string;
  component: React.ReactNode;
  description: string;
};

export interface IRoutesProps {
  routesList: Array<RouteType>;
}
