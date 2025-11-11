"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import ChatBot from "@/components/chatbot/chatbot"
import { TrendingUp, DollarSign, AlertCircle, Users } from "lucide-react"

export default function DashboardPage() {
  const [showChat, setShowChat] = useState(false)

  const projectData = [
    { name: "Janvier", projets: 2, budgets: 2450000, completion: 15 },
    { name: "Février", projets: 3, budgets: 2680000, completion: 25 },
    { name: "Mars", projets: 3, budgets: 2850000, completion: 35 },
    { name: "Avril", projets: 3, budgets: 2950000, completion: 50 },
    { name: "Mai", projets: 3, budgets: 3100000, completion: 60 },
    { name: "Juin", projets: 3, budgets: 3240000, completion: 70 },
  ]

  const budgetDistribution = [
    { name: "Fondations", value: 450000 },
    { name: "Structure", value: 680000 },
    { name: "Électricité", value: 280000 },
    { name: "Plomberie", value: 320000 },
    { name: "Finitions", value: 420000 },
    { name: "Externes", value: 350000 },
  ]

  const COLORS = [
    "var(--primary)",
    "var(--accent)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
  ]

  const recentActivities = [
    { id: 1, titre: "Nouvelle facture Projet Belleville", date: "2024-11-10", type: "budget" },
    { id: 2, titre: "Contrat signé - BTP Plus", date: "2024-11-09", type: "engagement" },
    { id: 3, titre: "Projet Belleville - 65% complété", date: "2024-11-08", type: "projet" },
    { id: 4, titre: "Devis - ElectroTech validé", date: "2024-11-07", type: "budget" },
    { id: 5, titre: "Réunion de pilotage programmée", date: "2024-11-06", type: "project" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground">Tableau de bord</h1>
          <p className="text-muted-foreground mt-2">Vue d'ensemble de votre portefeuille de projets</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Projets en cours</p>
                <p className="text-3xl font-bold text-foreground mt-2">3</p>
              </div>
              <div className="bg-primary/20 p-4 rounded-lg">
                <TrendingUp size={24} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Budget total</p>
                <p className="text-2xl font-bold text-foreground mt-2">15.8M €</p>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <DollarSign size={24} className="text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Contrats actifs</p>
                <p className="text-3xl font-bold text-foreground mt-2">12</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                <AlertCircle size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Équipe</p>
                <p className="text-3xl font-bold text-foreground mt-2">47</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                <Users size={24} className="text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Evolution */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Évolution mensuelle</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    color: "var(--foreground)",
                  }}
                />
                <Line type="monotone" dataKey="completion" stroke="var(--primary)" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Budget Distribution */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Répartition budgétaire</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => entry.name}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    color: "var(--foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Activités récentes</h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 ${
                      activity.type === "budget"
                        ? "bg-accent"
                        : activity.type === "engagement"
                          ? "bg-primary"
                          : "bg-green-600 dark:bg-green-400"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.titre}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Widget */}
          <div>
            <button
              onClick={() => setShowChat(true)}
              className="w-full h-full min-h-96 bg-gradient-to-br from-primary to-accent rounded-2xl text-white p-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow border border-primary/50"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-center mb-2">Besoin d'aide ?</h3>
              <p className="text-primary-foreground/80 text-center text-sm">Cliquez pour utiliser l'assistant IA</p>
            </button>
          </div>
        </div>
      </div>

      {/* Chatbot Modal */}
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
    </div>
  )
}
