import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { create } from 'react-test-renderer'

describe("App component", () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

  it('testing app ', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
