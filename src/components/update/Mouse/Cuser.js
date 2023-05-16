import "./curser.css"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cuser = ({ scaling }) => {
    const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
    const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mousemove = (e) => {
            setlargecircle({ x: e.clientX, y: e.clientY });
            setsmallcircle({ x: e.clientX, y: e.clientY });
            console.log(e)
        };
        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []);

    return (
        <div>
            <motion.div
                animate={{
                    x: largecircle.x - 10,
                    y: largecircle.y - 10,
                    transition: { type: "spring", mass: 3 },
                }}
                className="large_circle"
                style={{ scale: scaling ? 0.1 : 1 }}></motion.div>
            <motion.div
                animate={{
                    x: smallcircle.x - 8,
                    y: smallcircle.y - 8,
                    transition: { type: "spring", mass: 2 },
                }}
                className="small_circle"></motion.div>
        </div>
    );
};

export default Cuser;
