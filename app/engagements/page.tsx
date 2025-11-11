"use client"

import { useState } from "react"
import { Plus, FileText, Clock, CheckCircle, AlertCircle } from "lucide-react"
import EngagementList from "@/components/engagements/engagement-list"
import EngagementForm from "@/components/engagements/engagement-form"

export default function EngagementsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [engagements, setEngagements] = useState([
    {
      id: "1",
      nomContrat: "Contrat Fondations - Entreprise BTP Plus",
      fournisseur: "BTP Plus",
      montant: 450000,
      montantPaye: 385000,
      dateSignature: "2024-01-10",
      dateDebut: "2024-01-15",
      dateFin: "2024-06-30",
      statut: "En cours",
      projetId: "1",
      projet: "Résidence Belleville",
      typeContrat: "Fourniture & Travaux",
      conditions: "Paiement 30% à signature, 40% à 50% d'avancement, 30% à fin",
      documents: ["Contrat signé", "Devis détaillé", "Planning"],
    },
    {
      id: "2",
      nomContrat: "Fourniture Béton - Ciments Lafarge",
      fournisseur: "Ciments Lafarge",
      montant: 180000,
      montantPaye: 144000,
      dateSignature: "2024-01-12",
      dateDebut: "2024-02-01",
      dateFin: "2024-08-31",
      statut: "En cours",
      projetId: "1",
      projet: "Résidence Belleville",
      typeContrat: "Fourniture",
      conditions: "Livraisons mensuelles, paiement net 30j après livraison",
      documents: ["Bon de commande", "Devis"],
    },
    {
      id: "3",
      nomContrat: "Maîtrise d'Œuvre - Architectes Associés",
      fournisseur: "Architectes Associés",
      montant: 120000,
      montantPaye: 120000,
      dateSignature: "2023-12-15",
      dateDebut: "2024-01-01",
      dateFin: "2025-12-31",
      statut: "Terminé",
      projetId: "1",
      projet: "Résidence Belleville",
      typeContrat: "Services",
      conditions: "10% par phase, dernier versement à réception",
      documents: ["Contrat signé", "Certificat d'assurance", "RIB"],
    },
    {
      id: "4",
      nomContrat: "Installation Électrique - ElectroTech",
      fournisseur: "ElectroTech",
      montant: 280000,
      montantPaye: 0,
      dateSignature: "2024-02-20",
      dateDebut: "2024-05-01",
      dateFin: "2024-11-30",
      statut: "À venir",
      projetId: "1",
      projet: "Résidence Belleville",
      typeContrat: "Fourniture & Travaux",
      conditions: "À définir",
      documents: ["Devis"],
    },
  ])

  const handleAddEngagement = (newEngagement: any) => {
    setEngagements([...engagements, { ...newEngagement, id: Date.now().toString() }])
    setIsFormOpen(false)
  }

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "En cours":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
      case "Terminé":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
      case "À venir":
        return "bg-muted text-muted-foreground"
      case "Risque":
        return "bg-destructive/20 text-destructive"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const stats = [
    {
      label: "Contrats actifs",
      value: engagements.filter((e) => e.statut === "En cours").length,
      icon: FileText,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      label: "En attente",
      value: engagements.filter((e) => e.statut === "À venir").length,
      icon: Clock,
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    },
    {
      label: "Complétés",
      value: engagements.filter((e) => e.statut === "Terminé").length,
      icon: CheckCircle,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      label: "Engagement total",
      value: `${new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }).format(engagements.reduce((sum, e) => sum + e.montant, 0))}`,
      icon: AlertCircle,
      color: "bg-primary/20 text-primary",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Engagements & Contrats</h1>
            <p className="text-muted-foreground mt-2">Gestion centralisée des contrats et obligations</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
          >
            <Plus size={20} />
            Nouveau contrat
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-4 rounded-lg ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <EngagementForm
                  onSubmit={handleAddEngagement}
                  onClose={() => setIsFormOpen(false)}
                  projets={[
                    { id: "1", nom: "Résidence Belleville" },
                    { id: "2", nom: "Centre Commercial Ouest" },
                  ]}
                />
              </div>
            </div>
          </div>
        )}

        {/* Engagements List */}
        <EngagementList engagements={engagements} />
      </div>
    </div>
  )
}
