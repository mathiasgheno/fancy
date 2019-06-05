import { create } from 'react-test-renderer';
import {Fancy} from "./index";
import * as React from "react";

test('Link changes the class when hovered', () => {
    const component = create(
        <Fancy texto={'bla'}>Facebook</Fancy>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
