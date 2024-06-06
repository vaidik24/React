import PropTypes from "prop-types";
function Container({ childern }) {
  return <div className=" w-full max-w-7xl px-4 ">{childern}</div>;
}

Container.propsTypes = {
  childern: PropTypes.node,
};

export default Container;
