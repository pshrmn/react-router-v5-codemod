const Cmp = () => (
  <Switch>
    <Redirect exact from='/here' to='/there' />
    <PrivateRoute path='/private' component={Private} />
  </Switch>
);
