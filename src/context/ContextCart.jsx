import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ContextCart = createContext();

const ContextCartProvider = ({ children }) => {
  const cartJson = localStorage.getItem("cart");
  const [values, setValues] = useState(JSON.parse(cartJson) || []);

  const state = { values, setValues };

  return <ContextCart.Provider value={state}>{children}</ContextCart.Provider>;
};

ContextCartProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextCartProvider;
