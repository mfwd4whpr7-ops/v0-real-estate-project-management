"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

export default function ProjetForm({
  onSubmit,
  onClose,
}: {
  onSubmit: (data: any) => void
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    nom: "",
    localisation: "",
    budget: "",
    dateDebut: "",
    dateFinPrevue: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      budget: Number.parseInt(formData.budget),
      budgetUtilise: 0,
      statut: "En attente",
      progression: 0,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Nouveau Projet</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Nom du projet</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          placeholder="Ex: Résidence Belleville"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Localisation</label>
        <input
          type="text"
          name="localisation"
          value={formData.localisation}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          placeholder="Ex: Paris 20e"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Budget (€)</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          placeholder="Ex: 2500000"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Date de début</label>
          <input
            type="date"
            name="dateDebut"
            value={formData.dateDebut}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Date fin prévue</label>
          <input
            type="date"
            name="dateFinPrevue"
            value={formData.dateFinPrevue}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
          placeholder="Décrivez votre projet..."
        />
      </div>

      <div className="flex gap-4 justify-end pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Créer le projet
        </button>
      </div>
    </form>
  )
}
