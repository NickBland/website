import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [enabled, setEnabled] = useState(true);

    // Use theme requires its own hook which uses Strings. Using an enabled, disabled for a bool hook and following translates that to a string.
    if (enabled) {
        setTheme("dark");
    } else {
        setTheme("light");
    }

    return (
        <div className="flex justify-end items-center space-x-2 mx-auto relative">
            <Switch.Group>
                <div className="flex items-center">
                    <Switch.Label className="mr-3 dark:text-black text-white">Dark Mode</Switch.Label>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-gray-200' : 'bg-gray-400'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-2 dark:ring-black ring-white dark:focus:bg-gray-200 focus:bg-gray-400`}
                    >
                        <span
                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white dark:bg-black rounded-full transition-transform`} />
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    );
};
