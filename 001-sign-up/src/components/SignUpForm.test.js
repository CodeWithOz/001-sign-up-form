import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { SignUpForm } from './SignUpForm';
import NameField from './formFields/NameField';

describe('SignUpForm renders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SignUpForm />);
  });

  test('a form element', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  describe('a form element containing', () => {
    describe(`a 'name' field that`, () => {
      test('is a Field', () => {
        expect(wrapper.find('form').find({ name: 'name' }).length).toEqual(1);
        expect(
          wrapper
            .find('form')
            .find({ name: 'name' })
            .is(Field)
        ).toEqual(true);
      });

      test('uses a NameField component', () => {
        expect(wrapper.find({ name: 'name' }).prop('component')).toEqual(
          NameField
        );
      });
    });
  });
});
