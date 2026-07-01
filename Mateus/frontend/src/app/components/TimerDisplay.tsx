export function TimerDisplay({ tempoRestante, cor = 'rose', label }: { tempoRestante: string; cor?: string; label?: string }) {
    const corBorda = cor === 'sky' ? 'border-sky-500' : 'border-rose-500';
    const corTexto = cor === 'sky' ? 'text-sky-400' : 'text-rose-400';
    return (
        <div className={`w-64 h-64 rounded-full border-8 ${corBorda} flex items-center justify-center bg-slate-800 shadow-2xl`}>
            <div className="text-center">
                {label && <p className={`text-sm font-bold uppercase tracking-wider ${corTexto}`}>{label}</p>}
                <h2 className="text-6xl font-mono">{tempoRestante}</h2>
            </div>
        </div>
    );
}