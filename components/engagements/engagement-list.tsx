import EngagementCard from "./engagement-card"

export default function EngagementList({ engagements }: { engagements: any[] }) {
  // Grouper par statut
  const byStatus = {
    "En cours": engagements.filter((e) => e.statut === "En cours"),
    "À venir": engagements.filter((e) => e.statut === "À venir"),
    Terminé: engagements.filter((e) => e.statut === "Terminé"),
  }

  return (
    <div className="space-y-12">
      {Object.entries(byStatus).map(
        ([status, items]) =>
          items.length > 0 && (
            <div key={status}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{status}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((engagement) => (
                  <EngagementCard key={engagement.id} engagement={engagement} />
                ))}
              </div>
            </div>
          ),
      )}
    </div>
  )
}
