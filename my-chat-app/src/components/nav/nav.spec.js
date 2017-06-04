import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import { AppComponent } from './Nav';


Describe.only('register user to application', () => {  
    It('should show register form', () => {  
        const element = shallow();
        Expect(element.find('a').length).toBe(5);
    });
});