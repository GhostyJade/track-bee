import React, { createContext, useContext, useState } from 'react';
import defaultConfig from './defaultConfig';
import PropTypes from 'prop-types';

const LayoutContext = createContext();
const LayoutActionsContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

export const useLayoutActionsContext = () => useContext(LayoutActionsContext);

const LayoutContextProvider = ({ children }) => {
  const [layoutType, updateLayoutType] = useState(defaultConfig.layoutType);
  const [navStyle, updateNavStyle] = useState(defaultConfig.navStyle);
  const [footerType, setFooterType] = useState(defaultConfig.footerType);
  const [footer, setFooter] = useState(defaultConfig.footer);
  const [headerType, setHeaderType] = useState(defaultConfig.headerType);

  return (
    <LayoutContext.Provider
      value={{
        navStyle,
        footerType,
        footer,
        layoutType,
        headerType,
      }}
    >
      <LayoutActionsContext.Provider
        value={{
          setFooter,
          setFooterType,
          updateNavStyle,
          updateLayoutType,
          setHeaderType,
        }}
      >
        {children}
      </LayoutActionsContext.Provider>
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;

LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
