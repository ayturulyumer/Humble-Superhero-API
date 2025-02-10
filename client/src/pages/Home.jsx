import { useState, useEffect } from 'react'
import SuperheroForm from '../components/SuperheroForm.jsx'
import SuperheroList from '../components/SuperHeroList.jsx'
import Modal from '../components/Modal.jsx'
import * as request from "../lib/request.js"

export default function Home() {
    const [superheroes, setSuperheroes] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    // This must be in env file in real life scenario
    const URL = "http://localhost:3000/api"


    // Fetch all superheroes 
    useEffect(() => {
        const fetchSuperheroes = async () => {
            try {
                const response = await request.get(`${URL}/superheroes`);
                if (response.data) {
                    setSuperheroes(response.data);
                } else {
                    console.error("Failed to fetch superheroes:", response.error);
                }
            } catch (error) {
                console.error("An error occurred while fetching superheroes:", error);
                setError("Failed to load superheroes. Please try again later.");
            }
        };

        fetchSuperheroes();
    }, []);

    // Add a new superhero
    const addSuperhero = async (newSuperhero) => {
        try {
            const response = await request.post(`${URL}/superheroes`, newSuperhero);
            if (response.data) {
                setSuperheroes((prevSuperheroes) =>
                    [...prevSuperheroes, response.data].sort((a, b) => b.humilityScore - a.humilityScore)
                );
                setIsModalOpen(false);
            } else if (response.errors) {
                console.error("Validation errors:", response.errors);
                setError("Validation failed. Please check your input.");
            } else {
                console.error("Unexpected error:", response.error);
                setError("Failed to add superhero. Please try again.");
            }
        } catch (error) {
            console.error("An error occurred while adding the superhero:", error);
            setError("Failed to add superhero. Please try again.");
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-r font-mono from-blue-600 to-violet-600 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-4xl sm:mx-auto w-full px-2 sm:px-0">
                <div className="absolute inset-0  mx-1 md:mx-8 bg-gradient-to-r from-cyan-800 to-blue-200 opacity-70 transform -skew-y-6 md:skew-y-0 md:-rotate-8 rounded-3xl "></div>
                <div className="relative px-4  mx-1 md:mx-8 rounded-3xl py-10 bg-white/30 shadow-lg ">
                    <div className="max-w-xl mx-auto">
                        <div className="absolute top-1  right-2">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-3xl hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 sm:text-base text-sm"
                            >
                                Add Superhero
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

