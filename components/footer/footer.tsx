import { footLinks } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto overflow-hidden border-t border-white/10 bg-black text-white">
            <div className="mx-auto max-w-350 px-6">
                <div className="grid gap-12 pt-16 md:pt-20 lg:grid-cols-[1.4fr_3fr]">
                    <div>
                        <Image
                            src="/logo.svg"
                            alt="Xinux"
                            width={84}
                            height={51}
                            className="h-9 w-auto"
                        />
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-white">
                            NixOS ustida qurilgan, GNOME ishchi muhitidagi ochiq
                            kodli operatsion tizim.
                        </p>
                        <ul className="mt-6 flex gap-2">
                            {footLinks.socials.map(item => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-colors hover:border-white/20 hover:text-white"
                                    >
                                        <Icon
                                            icon={item.icon}
                                            className="size-5"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
                        {footLinks.sections.map(column => (
                            <nav key={column.title}>
                                <h3 className="font-mono text-xs tracking-[0.2em] text-white uppercase">
                                    {column.title}
                                </h3>
                                <ul className="mt-5 flex flex-col gap-3">
                                    {column.links.map(item => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-[15px] text-neutral-300 transition-colors hover:text-white"
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-14 max-w-6xl px-2 md:mt-20">
                <Image
                    src="/xinux.png"
                    alt=""
                    width={1440}
                    height={228}
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    className="footer-wordmark-shine h-auto w-full mix-blend-screen select-none"
                />
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 xinux.uz. Barcha huquqlar himoyalangan.</p>
                    <p>Ochiq kodli · Hamjamiyat tomonidan yaratilgan</p>
                </div>
            </div>
        </footer>
    );
}
