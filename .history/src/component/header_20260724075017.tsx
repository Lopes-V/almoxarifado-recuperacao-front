export default function Header() {
    return (
        <div>
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
                <a href="index.html" class="flex items-center gap-4">
                    <img src="assets/img/logo-weg.png" alt="Logo WEG" class="h-9 w-auto">
                        <span class="h-8 w-px bg-zinc-300"></span>
                        <span class="text-sm font-bold uppercase tracking-[0.22em] text-zinc-700">Warehouse</span>
                </a>
                <nav class="flex items-center gap-7 text-sm font-semibold">
                    <a href="index.html" class="text-blue-800">Painel</a>
                    <a href="sobre.html" class="text-zinc-600 hover:text-blue-800">Sobre o sistema</a>
                </nav>
            </div>
        </div>
    )
}