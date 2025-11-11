import { AlertCircle } from "lucide-react"

export default function BudgetLines({ budgets }: { budgets: any[] }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Lignes budgétaires détaillées</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Catégorie</th>
              <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">Budget</th>
              <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">Dépenses</th>
              <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">Engagements</th>
              <th className="text-right py-4 px-4 text-sm font-semibold text-muted-foreground">Reste</th>
              <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Statut</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
              const total = budget.depensesReelles + budget.engagement
              const reste = budget.budgetAlloue - total
              const pourcentage = (total / budget.budgetAlloue) * 100
              const alerte = reste < budget.budgetAlloue * 0.1

              return (
                <tr key={budget.id} className={`border-b border-border ${index % 2 === 0 ? "bg-muted/30" : ""}`}>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">{budget.categorie}</div>
                    <div className="text-sm text-muted-foreground">{budget.projet}</div>
                  </td>
                  <td className="text-right py-4 px-4 font-medium text-foreground">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(budget.budgetAlloue)}
                  </td>
                  <td className="text-right py-4 px-4 font-medium text-foreground">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(budget.depensesReelles)}
                  </td>
                  <td className="text-right py-4 px-4 font-medium text-blue-600 dark:text-blue-400">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(budget.engagement)}
                  </td>
                  <td
                    className={`text-right py-4 px-4 font-medium ${alerte ? "text-destructive" : "text-green-600 dark:text-green-400"}`}
                  >
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(reste)}
                  </td>
                  <td className="text-center py-4 px-4">
                    {alerte && (
                      <div className="flex justify-center">
                        <AlertCircle size={20} className="text-destructive" />
                      </div>
                    )}
                    {!alerte && (
                      <div className="flex justify-center">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full" />
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
