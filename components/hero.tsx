export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-muted to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-pretty">
                Maîtrisez vos projets immobiliers
              </h1>
              <p className="text-lg text-muted-foreground">
                Une plateforme complète pour gérer vos projets, budgets et engagements en toute confiance
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium">
                Commencer gratuitement
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                Voir la démo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Projets gérés</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$2.5B+</div>
                <p className="text-sm text-muted-foreground">Budget contrôlé</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square flex items-center justify-center">
              <img
                src="/modern-office-building-construction-management.jpg"
                alt="Gestion de construction"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
