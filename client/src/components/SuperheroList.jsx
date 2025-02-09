export default function SuperheroList({ superheroes }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-500 text-gray-800">Superhero List</h2>
            {superheroes.length === 0 ? (
                <p className="text-gray-500">No superheroes added yet :(</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {superheroes.map((hero, index) => (
                        <div key={index} className=" p-4 rounded-lg shadow-md shadow-blue-600 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 mb-2">{hero.name}</h3>
                                <p className="text-gray-600 mb-1">Superpower: {hero.superpower}</p>
                            </div>
                            <p className="text-indigo-600 font-semibold mt-2">Humility Score: {hero.humilityScore}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

