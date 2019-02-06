import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Stage />', () => {
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });
})