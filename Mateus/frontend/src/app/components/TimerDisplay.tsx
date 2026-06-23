export function TimerDisplay({ tempoRestante }: { tempoRestante: string }) {
    return (
        <div className="w-64 h-64 rounded-full border-8 border-rose-500 flex items-center justify-center bg-slate-800 shadow-2xl">
            <h2 className="text-6xl font-mono">{tempoRestante}</h2>
        </div>
    );
}