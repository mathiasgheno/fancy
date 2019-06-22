"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_test_renderer_1 = require("react-test-renderer");
var index_1 = require("./index");
var React = require("react");
test('Link changes the class when hovered', function () {
    var component = react_test_renderer_1.create(React.createElement(index_1.Fancy, { texto: 'bla' }, "Facebook"));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map