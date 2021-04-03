const enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
const React = require("react");

enzyme.configure({ adapter: new Adapter() });
React.useLayoutEffect = React.useEffect;