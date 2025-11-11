import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">ProBuild</h3>
            <p className="text-primary-foreground/80 text-sm">
              La plateforme de référence pour la gestion immobilière professionnelle
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-bold">Produit</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Projets
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Budgets
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Engagements
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold">Entreprise</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                À propos
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Blog
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold">Légal</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Confidentialité
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Conditions
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors block">
                Mentions
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">© 2025 ProBuild. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
