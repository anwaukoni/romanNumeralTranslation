import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import RenderTranslator from '../RenderTranslator';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Given the RenderTranslator component', () => {
  describe('when rendering a translator', () => {
    it('should render in the correct format', () => {
      const wrapper = shallow(
        <RenderTranslator
          name='translator'
          type='text'
          placeholder='translator'
          buttonText='Translate To Number'
          onTranslate={() => {}}
          label='Roman Numerals To Number'
        />
      );
        
      expect(wrapper).toMatchSnapshot();
    });
  });
});
