"use client"

import { ArrowLeft, Calendar, DollarSign, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function ProjetDetailPage({ params }: { params: { id: string } }) {
  // Mock data - en production, récupérer depuis une API
  const projet = {
    id: params.id,
    nom: "Résidence Belleville",
    localisation: "Paris 20e",
    budget: 2500000,
    budgetUtilise: 1850000,
    dateDebut: "2024-01-15",
    dateFinPrevue: "2025-12-31",
    statut: "En cours",
    progression: 65,
    description: "Construction d'une résidence de 45 logements avec parking souterrain et espaces verts",
    chefProjet: "Marie Dupont",
    equipe: 12,
    etapes: [
      { nom: "Fondations", progression: 100, statut: "Terminé" },
      { nom: "Structure", progression: 100, statut: "Terminé" },
      { nom: "Second oeuvre", progression: 60, statut: "En cours" },
      { nom: "Finitions", progression: 20, statut: "En cours" },
      { nom: "Livraison", progression: 0, statut: "À venir" },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/projets" className="flex items-center gap-2 text-primary hover:opacity-80 mb-8 transition-opacity">
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        {/* Header */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{projet.nom}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {projet.localisation}
                </div>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {projet.statut}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{projet.progression}%</div>
              <p className="text-muted-foreground">Progression</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-muted rounded-full h-3 overflow-hidden">
            <div className="bg-primary h-full transition-all" style={{ width: `${projet.progression}%` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">À propos du projet</h2>
              <p className="text-muted-foreground leading-relaxed">{projet.description}</p>
            </div>

            {/* Étapes */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Étapes du projet</h2>
              <div className="space-y-4">
                {projet.etapes.map((etape, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-foreground">{etape.nom}</h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          etape.statut === "Terminé"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : etape.statut === "En cours"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {etape.statut}
                      </span>
                    </div>
                    <div className="bg-muted rounded-full h-2 overflow-hidden">
                      <div className="bg-primary h-full transition-all" style={{ width: `${etape.progression}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <DollarSign size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Budget</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-bold text-foreground">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(projet.budget)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Utilisé</span>
                  <span className="font-bold text-primary">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(projet.budgetUtilise)}
                  </span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between">
                  <span className="text-muted-foreground">Restant</span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(projet.budget - projet.budgetUtilise)}
                  </span>
                </div>
              </div>
            </div>

            {/* Calendrier */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Calendar size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Calendrier</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Début</span>
                  <div className="font-semibold text-foreground">
                    {new Date(projet.dateDebut).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">Fin prévue</span>
                  <div className="font-semibold text-foreground">
                    {new Date(projet.dateFinPrevue).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Équipe */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Équipe</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Chef de projet</span>
                  <div className="font-semibold text-foreground">{projet.chefProjet}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Membres</span>
                  <div className="font-semibold text-foreground">{projet.equipe} personnes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
