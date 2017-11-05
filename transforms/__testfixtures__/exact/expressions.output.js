const Cmp = () => (
  <Switch>
    <Route parent={!fn()} path='/' component={Fn} />
    <Route parent={!variable} path='/' component={Variable} />
    <Route parent={!!variable} path='/' component={Unary} />
  </Switch>
);
