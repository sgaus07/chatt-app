import React, { createContext, useState } from 'react';

const ActiveTab = createContext(null);

function HeaderActiveTab() {

    const [tab, setTab] = useState('/');

    const update = (path) => {

      setTab(path);
    }

    return (
        <ActiveTab.Provider value={{tab, update}}>

        </ActiveTab.Provider>
  );
}

export { HeaderActiveTab, ActiveTab }
