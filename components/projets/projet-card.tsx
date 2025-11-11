"use client"

import Link from "next/link"
import { MapPin, Calendar, DollarSign, TrendingUp } from "lucide-react"

export default function ProjetCard({ projet }: { projet: any }) {
  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "En cours":
        return "bg-accent/20 text-accent"
      case "Terminé":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "En attente":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const formattedBudget = (budget: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(budget)
  }

  return (
    <Link href={`/projets/${projet.id}`}>
      <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {projet.nom}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
              <MapPin size={16} />
              {projet.localisation}
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(projet.statut)}`}>
            {projet.statut}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{projet.description}</p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-muted-foreground">Progression</span>
            <span className="text-xs font-bold text-primary">{projet.progression}%</span>
          </div>
          <div className="bg-muted rounded-full h-2 overflow-hidden">
            <div className="bg-primary h-full transition-all" style={{ width: `${projet.progression}%` }} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <DollarSign size={14} />
              Budget
            </div>
            <div className="font-bold text-foreground text-sm">
              {formattedBudget(projet.budgetUtilise)} / {formattedBudget(projet.budget)}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <Calendar size={14} />
              Fin
            </div>
            <div className="font-bold text-foreground text-sm">
              {new Date(projet.dateFinPrevue).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "short",
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
          <TrendingUp size={14} />
          Détails du projet
        </div>
      </div>
    </Link>
  )
}
