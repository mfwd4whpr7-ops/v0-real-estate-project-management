import { generateText } from "ai"

export async function POST(request: Request) {
  const { message } = await request.json()

  if (!message) {
    return Response.json({ error: "Message requis" }, { status: 400 })
  }

  try {
    // Utilisation du modèle OpenAI via l'AI Gateway de Vercel
    const { text } = await generateText({
      model: "openai/gpt-4-mini",
      system: `Tu es ProAssistant, un assistant IA expert en gestion immobilière et de projets de construction. 
      Tu aides les maîtres d'ouvrage à :
      - Gérer leurs projets immobiliers
      - Contrôler leurs budgets
      - Analyser les engagements et contrats
      - Planifier et optimiser leurs opérations
      
      Réponds de manière concise, professionnelle et en français. Si tu n'es pas sûr, demande des précisions.`,
      prompt: message,
    })

    return Response.json({ response: text })
  } catch (error) {
    console.error("Erreur API:", error)
    return Response.json({ error: "Erreur lors du traitement de votre demande" }, { status: 500 })
  }
}
