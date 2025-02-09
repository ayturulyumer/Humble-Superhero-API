export default function SuperheroList({ superheroes }) {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 border-b border-blue-500 text-gray-800">Superhero List</h2>
            {superheroes.length === 0 ? (
                <p className="text-gray-500">No superheroes added yet :(</p>
            ) : (
                <div className="grid  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {superheroes.map((hero) => (
                        <div key={hero.id} className=" p-4 bg-white rounded-lg  shadow-md shadow-blue-600 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-gray-800 ">{hero.name}</h3>
                                <p className="text-gray-600 text-md">Superpower: {hero.superpower}</p>
                            </div>
                            <p className="text-indigo-600 text-sm font-semibold mt-2">Humility Score: {hero.humilityScore}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

