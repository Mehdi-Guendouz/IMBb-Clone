"use client"
import {MdLightMode} from 'react-icons/md';
import {BsFillMoonFill} from 'react-icons/bs';
import { useTheme } from 'next-themes';
import {useState, useEffect} from "react"

const DarkModeSwitch = () => {
    
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme
    return (
        <>
            {mounted && currentTheme === "dark" ? (
                <MdLightMode onClick={() => setTheme('light')} className="cursor-pointer text-xl hover:text-amber-500" />
                ) : (
                <BsFillMoonFill onClick={() => setTheme('dark')} className="cursor-pointer text-xl hover:text-amber-500" />
            )}
        </>
    );
}

export default DarkModeSwitch;
