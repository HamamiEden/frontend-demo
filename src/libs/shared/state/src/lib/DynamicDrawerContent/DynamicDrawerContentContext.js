import React, { useCallback, useState } from "react";
import { isEmpty } from "lodash";

const DynamicDrawerContentContext = React.createContext();

const DynamicDrawerContentProvider = React.memo(({ children }) => {
  const [contentComponent, setContentComponent] = useState(null);
  const [options, setOptions] = useState({});

  const onOpen = useCallback((contentComponent, options = {}) => {
    contentComponent && setContentComponent(contentComponent);
    !isEmpty(options) && setOptions(options);
  }, []);

  const onClose = useCallback(() => {
    setContentComponent(null);
    setOptions({});
  }, []);

  return (
    <DynamicDrawerContentContext.Provider value={{ onOpen, onClose, setOptions, contentComponent, options }}>
      {children}
    </DynamicDrawerContentContext.Provider>
  );
});

export { DynamicDrawerContentContext, DynamicDrawerContentProvider };
