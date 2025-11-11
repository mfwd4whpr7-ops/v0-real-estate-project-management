import ProjetCard from "./projet-card"

export default function ProjetList({ projets }: { projets: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projets.map((projet) => (
        <ProjetCard key={projet.id} projet={projet} />
      ))}
    </div>
  )
}
