import Link from "next/link";
import Image from "next/image";
export default function Header() {
    return (
        <div>
            <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-4 lg:px-10">
                <Link href="/" className="flex items-center gap-4">
                    <Image src="./logo-weg.png" alt="Logo WEG" className="h-9 w-auto"></Image>
                    <span className="h-8 w-px bg-zinc-300"></span>
                    <span className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-700">Warehouse</span>
                </Link>
                <nav className="flex items-center gap-7 text-sm font-semibold">
                    <Link href="/" className="text-blue-800">Painel</Link>
                    <Link href="/sobre" className="text-zinc-600 hover:text-blue-800">Sobre o sistema</Link>
                </nav>
            </div>
        </div>
    )
}