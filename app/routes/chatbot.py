from flask import Blueprint, render_template, request, jsonify, current_app
from flask_login import login_required
import os

# Import AI SDK
try:
    from ai import generateText
except ImportError:
    # Fallback si la librairie n'est pas installée
    generateText = None

chatbot_bp = Blueprint('chatbot', __name__, url_prefix='/api/chatbot')

@chatbot_bp.route('/chat', methods=['POST'])
@login_required
def chat():
    """
    Endpoint pour communiquer avec le chatbot IA.
    Envoie un message et reçoit une réponse intelligente basée sur le contexte immobilier.
    """
    data = request.get_json()
    message = data.get('message', '').strip()
    
    if not message:
        return jsonify({'error': 'Message vide'}), 400
    
    try:
        # Construire le contexte pour l'IA
        system_prompt = """Tu es ProAssistant, un assistant IA spécialisé en gestion de projets immobiliers.
Tu aides les maîtres d'ouvrage avec :
- La gestion des budgets et dépenses
- Le suivi des projets et jalons
- La gestion des contrats et engagements
- Les factures et paiements
- Les prévisions de trésorerie

Réponds toujours en français, de manière claire et professionnelle.
Propose des solutions pratiques et directes.
Si tu ne sais pas, dis-le honnêtement."""

        # Appeler l'API OpenAI via Vercel AI SDK
        if generateText:
            response = generateText({
                'model': 'openai/gpt-3.5-turbo',
                'messages': [
                    {'role': 'system', 'content': system_prompt},
                    {'role': 'user', 'content': message}
                ],
                'max_tokens': 500,
                'temperature': 0.7
            })
            
            assistant_message = response.get('text', 'Impossible de générer une réponse.')
        else:
            # Réponse de secours si l'API n'est pas disponible
            assistant_message = f"ProAssistant: J'ai reçu votre message: '{message}'. L'API IA n'est pas configurée actuellement."
        
        return jsonify({
            'success': True,
            'message': assistant_message,
            'timestamp': request.remote_addr
        })
    
    except Exception as e:
        current_app.logger.error(f"Chatbot error: {str(e)}")
        return jsonify({
            'error': 'Erreur lors du traitement de votre message',
            'details': str(e)
        }), 500


@chatbot_bp.route('/health', methods=['GET'])
def health():
    """Vérifier l'état du service chatbot"""
    return jsonify({
        'status': 'ok',
        'service': 'chatbot',
        'ai_available': generateText is not None
    })
