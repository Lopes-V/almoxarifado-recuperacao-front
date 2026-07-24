import Link from "next/link";
import { Params } from "next/dist/server/request/params";

interface posicao {
    corredor: string;
    prateleira: string;
    posicao_codigo: string;
    material_armazenado: string;
    peso_atual_kg: number;
    capacidade_maxima_kg: number;
    status_seguranca: string;
    percentual_ocupacao: number;
    id: number;
    ultima_movimentacao: string
}
interface PosicaoPageProps {
    params: Promise<{
        id: string;
    }>;
}

function classificacao(ocupacao: number) {
    if (ocupacao >= 0 && ocupacao <= 20) {  return  `<div className="h-full w-[${ocupacao}%] bg-emerald-500"></div>`; }
    if (ocupacao > 20 && ocupacao <= 40) {  return  `<div className="h-full w-[${ocupacao}%] bg-green-500"></div>`;  }
    if (ocupacao > 40 && ocupacao <= 55) {  return  `<div className="h-full w-[${ocupacao}%] bg-lime-500"></div>`;  }
    if (ocupacao > 55 && ocupacao <= 65) {  return  `<div className="h-full w-[${ocupacao}%] bg-amber-400"></div>`;  }
    if (ocupacao > 65 && ocupacao <= 80) {  return  `<div className="h-full w-[${ocupacao}%] bg-orange-500"></div>`;  }
    if (ocupacao > 80 && ocupacao <= 90) { const className = `<div className="h-full w-[${ocupacao}%] bg-rose-600"></div>`; return <div className="mt-5 h-3 bg-zinc-100">{className}</div> }
    if (ocupacao > 90) {  return `<div className="h-full w-[${ocupacao}%] bg-rose-800"></div>`; return <div className="mt-5 h-3 bg-zinc-100">{className}</div> }
}

export default async function Posicao({ params }: PosicaoPageProps) {
    const {id} = await params;
    try {
        const response = await fetch(`https://api-warehouse-k0ex.onrender.com/api/posicoes/${id}`);
        const data: posicao = await response.json();
        return (
            <>
                <main className="mx-auto max-w-6xl px-6 py-10">
                    <Link href="/" className="text-sm font-semibold text-blue-800 hover:underline">← Voltar ao painel</Link>
                    <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
                        <article className="border border-zinc-200 bg-white shadow-sm">
                            <header className="border-b border-zinc-200 p-6">
                                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Detalhes da posição</p>
                                <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                                    <div><h1 className="mono text-4xl font-bold text-blue-800">{data.corredor}</h1><p className="mt-2 text-sm text-zinc-500">{data.corredor} · {data.prateleira}</p></div>
                                    <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-amber-800">{data.status_seguranca}</span>
                                </div>
                            </header>
                            <div className="p-6">
                                <h2 className="text-xl font-bold">{data.material_armazenado}</h2>
                                <dl className="mt-8 grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
                                    <div className="bg-white p-5"><dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Corredor</dt><dd className="mt-2 font-semibold">{data.corredor}</dd></div>
                                    <div className="bg-white p-5"><dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Prateleira</dt><dd className="mt-2 font-semibold">{data.prateleira}</dd></div>
                                    <div className="bg-white p-5"><dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Peso atual</dt><dd className="mono mt-2 text-xl font-bold">{data.peso_atual_kg} kg</dd></div>
                                    <div className="bg-white p-5"><dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Capacidade máxima</dt><dd className="mono mt-2 text-xl font-bold">{data.capacidade_maxima_kg} kg</dd></div>
                                    <div className="bg-white p-5 sm:col-span-2"><dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Última movimentação</dt><dd className="mono mt-2 font-semibold">{data.ultima_movimentacao}</dd></div>
                                </dl>
                            </div>
                        </article>

                        <aside className="space-y-6">
                            <section className="border border-zinc-200 bg-white p-6 shadow-sm">
                                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Ocupação</p>
                                <p className="mono mt-5 text-6xl font-semibold text-amber-500">{data.percentual_ocupacao}<span className="text-2xl text-zinc-500">%</span></p>
                                {classificacao(data.percentual_ocupacao)}
                                <p className="mt-4 text-sm leading-6 text-zinc-600">A posição utiliza {data.peso_atual_kg} kg de uma capacidade total de {data.capacidade_maxima_kg} kg.</p>
                            </section>
                        </aside>
                    </section>
                </main>
            </>
        )
    } catch (error) {
        console.log(error)
    }
}