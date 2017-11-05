const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('<Route exact> -> <Route parent>', () => {
  // <Route exact /> -> <Route />
  defineTest(
    __dirname,
    'exact',
    null,
    'exact/exactBooleanAttr'
  );
  // <Route /> -> <Route parent />
  defineTest(
    __dirname,
    'exact',
    null,
    'exact/noExactBooleanAttr'
  );
  // <Route exact={false} /> -> <Route parent={true} />
  defineTest(
    __dirname,
    'exact',
    null,
    'exact/literalFalse'
  );
  // <Route exact={true} /> -> <Route parent={false} />
  defineTest(
    __dirname,
    'exact',
    null,
    'exact/literalTrue'
  );
  // <Route exact={thing} /> -> <Route parent={!thing} />
  defineTest(
    __dirname,
    'exact',
    null,
    'exact/expressions'
  );
});
