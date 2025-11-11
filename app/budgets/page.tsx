"use client"

import { useState } from "react"
import { Plus, AlertCircle, TrendingUp, DollarSign } from "lucide-react"
import BudgetChart from "@/components/budgets/budget-chart"
import BudgetLines from "@/components/budgets/budget-lines"
import BudgetForm from "@/components/budgets/budget-form"

export default function BudgetsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [budgets, setBudgets] = useState([
    {
      id: "1",
      categorie: "Excavation & Fondations",
      budgetAlloue: 450000,
      depensesReelles: 385000,
      engagement: 45000,
      projetId: "1",
      projet: "Résidence Belleville",
    },
    {
      id: "2",
      categorie: "Structure béton",
      budgetAlloue: 680000,
      depensesReelles: 612000,
      engagement: 50000,
      projetId: "1",
      projet: "Résidence Belleville",
    },
    {
      id: "3",
      categorie: "Installation électrique",
      budgetAlloue: 280000,
      depensesReelles: 156000,
      engagement: 80000,
      projetId: "1",
      projet: "Résidence Belleville",
    },
    {
      id: "4",
      categorie: "Plomberie & CVC",
      budgetAlloue: 320000,
      depensesReelles: 248000,
      engagement: 60000,
      projetId: "1",
      projet: "Résidence Belleville",
    },
    {
      id: "5",
      categorie: "Finitions intérieures",
      budgetAlloue: 420000,
      depensesReelles: 280000,
      engagement: 100000,
      projetId: "1",
      projet: "Résidence Belleville",
    },
    {
      id: "6",
      categorie: "Aménagements externes",
      budgetAlloue: 350000,
      depensesReelles: 169000,
      engagement: 80000,
      projetId: "1",
      projet: "Résidence Belleville",
    },
  ])

  const totalBudget = budgets.reduce((sum, b) => sum + b.budgetAlloue, 0)
  const totalDépenses = budgets.reduce((sum, b) => sum + b.depensesReelles, 0)
  const totalEngagements = budgets.reduce((sum, b) => sum + b.engagement, 0)
  const pourcentageUtilise = (totalDépenses / totalBudget) * 100

  const handleAddBudget = (newBudget: any) => {
    setBudgets([...budgets, { ...newBudget, id: Date.now().toString() }])
    setIsFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Gestion des Budgets</h1>
            <p className="text-muted-foreground mt-2">Suivi détaillé des dépenses par catégorie</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
          >
            <Plus size={20} />
            Nouvelle ligne
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Budget total</p>
                <p className="text-2xl font-bold text-foreground mt-2">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  }).format(totalBudget)}
                </p>
              </div>
              <div className="bg-primary/20 p-4 rounded-lg">
                <DollarSign size={24} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Dépenses réelles</p>
                <p className="text-2xl font-bold text-foreground mt-2">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  }).format(totalDépenses)}
                </p>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <TrendingUp size={24} className="text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Engagements</p>
                <p className="text-2xl font-bold text-foreground mt-2">
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  }).format(totalEngagements)}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                <AlertCircle size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">% Utilisé</p>
                <p className="text-2xl font-bold text-foreground mt-2">{pourcentageUtilise.toFixed(1)}%</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{Math.round(pourcentageUtilise)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <BudgetForm
                  onSubmit={handleAddBudget}
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

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <BudgetChart budgets={budgets} />
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Répartition budgétaire</h2>
            <div className="space-y-4">
              {budgets.slice(0, 6).map((budget) => {
                const pourcentage = (budget.budgetAlloue / totalBudget) * 100
                return (
                  <div key={budget.id}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{budget.categorie}</span>
                      <span className="text-sm font-bold text-primary">{pourcentage.toFixed(1)}%</span>
                    </div>
                    <div className="bg-muted rounded-full h-2 overflow-hidden">
                      <div className="bg-primary h-full transition-all" style={{ width: `${pourcentage}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Budget Lines Table */}
        <BudgetLines budgets={budgets} />
      </div>
    </div>
  )
}
