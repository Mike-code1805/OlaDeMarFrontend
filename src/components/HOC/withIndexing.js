import React, { useContext, useEffect } from 'react';
import AppContext from 'src/components/context/app/app.context';

const withIndexing = (Component, index) => {

  const WrappedComponent = ({ children, ...props }) => {
    const { setSidebarIndex } = useContext(AppContext);

    useEffect(() => {
      setSidebarIndex(index);
      return () => { setSidebarIndex('') }
      // eslint-disable-next-line
    }, []);

    return (
      <Component {...props}>
        { children }
      </Component>
    )
  }

  return WrappedComponent;
}

export default withIndexing;