# Plataforma Interativa de Lógica & Algoritmos

Ambiente prático focado em fixação ativa de memória (Active Recall), com execução de código direto no navegador e testes de mesa visuais.

## Como Executar

Para abrir no navegador, basta rodar o servidor local incluído:

```bash
cd "/home/namerico/Documentos/Projetos Antigravity/logica-interativa"
python3 server.py
```

Em seguida, acesse no navegador:
`http://localhost:5173`

Ou simplesmente abra o arquivo `index.html` com dois cliques ou pelo seu navegador preferido.

---

## Funcionalidades Implementadas

1. **Editor de Código Integrado (CodeMirror):** Suporte nativo para **Python** e **JavaScript**, com atalhos, realce de sintaxe e autocompletar.
2. **Motor WebAssembly de Python (Pyodide):** Executa código Python 3.11 real diretamente no navegador, sem precisar instalar nada na máquina ou ter servidor backend.
3. **Teste de Mesa em Tempo Real:** Mostra visualmente as caixas de memória com as variáveis criadas pelo seu código e seus respectivos valores.
4. **Active Recall (Recuperação Ativa):** Antes de programar, você responde a um desafio de previsão mental sobre o que a instrução fará.
5. **Casos de Teste Estilo Beecrowd / LeetCode:** Validação de saída esperada vs saída real.
6. **Persistência no LocalStorage:** Suas respostas e lições concluídas ficam salvas na memória do seu navegador.

---

## Como Adicionar Mais Lições

Abra o arquivo `lessons.js` e adicione novos objetos na lista `LESSONS_DATA` seguindo a estrutura padrão de lições.
