'use client'

import { Dispatch, forwardRef, ReactNode, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

interface IProps {
    menu: {
        icon: React.ElementType;
        text: string;
        url: string;
    };
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
    smallSideBar?: boolean;
    onClick?:()=>void
}

const MenuItem = forwardRef<HTMLAnchorElement, IProps>(({ menu, setShowMobileMenu, smallSideBar }, ref) => {
    const pathname = usePathname();
    const pathMatches = () => pathname.includes(menu.url?.toLowerCase());

    return (
        <div className="group relative px-5 w-full flex items-center text-nowrap">
            <div className={`${pathMatches() ? "block" : "hidden"} -left-[1px] absolute h-[70%] w-2 bg-primary rounded-tr-2xl rounded-br-2xl`}></div>
            {menu.url ? (
                <div className="group relative w-full text-[14px] flex items-center">
                    <Link
                        ref={ref}
                        href={menu.url}
                        onClick={() => setShowMobileMenu(false)}
                        className={`${pathMatches() ? "bg-[#F5F7FA]" : ""} hover:bg-[#F5F7FA] group w-full flex items-center justify-between ${menu.text ? "gap-2 px-4" : "justify-center"} py-2 rounded-[5px]`}
                    >
                        <div className="w-full flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2">
                                <menu.icon
                                    size="20"
                                    className={`${pathMatches() ? "text-primary" : "text-slate-800"} group-hover:text-primary`}
                                    variant={`${pathMatches() ? "Bold" : "Outline"}`}
                                />
                                {(menu?.text && !smallSideBar) ? <p className="leading-3 text-slate-700">{menu.text}</p> : null}
                            </div>
                            {(pathMatches() && !smallSideBar) ? <ChevronRight className="size-5" /> : null}
                        </div>
                    </Link>
                </div>
            ) : null}
        </div>
    );
});

MenuItem.displayName = "MenuItem";

export default MenuItem;