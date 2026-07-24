import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
    const pathname = usePathname();

    function linkClass(href: string) {
        const estaAtivo = pathname === href;

        return estaAtivo
            ? "text-blue-800"
            : "text-zinc-600 hover:text-blue-800";
    }
    return (

        <div>
            <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-4 lg:px-10">
                <Link href="/" className="flex items-center gap-4">
                    <Image src="/logo-weg.png" alt="Logo WEG" width={500} height={500} className="h-9 w-auto"></Image>
                    <span className={linkClass("/")}></span>
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