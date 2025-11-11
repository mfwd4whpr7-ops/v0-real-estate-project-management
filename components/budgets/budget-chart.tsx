"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function BudgetChart({ budgets }: { budgets: any[] }) {
  const data = budgets.map((budget) => ({
    name: budget.categorie.substring(0, 12) + "...",
    Budget: budget.budgetAlloue,
    Dépenses: budget.depensesReelles,
    Engagements: budget.engagement,
  }))

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Comparaison budgétaire</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Legend />
          <Bar dataKey="Budget" fill="var(--primary)" />
          <Bar dataKey="Dépenses" fill="var(--accent)" />
          <Bar dataKey="Engagements" fill="var(--chart-2)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
