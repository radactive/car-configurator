import { useState, useEffect, useRef } from "react";
import { useCustomization, availColors, availSpoilerColors } from "../contexts/Customization";
import { motion, useAnimation } from "framer-motion";

const Configurator = () => {
    const { color, setColor, spoiler, setSpoiler } = useCustomization();
    const controls = useAnimation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            controls.start("hidden");
        } else if (isOpen) {
            controls.start("visible");
        }
    }, [controls, isOpen]);

    return (

        <div className='configurator'>
            <motion.div
                initial="hidden"
                animate={controls}
                transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 400
                }}
                variants={{
                    visible: { marginTop: '' },
                    hidden: { marginTop: '' },
                }}
            >
                <div onClick={() => setIsOpen(!isOpen)} className='configurator__head'>
                    <p>Config</p>
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate={controls}
                transition={{
                    type: "spring",
                    damping: 40,
                    stiffness: 400
                }}
                variants={{
                    visible: { opacity: 1, display: "block" },
                    hidden: { opacity: 0 ,transitionEnd: {
                        display: "none"
                    }},
                }}
            >
                <div className="configurator__section">
                    <div>
                        <div className="configurator__section__title">Select Color</div>
                        <div className="configurator__section__values">
                            {availColors.map((item, index) => (
                                <div
                                    key={index}
                                    className={`item ${item.color === availColors.color ? "item--active" : ""}`}
                                    onClick={() => { setColor(item) }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <div
                                            className="item__dot"
                                            style={{ backgroundColor: item.color }}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="configurator__section__title">Spoiler</div>
                        <div className="configurator__section__values">
                            {availSpoilerColors.map((item, index) => (
                                <div
                                    key={index}
                                    className={`item ${item.color === availSpoilerColors.color ? "item--active" : ""}`}
                                    onClick={() => { setSpoiler(item) }}
                                >
                                    <div
                                        className="item__dot"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

    )
}

export default Configurator;