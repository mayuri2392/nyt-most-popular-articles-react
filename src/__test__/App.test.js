import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Components/App';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer'

describe("App component", () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
  });
  it('testing app ', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  
});
