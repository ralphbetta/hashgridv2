'use client';

import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

interface SidebarProps {
  items: {
    name: string;
    icon: LucideIcon;
    route: string; 
  }[];
  activeItem: string;
  setActiveItem: (item: string) => void;
}

function SideNav({ items, activeItem, setActiveItem }: SidebarProps) {

  const pathname = usePathname();
  console.log("Current Path:", pathname);

  return (
    <nav className="min-w-[300px] z-20 h-svh alt border-r alt-border flex flex-col justify-between">
      <div>
        <div className="text-2xl p-6 md:text-3xl font-semibold md:font-bold flex justify-start items-center gap-x-1">
          <Image
            src="/svg/icon.svg"
            className="md:w-8 w-6"
            width={32}
            height={32}
            alt="logo"
            priority
          />
          Hash<span className="text-blue-500">Grid</span>
        </div>
        <hr />
        <div className="flex flex-col space-y-6 w-full h-full mx-auto px-6 mt-[14%]">
          {items.map((element, index) => {
            const Icon = element.icon;
            const active = pathname  === element.route;

            console.log(active);
            
            return (
            <div key={index}  className={active ? 'text-white border-2  rounded-xl py-3 px-3 alt-border': 'text-muted-foreground px-3'}>
               <Link href={element.route}>
              <div className='flex gap-x-3' >
                <Icon/>
                <div>{element.name}</div>
              </div>
             </Link>
            </div>
            );
          })}
        </div>
      </div>

      <div className="p-6 border-t text-muted-foreground flex justify-start items-center gap-x-1">
        © 2024 HTTP3. All rights reserved
      </div>
    </nav>
  );
}

export default SideNav;
