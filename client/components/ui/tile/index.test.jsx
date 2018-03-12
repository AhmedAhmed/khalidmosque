import * as React from 'react';
import Tile from '../../../../components/ui/tile/index.tsx';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Tile title="Testing" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});