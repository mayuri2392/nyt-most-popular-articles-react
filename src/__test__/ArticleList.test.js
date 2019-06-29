import React from "react";
import ArticleList from "../components/ArticlesList";
import { shallow } from 'enzyme';

describe('<ArticleList />', () => {
  it("doesn't break with an empty array", () => {
    const wrapper = shallow(<ArticleList articles={[]} />);
    expect(wrapper.find("li")).toHaveLength(0);
  });
});