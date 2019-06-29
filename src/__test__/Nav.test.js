import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav';

describe('Nav Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })
  it('should be a there', () => {
    expect(wrapper).toBeDefined()
  });
  it("renders", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.exists()).toBe(true);
    });
});
