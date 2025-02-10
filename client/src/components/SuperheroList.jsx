export default function SuperheroList({ superheroes }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-500 text-gray-800">Superhero List</h2>
            {superheroes.length === 0 ? (
                <p className="text-gray-800">No superheroes added yet :(</p>
            ) : (
                <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                    {superheroes.map((hero) => (
                        <div
                            key={hero.id}
                            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-black/70 opacity-75"></div>
                            <div className="relative p-6 flex flex-col w-full">
                                <h3 className="text-2xl font-bold text-white mb-2">{hero.name}</h3>
                                <div className="flex items-center mb-4">
                                    <p className="text-sm  text-white font-semibold">Superpower: <span>{hero.superpower}</span></p>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-sm text-white mb-1">Humility Score</p>
                                    <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                                        <div className="bg-green-400 h-full rounded-full" style={{ width: `${(hero.humilityScore / 10) * 100}%` }}></div>
                                    </div>
                                    <p className="text-right text-white text-sm mt-1">{hero.humilityScore}/10</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

