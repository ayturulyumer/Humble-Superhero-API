import { useState } from "react"

export default function SuperheroForm({ onAddSuperhero }) {
    const [name, setName] = useState("")
    const [superpower, setSuperpower] = useState("")
    const [humilityScore, setHumilityScore] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !superpower.trim()) {
            setError("Name and superpower are required.")
            return
        }
        const score = Number(humilityScore)
        if (isNaN(score) || score < 1 || score > 10) {
            setError("Humility score must be a number between 1 and 10.")
            return
        }
        onAddSuperhero({ name, superpower, humilityScore: score })
        setName("")
        setSuperpower("")
        setHumilityScore("")
        setError("")
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Superhero Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="superpower" className="block text-sm font-medium text-gray-700">
                    Superpower
                </label>
                <input
                    id="superpower"
                    type="text"
                    value={superpower}
                    onChange={(e) => setSuperpower(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="humilityScore" className="block text-sm font-medium text-gray-700">
                    Humility Score (1-10)
                </label>
                <input
                    id="humilityScore"
                    type="number"
                    value={humilityScore}
                    onChange={(e) => setHumilityScore(e.target.value)}
                    min="1"
                    max="10"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
                type="submit"
                className="w-full  cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
            >
                Add Superhero
            </button>
        </form>
    )
}

