'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#1c2e24] bg-[#0b0f0d]/90 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-wider text-emerald-400">فود</span>
          <nav className="flex items-center gap-6 text-sm">
            <Link 
              href="/" 
              className={`transition ${
                pathname === '/' 
                  ? 'text-emerald-400 font-semibold' 
                  : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              صفحه اصلی
            </Link>
            <Link 
              href="/blog" 
              className={`transition ${
                pathname === '/blog' 
                  ? 'text-emerald-400 font-semibold' 
                  : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              بلاگ
            </Link>
          </nav>
        </div>
        <div>
          <button className="bg-[#121a16] border border-[#1c2e24] hover:border-emerald-500 hover:text-emerald-400 text-sm px-4 py-2 rounded-lg transition">
            دانلود اپلیکیشن
          </button>
        </div>
      </header>
    );
}
