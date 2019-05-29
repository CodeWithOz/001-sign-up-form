import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { SignUpForm } from './SignUpForm';
import NameField from './formFields/NameField';
import EmailField from './formFields/EmailField';
import PasswordField from './formFields/PasswordField';
import Button from './Button';

const dummySubmitHandler = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SignUpForm handleSubmit={dummySubmitHandler} />);
});

describe('SignUpForm renders', () => {
  test('a form element when submitted state is false', () => {
    wrapper.setState({ submitted: false });
    expect(wrapper.find('form').length).toEqual(1);
  });

  test('nothing when submitted state is true', () => {
    wrapper.setState({ submitted: true });
    expect(wrapper.exists('form')).toEqual(false);
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

    describe(`an 'email' field that`, () => {
      test('is a Field', () => {
        expect(wrapper.find('form').find({ name: 'email' }).length).toEqual(1);
        expect(
          wrapper
            .find('form')
            .find({ name: 'email' })
            .is(Field)
        ).toEqual(true);
      });

      test('uses an EmailField component', () => {
        expect(wrapper.find({ name: 'email' }).prop('component')).toEqual(
          EmailField
        );
      });
    });

    describe(`a 'password' field that`, () => {
      test('is a Field', () => {
        expect(wrapper.find('form').find({ name: 'password' }).length).toEqual(
          1
        );
        expect(
          wrapper
            .find('form')
            .find({ name: 'password' })
            .is(Field)
        ).toEqual(true);
      });

      test('uses an PasswordField component', () => {
        expect(wrapper.find({ name: 'password' }).prop('component')).toEqual(
          PasswordField
        );
      });
    });

    test('a Button', () => {
      expect(wrapper.find(Button).length).toEqual(1);
    });
  });
});

describe('SignUpForm correctly passes', () => {
  test('text prop to Button', () => {
    const btnText = 'log in';
    expect(wrapper.find(Button).prop('text')).toEqual(btnText);
  });

  test('icon prop to Button', () => {
    const btnIcon = '\uf054'; // font awesome's chevron-right
    expect(wrapper.find(Button).prop('icon')).toEqual(btnIcon);
  });

  test(`its handleSubmit method to its 'form' element`, () => {
    wrapper.find('form').simulate('submit');

    // only check if the submit handler was supplied as an
    // argument to the handleSubmit prop
    // because that's how redux-form uses it
    expect(dummySubmitHandler).toHaveBeenCalledWith(
      wrapper.instance().handleSubmit
    );
  });
});

describe('SignUpForm exposes', () => {
  describe('a handleSubmit method that', () => {
    test('is a function', () => {
      expect(SignUpForm.prototype.handleSubmit).toBeDefined();
      expect(typeof SignUpForm.prototype.handleSubmit).toEqual('function');
    });

    test(`toggles the 'submitted' state`, () => {
      const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
      expect(handleSubmitSpy).not.toHaveBeenCalled();

      let submittedState = wrapper.state('submitted');
      handleSubmitSpy();
      expect(wrapper.state('submitted')).toEqual(!submittedState);

      // ensure it toggles in the opposite direction
      submittedState = wrapper.state('submitted'); // updated state
      handleSubmitSpy();
      expect(wrapper.state('submitted')).toEqual(!submittedState);

      handleSubmitSpy.mockRestore();
    });
  });
});
