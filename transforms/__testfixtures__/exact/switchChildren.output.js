const Cmp = () => (
  <Switch>
    <Redirect from='/here' to='/there' />
    <PrivateRoute parent path='/private' component={Private} />
  </Switch>
);
