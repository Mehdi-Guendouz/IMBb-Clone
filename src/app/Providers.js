"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({children}) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class" >
            <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors min-h-screen duration-300 select-none">
                {children}
            </div>
        </ThemeProvider>
    );
}

export default Providers;
