import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const availColors =[
    { color: "#34ebc0", name: "lighty blue"},
    { color: "#2e2e2e", name: "mighty grey"},
    { color: "#f2f5f3", name: "pearl white"},
    { color: "#f5b32f", name: "orange power"},
]

export const availSpoilerColors =[
    { color: "#34ebc0", name: "lighty blue"},
    { color: "#2e2e2e", name: "mighty grey"},
    { color: "#f2f5f3", name: "pearl white"},
    { color: "#f5b32f", name: "orange power"},
    { color: "#00", name: "no"},
]

export const CustomizationProvider = (props) => {
    const [color, setColor] = useState('#f2f5f3')
    const [spoiler, setSpoiler] = useState("#00")
    
    return <CustomizationContext.Provider
        value={{
            color,
            setColor,
            spoiler,
            setSpoiler
        }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}