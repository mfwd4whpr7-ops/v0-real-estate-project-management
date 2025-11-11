def create_app(config_name='development'):
    app = Flask(__name__)
    
    # ... existing configuration ...
    
    from app.routes.chatbot import chatbot_bp
    app.register_blueprint(chatbot_bp)
    
    
    return app
