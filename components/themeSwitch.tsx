import React, { useState } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(true);

    const handleCheck = () => {
        setEnabled(!enabled);
    }

    // Use theme requires its own hook which uses Strings. Using an enabled, disabled for a bool hook and the following block translates that to a string.
    if (enabled) {
        setTheme("dark");
    } else {
        setTheme("light");
    }

    return (
        <div className="flex justify-start md:justify-end items-center space-x-2 mx-auto relative">
            <label className="swap swap-rotate">
                <input type="checkbox" checked={enabled} onChange={handleCheck}/>
                 <HiSun className="swap-off relative inline-flex items-center w-10 h-10 text-black" />
                 <HiMoon className="swap-on relative inline-flex items-center w-10 h-10 text-white" />
            </label>

            {/* <Switch.Group>
                <div className="flex items-center">
                    <Switch.Label className="mr-3 dark:text-white text-black">Dark Mode</Switch.Label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-gray-400' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-2 dark:ring-white ring-black dark:focus:bg-gray-400 focus:bg-gray-400`}
                    >
                        <span
                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-black dark:bg-white rounded-full transition-transform`} />
                    </Switch>
                </div>
            </Switch.Group> */}
        </div>
    );
};
