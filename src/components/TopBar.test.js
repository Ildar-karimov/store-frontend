import React from 'react';
import renderer from 'react-test-renderer'
import TopBar from "./TopBar";

it('renders if auth false', function () {
    const tree = renderer.create(<TopBar />).toJSON()
    expect(tree).toMatchSnapshot()

}); 