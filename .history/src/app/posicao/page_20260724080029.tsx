export default function Posicao(){
    return (
        <>
            <main class="mx-auto max-w-6xl px-6 py-10">
                <a href="index.html" class="text-sm font-semibold text-blue-800 hover:underline">← Voltar ao painel</a>
                <section class="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
                    <article class="border border-zinc-200 bg-white shadow-sm">
                        <header class="border-b border-zinc-200 p-6">
                            <p class="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Detalhes da posição</p>
                            <div class="mt-3 flex flex-wrap items-center justify-between gap-4">
                                <div><h1 class="mono text-4xl font-bold text-blue-800">A1-04</h1><p class="mt-2 text-sm text-zinc-500">Corredor A · Nível 04</p></div>
                                <span class="rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-800">Atenção</span>
                            </div>
                        </header>
                        <div class="p-6">
                            <h2 class="text-xl font-bold">Bobinas de Fio de Cobre 1.5 mm</h2>
                            <p class="mt-2 text-sm leading-6 text-zinc-600">Esta página contém dados genéricos apenas para representar a estrutura visual esperada. Na aplicação em Next.js, o conteúdo deverá ser carregado dinamicamente conforme o identificador presente na rota.</p>
                            <dl class="mt-8 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
                                <div class="bg-white p-5"><dt class="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Corredor</dt><dd class="mt-2 font-semibold">Corredor A</dd></div>
                                <div class="bg-white p-5"><dt class="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Prateleira</dt><dd class="mt-2 font-semibold">Nível 04</dd></div>
                                <div class="bg-white p-5"><dt class="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Peso atual</dt><dd class="mono mt-2 text-xl font-bold">420 kg</dd></div>
                                <div class="bg-white p-5"><dt class="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Capacidade máxima</dt><dd class="mono mt-2 text-xl font-bold">500 kg</dd></div>
                                <div class="bg-white p-5 sm:col-span-2"><dt class="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Última movimentação</dt><dd class="mono mt-2 font-semibold">07/06/2026 às 14:22</dd></div>
                            </dl>
                        </div>
                    </article>

                    <aside class="space-y-6">
                        <section class="border border-zinc-200 bg-white p-6 shadow-sm">
                            <p class="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Ocupação</p>
                            <p class="mono mt-5 text-6xl font-semibold text-amber-500">84<span class="text-2xl text-zinc-500">%</span></p>
                            <div class="mt-5 h-3 bg-zinc-100"><div class="h-full w-[84%] bg-amber-400"></div></div>
                            <p class="mt-4 text-sm leading-6 text-zinc-600">A posição utiliza 420 kg de uma capacidade total de 500 kg.</p>
                        </section>
                    </aside>
                </section>
            </main>
        </>
    )
}