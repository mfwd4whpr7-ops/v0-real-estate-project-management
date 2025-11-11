const features = [
  {
    icon: "📊",
    title: "Gestion des Projets",
    description: "Suivi complet des projets immobiliers avec jalons, ressources et calendrier",
  },
  {
    icon: "💰",
    title: "Budgets Maîtrisés",
    description: "Contrôle précis des coûts avec alertes automatiques et reportages détaillés",
  },
  {
    icon: "📋",
    title: "Engagements",
    description: "Gestion des contrats et obligations avec signatures électroniques",
  },
  {
    icon: "🤖",
    title: "Assistant IA",
    description: "Chatbot intelligent pour vos questions et analyses rapides",
  },
  {
    icon: "🔐",
    title: "Sécurité",
    description: "Chiffrement de bout en bout et conformité avec les normes professionnelles",
  },
  {
    icon: "📱",
    title: "Accès Mobile",
    description: "Consultez vos projets de n'importe où, sur tous vos appareils",
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-pretty">Fonctionnalités complètes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer vos projets immobiliers avec efficacité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
