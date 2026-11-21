"use client";

import ThemeToggle from "@/components/theme-toggle";
import { navLinks } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-350 items-center px-6">
                <Link href="/" className="flex shrink-0 items-center">
                    <Image
                        src="/logo.svg"
                        alt="Xinux"
                        width={84}
                        height={51}
                        className="h-9 w-auto"
                        priority
                    />
                </Link>

                <nav className="ml-8 hidden items-center gap-6 md:flex">
                    {navLinks.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[15px] text-neutral-300 transition-colors hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <button
                        type="button"
                        className="hidden h-9 w-56 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-neutral-400 transition-colors hover:border-white/20 hover:text-white sm:flex"
                    >
                        <Icon icon="lucide:search" className="size-4" />
                        Qidirish...
                    </button>

                    <ThemeToggle />

                    <button
                        type="button"
                        onClick={() => setOpen(v => !v)}
                        className="flex size-9 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
                    >
                        <Icon
                            icon={open ? "lucide:x" : "lucide:menu"}
                            className="size-5"
                        />
                    </button>
                </div>
            </div>

            {open && (
                <nav className="flex flex-col border-t border-white/10 px-6 pt-2 pb-6 md:hidden">
                    {navLinks.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            data-active={isActive(item.href)}
                            className="border-b border-white/10 py-4 text-base text-neutral-400 data-[active=true]:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button
                        type="button"
                        className="mt-5 flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-neutral-400"
                    >
                        <Icon icon="lucide:search" className="size-4" />
                        Qidirish...
                    </button>
                </nav>
            )}
        </header>
    );
}
