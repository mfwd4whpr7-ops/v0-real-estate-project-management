"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

export default function EngagementForm({
  onSubmit,
  onClose,
  projets,
}: {
  onSubmit: (data: any) => void
  onClose: () => void
  projets: any[]
}) {
  const [formData, setFormData] = useState({
    nomContrat: "",
    fournisseur: "",
    montant: "",
    montantPaye: "",
    dateSignature: "",
    dateDebut: "",
    dateFin: "",
    projetId: "",
    typeContrat: "Fourniture & Travaux",
    conditions: "",
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
      montant: Number.parseInt(formData.montant),
      montantPaye: Number.parseInt(formData.montantPaye),
      statut: "À venir",
      documents: [],
      projet: projet?.nom || "Non spécifié",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foreground">Nouveau Contrat</h2>
        <button
          type="button"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Nom du contrat</label>
        <input
          type="text"
          name="nomContrat"
          value={formData.nomContrat}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          placeholder="Ex: Contrat Fondations - Entreprise XYZ"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Fournisseur / Entreprise</label>
        <input
          type="text"
          name="fournisseur"
          value={formData.fournisseur}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          placeholder="Ex: BTP Plus"
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

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Type de contrat</label>
        <select
          name="typeContrat"
          value={formData.typeContrat}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
        >
          <option>Fourniture & Travaux</option>
          <option>Fourniture</option>
          <option>Services</option>
          <option>Maîtrise d'œuvre</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Montant total (€)</label>
          <input
            type="number"
            name="montant"
            value={formData.montant}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Montant payé (€)</label>
          <input
            type="number"
            name="montantPaye"
            value={formData.montantPaye}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            placeholder="0"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Date signature</label>
          <input
            type="date"
            name="dateSignature"
            value={formData.dateSignature}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Date début</label>
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
          <label className="block text-sm font-medium text-foreground mb-2">Date fin</label>
          <input
            type="date"
            name="dateFin"
            value={formData.dateFin}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Conditions de paiement</label>
        <textarea
          name="conditions"
          value={formData.conditions}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
          placeholder="Ex: 30% à signature, 40% à 50% d'avancement, 30% à fin"
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
          Créer le contrat
        </button>
      </div>
    </form>
  )
}
