/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import renderer from 'react-test-renderer';

import TextField from '../TextField';

beforeEach(() => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
});

describe('TextField', () => {
    const [value, setValue] = React.useState('');
    const component = renderer.create(<TextField name='test' value={value} sendValueChange={(_, v) => setValue(v)} />);

    it('should render without content', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should write content to the component', () => {
        const tree = component.toTree();
        renderer.act(() => {
            tree?.props.sendValueChange('', 'aaaaa');
        });
        expect(tree?.props.value).toEqual('aaaaa');
        expect(component.toJSON()).toMatchSnapshot();
    });
});
