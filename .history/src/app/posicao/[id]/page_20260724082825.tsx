import Link from "next/link";
// {
//   "id": "pos_a1_04",
//   "corredor": "Corredor A",
//   "prateleira": "Nível 04",
//   "posicao_codigo": "A1-04",
//   "material_armazenado": "Bobinas de Fio de Cobre 1.5mm",
//   "peso_atual_kg": 420,
//   "capacidade_maxima_kg": 500,
//   "percentual_ocupacao": 84.0,
//   "status_seguranca": "Atenção",       // Normal | Atenção | Crítico
//   "ultima_movimentacao": "2026-06-07T14:22:00Z"
// }

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

function classificacao(ocupacao:number){
    if(ocupacao >= 0 && ocupacao <= 20) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-emerald-500"></div></div>
    if(ocupacao > 20 && ocupacao <= 40) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-green-500"></div></div>
    if(ocupacao > 40 && ocupacao <= 55) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-lime-500"></div></div>
    if(ocupacao > 55 && ocupacao <= 65) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-amber-400"></div></div>
    if(ocupacao > 65 && ocupacao <= 80) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-orange-500"></div></div>
    if(ocupacao > 80 && ocupacao <= 90) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-rose-600"></div></div>
    if(ocupacao > 90 && ocupacao <= 90) return <div className="mt-5 h-3 bg-zinc-100"><div className="h-full w-[4%] bg-rose-600"></div></div>
}

export default async function Posicao({ id }: { id: Promise<string | number> }) {

    const idPosicao = await id
    try {
        const response = await fetch(`https://api-warehouse-k0ex.onrender.com/api/posicoes/${idPosicao}`);
        const data : posicao= await response.json();
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
                                    <div className="bg-white p-5 sm:col-span-2"><dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Última movimentação</dt><dd className="mono mt-2 font-semibold">07/06/2026 às 14:22</dd></div>
                                </dl>
                            </div>
                        </article>

                        <aside className="space-y-6">
                            <section className="border border-zinc-200 bg-white p-6 shadow-sm">
                                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-600">Ocupação</p>
                                <p className="mono mt-5 text-6xl font-semibold text-amber-500">{data.percentual_ocupacao}<span className="text-2xl text-zinc-500">%</span></p>

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