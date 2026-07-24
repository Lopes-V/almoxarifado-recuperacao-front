export default function Sobre() {
    return (
        <>
            <main class="mx-auto max-w-6xl px-6 py-10">
                <section class="border border-zinc-200 bg-white p-8 shadow-sm lg:p-12">
                    <p class="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-800">Sobre o projeto</p>
                    <h1 class="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight">Tecnologia aplicada à organização do almoxarifado industrial</h1>
                    <div class="mt-8 grid gap-8 text-sm leading-7 text-zinc-600 lg:grid-cols-2">
                        <div class="space-y-5"><p>O almoxarifado vertical reúne matérias-primas, componentes e insumos utilizados nos processos industriais. A organização das posições permite aproveitar melhor o espaço disponível e localizar materiais com maior agilidade.</p><p>O acompanhamento do peso armazenado também contribui para prevenir sobrecargas e identificar posições que exigem atenção da equipe responsável.</p></div>
                        <div class="space-y-5"><p>Este projeto-base representa uma interface estática que deverá ser migrada para Next.js. Os dados apresentados estão escritos diretamente no HTML e possuem finalidade exclusivamente demonstrativa.</p><p>Na versão final, as posições, métricas e detalhes deverão ser carregados da API disponibilizada para a avaliação.</p></div>
                    </div>
                    <div class="mt-10 grid gap-4 sm:grid-cols-3"><article class="border border-zinc-200 p-5"><strong class="text-blue-800">01</strong><h2 class="mt-3 font-bold">Monitoramento</h2><p class="mt-2 text-sm leading-6 text-zinc-600">Visualização da ocupação e da capacidade das posições.</p></article><article class="border border-zinc-200 p-5"><strong class="text-blue-800">02</strong><h2 class="mt-3 font-bold">Segurança</h2><p class="mt-2 text-sm leading-6 text-zinc-600">Identificação de situações de atenção e risco crítico.</p></article><article class="border border-zinc-200 p-5"><strong class="text-blue-800">03</strong><h2 class="mt-3 font-bold">Rastreabilidade</h2><p class="mt-2 text-sm leading-6 text-zinc-600">Consulta do material e da última movimentação registrada.</p></article></div>
                </section>
            </main>
        </>
    )
}