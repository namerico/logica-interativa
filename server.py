#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 5173
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

print(f"Iniciando servidor local de Lógica & Algoritmos Interativo em http://localhost:{PORT}")
print("Pressione Ctrl+C para encerrar.")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Servidor ativo: http://localhost:{PORT}")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServidor encerrado.")
    sys.exit(0)
except Exception as e:
    print(f"Erro ao iniciar servidor na porta {PORT}: {e}")
    sys.exit(1)
