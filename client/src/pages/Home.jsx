'use client'

import { useState } from 'react'
import SuperheroForm from '../components/SuperHeroForm.jsx'
import SuperheroList from '../components/SuperHeroList.jsx'
import Modal from '../components/Modal.jsx'

export default function Home() {
    const [superheroes, setSuperheroes] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addSuperhero = (newSuperhero) => {
        setSuperheroes(prevSuperheroes =>
            [...prevSuperheroes, newSuperhero].sort((a, b) => b.humilityScore - a.humilityScore)
        )
        setIsModalOpen(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-violet-600 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-4xl sm:mx-auto w-full px-2 sm:px-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="absolute top-0 right-0 mt-4 mr-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                            >
                                Add New Superhero
                            </button>
                        </div>
                        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Superhero Humility Tracker</h1>
                        <SuperheroList superheroes={superheroes} />
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Superhero</h2>
                <SuperheroForm onAddSuperhero={addSuperhero} />
            </Modal>
        </div>

    )
}

