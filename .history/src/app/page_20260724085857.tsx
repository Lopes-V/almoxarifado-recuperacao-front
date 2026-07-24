import Image from "next/image";

interface posicao {
  id: number;
  corredor: string;
  prateleira: string;
  posicao_codigo: string;
  material_armazenado: string;
  peso_atual_kg: number;
  capacidade_maxima_kg: number;
  percentual_ocupacao: number;
  status_seguranca: string;
  ultima_movimentacao: string
}

function ocupacaoMedia(data: posicao[]) {
  let media: number = 0;
  data.map(e => media += e.percentual_ocupacao)
  media = media / data.length
  return media
}

function pesoMedia(data: posicao[]) {
  let media: number = 0;
  data.map(e => media += e.peso_atual_kg)
  media = media / data.length
  return media
}
function pesoTotal(data: posicao[]) {
  let media: number = 0;
  data.map(e => media += e.capacidade_maxima_kg)
  media = media / data.length
  return media
}
function statusTotais(data: posicao[]) {
  let media: string[] = [];
  data.map(e => if (media.find(e.status_seguranca)) media)
  media = media / data.length
  return media
}

export default async function Home() {
  try {
    const response = await fetch("https://api-warehouse-k0ex.onrender.com/api/posicoes");
    const data: posicao[] = await response.json();
    return (
      <>
        <main className="mx-auto max-w-360 px-6 py-8 lg:px-10">
          <section className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-800">Almoxarifado vertical 3D</p>
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">Monitoramento de ocupação</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">Acompanhe a capacidade das posições de armazenamento, identifique riscos e consulte os materiais armazenados.</p>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <article className="border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Posições totais</p>
                <span className="h-2 w-2 bg-blue-800"></span>
              </div>
              <p className="mono mt-5 text-5xl font-semibold text-blue-800">{data.length}</p>
              <p className="mt-2 text-xs text-zinc-500">4 corredores ativos</p>
            </article>
            <article className="border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Ocupação média</p>
                <span className="h-2 w-2 bg-emerald-600"></span>
              </div>
              <p className="mono mt-5 text-5xl font-semibold text-emerald-600">{ocupacaoMedia(data)}<span className="ml-1 text-xl text-zinc-500">%</span></p>
              <p className="mt-2 text-xs text-zinc-500">{pesoMedia(data)} kg / {pesoTotal(data)} kg</p>
            </article>
            <article className="border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Posições em risco</p>
                <span className="h-2 w-2 bg-amber-400"></span>
              </div>
              <p className="mono mt-5 text-5xl font-semibold text-amber-500">10</p>
              <p className="mt-2 text-xs text-zinc-500">Status Atenção + Crítico</p>
            </article>
            <article className="border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Alertas críticos</p>
                <span className="h-2 w-2 bg-rose-600"></span>
              </div>
              <p className="mono mt-5 text-5xl font-semibold text-rose-600">1</p>
              <p className="mt-2 text-xs text-zinc-500">Ocupação maior ou igual a 90%</p>
            </article>
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,0.95fr)]">
            <article className="border border-zinc-200 bg-white shadow-sm">
              <header className="flex flex-col justify-between gap-5 border-b border-zinc-200 p-5 lg:flex-row lg:items-center">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Almoxarifado vertical 3D</p>
                  <h2 className="mt-1 text-xl font-extrabold">Mapa de calor · Ocupação por posição</h2>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  <span>Ocupação</span>
                  <div className="flex h-5 w-48 overflow-hidden"><i className="flex-1 bg-emerald-500"></i><i className="flex-1 bg-green-500"></i><i className="flex-1 bg-amber-400"></i><i className="flex-1 bg-orange-500"></i><i className="flex-1 bg-rose-600"></i><i className="flex-1 bg-rose-800"></i></div>
                  <span>0%</span><span>100%</span>
                </div>
              </header>

              <div className="overflow-x-auto p-5">
                <div className="min-w-[820px] border-l border-t border-zinc-200">
                  <div className="grid grid-cols-[96px_repeat(4,minmax(160px,1fr))]">
                    <div className="border-b border-r border-zinc-200 bg-white px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Nível</div>
                    <div className="border-b border-r border-zinc-200 px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Corredor A</div>
                    <div className="border-b border-r border-zinc-200 px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Corredor B</div>
                    <div className="border-b border-r border-zinc-200 px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Corredor C</div>
                    <div className="border-b border-r border-zinc-200 px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-600">Corredor D</div>

                    {/*  Todos os links levam para uma página única genérica. Na versão Next.js, os estudantes deverão gerar os links dinamicamente. */}
                    <div className="flex items-center justify-center border-b border-r border-zinc-200 bg-zinc-50 text-xs font-bold">Nível 06</div>
                    <a href="posicao.html" className="border-b border-r border-white bg-amber-400 p-5 text-center text-white hover:brightness-95"><span className="mono block text-xs font-bold">A1-06</span><strong className="mono mt-1 block text-2xl">60%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-orange-500 p-5 text-center text-white hover:brightness-95"><span className="mono block text-xs font-bold">B2-06</span><strong className="mono mt-1 block text-2xl">70%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-rose-800 p-5 text-center text-white hover:brightness-95"><span className="mono block text-xs font-bold">C3-06</span><strong className="mono mt-1 block text-2xl">96%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-orange-500 p-5 text-center text-white hover:brightness-95"><span className="mono block text-xs font-bold">D4-06</span><strong className="mono mt-1 block text-2xl">78%</strong></a>

                    <div className="flex items-center justify-center border-b border-r border-zinc-200 bg-zinc-50 text-xs font-bold">Nível 05</div>
                    <a href="posicao.html" className="border-b border-r border-white bg-emerald-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">A1-05</span><strong className="mono mt-1 block text-2xl">15%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-rose-600 p-5 text-center text-white"><span className="mono block text-xs font-bold">B2-05</span><strong className="mono mt-1 block text-2xl">88%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-green-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">C3-05</span><strong className="mono mt-1 block text-2xl">30%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-amber-400 p-5 text-center text-white"><span className="mono block text-xs font-bold">D4-05</span><strong className="mono mt-1 block text-2xl">65%</strong></a>

                    <div className="flex items-center justify-center border-b border-r border-zinc-200 bg-zinc-50 text-xs font-bold">Nível 04</div>
                    <a href="posicao.html" className="border-b border-r border-white bg-lime-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">A1-04</span><strong className="mono mt-1 block text-2xl">50%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-orange-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">B2-04</span><strong className="mono mt-1 block text-2xl">70%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-rose-600 p-5 text-center text-white"><span className="mono block text-xs font-bold">C3-04</span><strong className="mono mt-1 block text-2xl">88%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-rose-600 p-5 text-center text-white"><span className="mono block text-xs font-bold">D4-04</span><strong className="mono mt-1 block text-2xl">85%</strong></a>

                    <div className="flex items-center justify-center border-b border-r border-zinc-200 bg-zinc-50 text-xs font-bold">Nível 03</div>
                    <a href="posicao.html" className="border-b border-r border-white bg-amber-400 p-5 text-center text-white"><span className="mono block text-xs font-bold">A1-03</span><strong className="mono mt-1 block text-2xl">65%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-amber-400 p-5 text-center text-white"><span className="mono block text-xs font-bold">B2-03</span><strong className="mono mt-1 block text-2xl">60%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-orange-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">C3-03</span><strong className="mono mt-1 block text-2xl">78%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-green-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">D4-03</span><strong className="mono mt-1 block text-2xl">30%</strong></a>

                    <div className="flex items-center justify-center border-b border-r border-zinc-200 bg-zinc-50 text-xs font-bold">Nível 02</div>
                    <a href="posicao.html" className="border-b border-r border-white bg-amber-400 p-5 text-center text-white"><span className="mono block text-xs font-bold">A1-02</span><strong className="mono mt-1 block text-2xl">60%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-rose-600 p-5 text-center text-white"><span className="mono block text-xs font-bold">B2-02</span><strong className="mono mt-1 block text-2xl">88%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-rose-600 p-5 text-center text-white"><span className="mono block text-xs font-bold">C3-02</span><strong className="mono mt-1 block text-2xl">85%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-emerald-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">D4-02</span><strong className="mono mt-1 block text-2xl">15%</strong></a>

                    <div className="flex items-center justify-center border-b border-r border-zinc-200 bg-zinc-50 text-xs font-bold">Nível 01</div>
                    <a href="posicao.html" className="border-b border-r border-white bg-emerald-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">A1-01</span><strong className="mono mt-1 block text-2xl">15%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-emerald-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">B2-01</span><strong className="mono mt-1 block text-2xl">15%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-orange-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">C3-01</span><strong className="mono mt-1 block text-2xl">78%</strong></a>
                    <a href="posicao.html" className="border-b border-r border-white bg-orange-500 p-5 text-center text-white"><span className="mono block text-xs font-bold">D4-01</span><strong className="mono mt-1 block text-2xl">78%</strong></a>
                  </div>
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <section className="border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Por status</p>
                <div className="mt-5 space-y-5">
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Normal</strong><span className="mono text-xs text-zinc-500">14 · 58%</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[58%] bg-emerald-600"></div></div></div>
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Atenção</strong><span className="mono text-xs text-zinc-500">9 · 38%</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[38%] bg-amber-400"></div></div></div>
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Crítico</strong><span className="mono text-xs text-zinc-500">1 · 4%</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[4%] bg-rose-600"></div></div></div>
                </div>
              </section>

              <section className="border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Por corredor</p>
                <div className="mt-5 space-y-5">
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Corredor A</strong><span className="mono text-xs text-zinc-500">44% · 6 pos</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[44%] bg-blue-800"></div></div></div>
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Corredor B</strong><span className="mono text-xs text-zinc-500">65% · 6 pos</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[65%] bg-blue-800"></div></div></div>
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Corredor C</strong><span className="mono text-xs text-zinc-500">76% · 6 pos</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[76%] bg-blue-800"></div></div></div>
                  <div><div className="mb-2 flex justify-between text-sm"><strong>Corredor D</strong><span className="mono text-xs text-zinc-500">59% · 6 pos</span></div><div className="h-1.5 bg-zinc-100"><div className="h-full w-[59%] bg-blue-800"></div></div></div>
                </div>
              </section>
            </aside>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.log(error)
  }
}
