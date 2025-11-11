"use client"

import { Building2, Calendar } from "lucide-react"

export default function EngagementCard({ engagement }: { engagement: any }) {
  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "En cours":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Terminé":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "À venir":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const daysUntilEnd = Math.ceil(
    (new Date(engagement.dateFin).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  )

  const pourcentagePaye = (engagement.montantPaye / engagement.montant) * 100

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground leading-snug">{engagement.nomContrat}</h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
            <Building2 size={14} />
            {engagement.fournisseur}
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${getStatusColor(engagement.statut)}`}
        >
          {engagement.statut}
        </span>
      </div>

      {/* Type & Project */}
      <div className="bg-muted/50 rounded-lg p-3 mb-4 text-xs text-muted-foreground">
        <div className="flex justify-between">
          <span>{engagement.typeContrat}</span>
          <span className="font-medium">{engagement.projet}</span>
        </div>
      </div>

      {/* Payment Progress */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-muted-foreground">Paiement</span>
          <span className="text-xs font-bold text-primary">{pourcentagePaye.toFixed(0)}%</span>
        </div>
        <div className="bg-muted rounded-full h-2 overflow-hidden">
          <div className="bg-primary h-full transition-all" style={{ width: `${pourcentagePaye}%` }} />
        </div>
      </div>

      {/* Amount */}
      <div className="space-y-2 mb-4 pb-4 border-b border-border">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Montant</span>
          <span className="font-bold text-foreground">
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }).format(engagement.montant)}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Payé</span>
          <span className="font-bold text-accent">
            {new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            }).format(engagement.montantPaye)}
          </span>
        </div>
      </div>

      {/* Dates */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar size={14} />
          <span>
            {new Date(engagement.dateDebut).toLocaleDateString("fr-FR", { month: "short", day: "numeric" })} -{" "}
            {new Date(engagement.dateFin).toLocaleDateString("fr-FR", { month: "short", day: "numeric" })}
          </span>
        </div>
        {daysUntilEnd > 0 && engagement.statut === "En cours" && (
          <div className="text-xs text-muted-foreground">{daysUntilEnd} jours restants</div>
        )}
      </div>

      {/* Action */}
      <button className="w-full mt-4 text-primary hover:text-primary hover:opacity-80 text-sm font-medium transition-opacity py-2">
        Voir les détails
      </button>
    </div>
  )
}
