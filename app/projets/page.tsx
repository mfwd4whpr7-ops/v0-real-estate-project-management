"use client"

import { useState } from "react"
import ProjetList from "@/components/projets/projet-list"
import ProjetForm from "@/components/projets/projet-form"
import { Plus } from "lucide-react"

export default function ProjetsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [projets, setProjets] = useState([
    {
      id: "1",
      nom: "Résidence Belleville",
      localisation: "Paris 20e",
      budget: 2500000,
      budgetUtilise: 1850000,
      dateDebut: "2024-01-15",
      dateFinPrevue: "2025-12-31",
      statut: "En cours",
      progression: 65,
      description: "Construction d'une résidence de 45 logements",
    },
    {
      id: "2",
      nom: "Centre Commercial Ouest",
      localisation: "Lyon",
      budget: 5000000,
      budgetUtilise: 2100000,
      dateDebut: "2024-03-01",
      dateFinPrevue: "2026-06-30",
      statut: "En cours",
      progression: 35,
      description: "Centre commercial multifonctionnel",
    },
    {
      id: "3",
      nom: "Tour Tech Défense",
      localisation: "La Défense",
      budget: 8000000,
      budgetUtilise: 8000000,
      dateDebut: "2022-06-01",
      dateFinPrevue: "2024-11-30",
      statut: "Terminé",
      progression: 100,
      description: "Tour de 18 étages dédiée aux startups tech",
    },
  ])

  const handleAddProject = (newProject: any) => {
    setProjets([...projets, { ...newProject, id: Date.now().toString() }])
    setIsFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Mes Projets</h1>
            <p className="text-muted-foreground mt-2">Gestion complète de vos projets immobiliers</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
          >
            <Plus size={20} />
            Nouveau projet
          </button>
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <ProjetForm onSubmit={handleAddProject} onClose={() => setIsFormOpen(false)} />
              </div>
            </div>
          </div>
        )}

        {/* Projects List */}
        <ProjetList projets={projets} />
      </div>
    </div>
  )
}
