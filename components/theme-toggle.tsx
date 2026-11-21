"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        subscribe,
        () => true,
        () => false,
    );

    if (!mounted) {
        return <div className="size-9" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group flex size-9 cursor-pointer items-center justify-center rounded-lg text-white transition duration-200 hover:-translate-y-px hover:bg-white/10 active:bg-white/15"
        >
            <Icon
                icon={
                    isDark
                        ? "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
                        : "line-md:sunny-filled-loop"
                }
                className="size-5 transition duration-200 group-hover:rotate-20"
            />
        </button>
    );
}
