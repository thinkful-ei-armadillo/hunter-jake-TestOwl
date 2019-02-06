import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<UserList />', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<UserList onStage="[]" inSession="[]"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
})