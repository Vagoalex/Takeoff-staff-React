interface IAnimatedRoutes {
  path: string;
  name: string;
  Component: React.FC<{}> | React.LazyExoticComponent<React.FC<{}>>;
}

export default IAnimatedRoutes;
