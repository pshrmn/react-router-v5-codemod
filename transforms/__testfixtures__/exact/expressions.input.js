const Cmp = () => (
  <Switch>
    <Route exact={fn()} path='/' component={Fn} />
    <Route exact={variable} path='/' component={Variable} />
    <Route exact={!variable} path='/' component={Unary} />
  </Switch>
);
