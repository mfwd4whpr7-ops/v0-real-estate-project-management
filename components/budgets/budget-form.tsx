"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

export default function BudgetForm({
  onSubmit,
  onClose,
  projets,
}: {
  onSubmit: (data: any) => void
  onClose: () => void
  projets: any[]
}) {
  const [formData, setFormData] = useState({
    categorie: "",
    budgetAlloue: "",
    depensesReelles: "",
    engagement: "",
    projetId: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const projet = projets.find((p) => p.id === formData.projetId)
    onSubmit({
      ...formData,
      budgetAlloue: Number.parseInt(formData.budgetAlloue),
      depensesReelles: Number.parseInt(formData.depensesReelles),
      engagement: Number.parseInt(formData.engagement),
      projet: projet?.nom || "Non spécifié",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Nouvelle ligne budgétaire</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Catégorie</label>
        <input
          type="text"
          name="categorie"
          value={formData.categorie}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          placeholder="Ex: Installation électrique"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Projet</label>
        <select
          name="projetId"
          value={formData.projetId}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
        >
          <option value="">Sélectionnez un projet</option>
          {projets.map((projet) => (
            <option key={projet.id} value={projet.id}>
              {projet.nom}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Budget alloué (€)</label>
          <input
            type="number"
            name="budgetAlloue"
            value={formData.budgetAlloue}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Dépenses réelles (€)</label>
          <input
            type="number"
            name="depensesReelles"
            value={formData.depensesReelles}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Engagements (€)</label>
          <input
            type="number"
            name="engagement"
            value={formData.engagement}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            placeholder="0"
          />
        </div>
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
          Ajouter
        </button>
      </div>
    </form>
  )
}
