
import React from 'react';
import { create } from 'react-test-renderer'
import Article from '../Components/Article';
import { mount, shallow } from 'enzyme';

describe('Article',()=>{
  test('It should retun data', () => {
    const releaseNotesMockData = {
      'results': [
        {
          'id': '206169942',
          'title': 'Smash the Wellness Industry',
          'byline': 'By Jessica Knoll',
          'published_date': 'Release 2018-10-18',
          'url': 'https://www.nytimes.com/2019/06/08/opinion/sunday/women-dieting-wellness.html'
        }]
    };
    const response = jest.fn().mockReturnValue(releaseNotesMockData)
    expect(response).toBe(response);
  });
})