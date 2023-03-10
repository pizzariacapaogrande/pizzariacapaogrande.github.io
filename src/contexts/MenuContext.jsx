import { createContext, useState } from "react";

export const MenuContext = createContext();

// eslint-disable-next-line react/prop-types
export function MenuProvider({ children }) {
    const [toggle, setToggle] = useState(false);


    return (
        <MenuContext.Provider value={{ toggle, setToggle }}>
            {children}
        </MenuContext.Provider>
    );
}
