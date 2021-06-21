import React from 'react';
import Link from '../components/Link';
import renderer from 'react-test-renderer'



    test('Link changes the clas when hovered',()=>{
        const component = renderer.create( <Link page="http://www.google.com">Google</Link>,)
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onMouseEnter();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onMouseLeave();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
