// Banco de Lições e Desafios Práticos de Lógica de Programação
const LESSONS_DATA = [
  // ==========================================
  // MÓDULO 1: FUNDAÇÕES E CAIXAS DE MEMÓRIA
  // ==========================================
  {
    id: "mod1_les1",
    modulo: "Módulo 1: Fundações e Caixas de Memória",
    titulo: "1. Seu Primeiro Código e Saída de Dados",
    descricaoCurta: "Como fazer o computador exibir mensagens na tela.",
    conceito: `
      Programar é dar instruções precisas para a máquina. A instrução mais básica de qualquer linguagem é a <strong>saída de dados</strong>, usada para exibir uma mensagem ou resultado na tela.
      <br><br>
      Em <strong>Python</strong>, utilizamos a função <code>print()</code>.<br>
      Em <strong>JavaScript</strong>, utilizamos <code>console.log()</code>.
    `,
    analogia: "Pense na função de saída como o visor digital de uma calculadora: ela recebe o valor calculado e mostra para quem está operando.",
    exemploCodigo: {
      python: `# Exibindo texto na tela\nprint("Olá, Mundo!")\nprint(42)`,
      javascript: `// Exibindo texto na tela\nconsole.log("Olá, Mundo!");\nconsole.log(42);`
    },
    previsao: {
      pergunta: "Se executarmos print(5 + 3), o que aparecerá no visor?",
      opcoes: ["5 + 3", "8", "53"],
      correta: 1,
      explicacao: "Sem aspas, a linguagem calcula a expressão matemática antes de exibir o resultado (5 + 3 = 8)."
    },
    enunciado: "Escreva um programa que exiba exatamente a frase <code>Estou aprendendo lógica!</code>.<br><span class='text-xs text-amber-300'>Nota: Não inclua a palavra 'no terminal' dentro das aspas do seu código.</span>",
    codigoInicial: {
      python: `# Escreva seu código abaixo\n`,
      javascript: `// Escreva seu código abaixo\n`
    },
    dica: "Lembre-se de colocar apenas o texto entre aspas dentro da função: print(\"Estou aprendendo lógica!\")",
    casosDeTeste: [
      {
        nome: "Exibir frase correta",
        entrada: "",
        saidaEsperada: "Estou aprendendo lógica!"
      }
    ]
  },
  {
    id: "mod1_les2",
    modulo: "Módulo 1: Fundações e Caixas de Memória",
    titulo: "2. Variáveis: Caixas de Memória e Cálculos",
    descricaoCurta: "Guardando informações para usar e calcular depois.",
    conceito: `
      Uma <strong>variável</strong> é como uma caixa etiquetada na memória do computador. Você dá um nome a ela e guarda um valor dentro.
      <br><br>
      O sinal de igual (<code>=</code>) em programação significa <strong>atribuição</strong> (guardar dentro), e não igualdade matemática.
    `,
    analogia: "Se você tem uma gaveta com a etiqueta 'meias' e coloca 3 pares lá dentro, o nome da gaveta é a variável e o número 3 é o conteúdo.",
    exemploCodigo: {
      python: `preco = 10\nquantidade = 4\ntotal = preco * quantidade\nprint(total)`,
      javascript: `let preco = 10;\nlet quantidade = 4;\nlet total = preco * quantidade;\nconsole.log(total);`
    },
    previsao: {
      pergunta: "Se x = 10 e depois fizermos x = x + 5, quanto vale x no final?",
      opcoes: ["10", "15", "Erro de sintaxe"],
      correta: 1,
      explicacao: "O computador pega o valor atual de x (10), soma 5 (ficando 15) e guarda novamente dentro de x."
    },
    enunciado: "Crie duas variáveis chamadas <code>nota1 = 8</code> e <code>nota2 = 6</code>. Calcule a média simples e imprima o resultado na tela.",
    codigoInicial: {
      python: `nota1 = 8\nnota2 = 6\n\n# Calcule a media com parenteses na soma e exiba com print\n`,
      javascript: `let nota1 = 8;\nlet nota2 = 6;\n\n// Calcule a media com parenteses na soma e exiba com console.log\n`
    },
    dica: "A média é a soma das duas notas dividida por 2: (nota1 + nota2) / 2. Lembre de fechar os parênteses!",
    casosDeTeste: [
      {
        nome: "Cálculo da Média",
        entrada: "",
        saidaEsperada: "7"
      }
    ]
  },

  // ==========================================
  // MÓDULO 2: TOMADA DE DECISÃO (CONDICIONAIS)
  // ==========================================
  {
    id: "mod2_les1",
    modulo: "Módulo 2: Tomada de Decisão (Condicionais)",
    titulo: "3. Decisões Simples com IF e ELSE",
    descricaoCurta: "Ensinando o computador a escolher caminhos diferentes.",
    conceito: `
      Programas inteligentes tomam decisões com base em condições lógicas. Se a condição for verdadeira, um bloco de código executa; caso contrário, executa o bloco alternativo.
      <br><br>
      O operador de resto da divisão (<code>%</code>) é muito comum: <code>n % 2 == 0</code> verifica se um número é par.
    `,
    analogia: "É como uma cancela automática de pedágio: SE a tag foi paga, abre a cancela; SENÃO, acende a luz vermelha.",
    exemploCodigo: {
      python: `idade = 20\nif idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")`,
      javascript: `let idade = 20;\nif (idade >= 18) {\n    console.log("Maior de idade");\n} else {\n    console.log("Menor de idade");\n}`
    },
    previsao: {
      pergunta: "Qual é o resultado da expressão 7 % 2 == 0?",
      opcoes: ["True (Verdadeiro)", "False (Falso)", "3.5"],
      correta: 1,
      explicacao: "7 dividido por 2 dá 3 com resto 1. Como 1 não é igual a 0, o resultado é Falso (ímpar)."
    },
    enunciado: "Dado o número na variável <code>numero = 14</code>, verifique se ele é par ou ímpar. Se for par, exiba <code>PAR</code>; se for ímpar, exiba <code>IMPAR</code>.",
    codigoInicial: {
      python: `numero = 14\n\n# Verifique se eh par ou impar e exiba o resultado\n`,
      javascript: `let numero = 14;\n\n// Verifique se eh par ou impar e exiba o resultado\n`
    },
    dica: "Use if (numero % 2 == 0) para checar se o número é divisível por 2 sem deixar resto.",
    casosDeTeste: [
      {
        nome: "Número Par",
        entrada: "numero = 14",
        saidaEsperada: "PAR"
      }
    ]
  },
  {
    id: "mod2_les2",
    modulo: "Módulo 2: Tomada de Decisão (Condicionais)",
    titulo: "4. Desafio Real: Identificando o Chá",
    descricaoCurta: "O clássico desafio de contagem de acertos em competição.",
    conceito: `
      Neste problema clássico de olimpíada, um tipo correto de chá é definido (número de 1 a 4). Em seguida, cinco competidores dão seus palpites.
      <br><br>
      Seu objetivo é contar quantos competidores acertaram o tipo exato do chá.
    `,
    analogia: "Imagine um sorteio onde o número sorteado foi 1. Você confere uma cartela com 5 palpites e marca um ponto para cada palpite igual a 1.",
    exemploCodigo: {
      python: `correto = 1\npalpites = [1, 2, 3, 2, 1]\nacertos = 0\nfor p in palpites:\n    if p == correto:\n        acertos += 1\nprint(acertos)`,
      javascript: `let correto = 1;\nlet palpites = [1, 2, 3, 2, 1];\nlet acertos = 0;\nfor (let p of palpites) {\n    if (p === correto) acertos++;\n}\nconsole.log(acertos);`
    },
    previsao: {
      pergunta: "Se o chá real for 3 e os palpites forem [4, 1, 1, 2, 1], quantos acertaram?",
      opcoes: ["0", "1", "3"],
      correta: 0,
      explicacao: "Nenhum participante palpitou o número 3, logo a quantidade de acertos é zero."
    },
    enunciado: "Dadas as variáveis <code>tipo_correto = 1</code> e a lista <code>palpites = [1, 2, 3, 2, 1]</code>, conte quantos competidores acertaram e imprima o total.",
    codigoInicial: {
      python: `tipo_correto = 1\npalpites = [1, 2, 3, 2, 1]\nacertos = 0\n\n# Conte quantos palpites sao iguais ao tipo_correto\n\nprint(acertos)\n`,
      javascript: `let tipo_correto = 1;\nlet palpites = [1, 2, 3, 2, 1];\nlet acertos = 0;\n\n// Conte quantos palpites sao iguais ao tipo_correto\n\nconsole.log(acertos);\n`
    },
    dica: "Você pode percorrer a lista com um laço for e usar uma condição if para incrementar a variável acertos.",
    casosDeTeste: [
      {
        nome: "Exemplo 1 (Dois acertos)",
        entrada: "tipo_correto = 1; palpites = [1, 2, 3, 2, 1]",
        saidaEsperada: "2"
      }
    ]
  },

  // ==========================================
  // MÓDULO 3: REPETIÇÕES E LAÇOS
  // ==========================================
  {
    id: "mod3_les1",
    modulo: "Módulo 3: Repetições e Laços",
    titulo: "5. Laços de Repetição: Contagem e Somatório",
    descricaoCurta: "Automatizando tarefas repetitivas sem duplicar código.",
    conceito: `
      Em vez de escrever a mesma instrução dez vezes, usamos laços de repetição como <code>for</code> ou <code>while</code>.
      <br><br>
      Um padrão essencial em algoritmos é o <strong>acumulador</strong>: uma variável que começa em zero e vai somando valores a cada volta do laço.
    `,
    analogia: "O acumulador funciona exatamente como um cofrinho: você começa com zero moedas e a cada dia coloca um valor lá dentro.",
    exemploCodigo: {
      python: `soma = 0\nfor i in range(1, 6):\n    soma += i\nprint(soma)  # Soma de 1 a 5 = 15`,
      javascript: `let soma = 0;\nfor (let i = 1; i <= 5; i++) {\n    soma += i;\n}\nconsole.log(soma); // Soma de 1 a 5 = 15`
    },
    previsao: {
      pergunta: "Qual é o valor final de soma se somarmos os números de 1 até 4?",
      opcoes: ["10", "4", "14"],
      correta: 0,
      explicacao: "1 + 2 + 3 + 4 = 10."
    },
    enunciado: "Calcule a soma de todos os números inteiros de 1 até 10 (inclusive) e exiba o resultado final na tela.",
    codigoInicial: {
      python: `soma = 0\n# Use um loop for para somar de 1 a 10\n\nprint(soma)\n`,
      javascript: `let soma = 0;\n// Use um loop for para somar de 1 a 10\n\nconsole.log(soma);\n`
    },
    dica: "Em Python use range(1, 11). Em JavaScript use for (let i = 1; i <= 10; i++).",
    casosDeTeste: [
      {
        nome: "Soma de 1 a 10",
        entrada: "",
        saidaEsperada: "55"
      }
    ]
  },

  // ==========================================
  // MÓDULO 4: VETORES E LISTAS
  // ==========================================
  {
    id: "mod4_les1",
    modulo: "Módulo 4: Vetores e Listas",
    titulo: "6. Vetores: Encontrando o Maior Valor",
    descricaoCurta: "Varrendo uma lista de dados para encontrar o elemento campeão.",
    conceito: `
      Encontrar o maior ou menor elemento de um conjunto é um dos algoritmos fundamentais da computação.
      <br><br>
      A estratégia padrão é assumir que o primeiro elemento é o maior até o momento, e depois comparar com cada elemento subsequente.
    `,
    analogia: "Imagine segurar uma régua de medição: você olha a primeira pessoa da fila e anota a altura dela. A cada nova pessoa que passar, se ela for mais alta, você apaga a anterior e anota a nova.",
    exemploCodigo: {
      python: `valores = [15, 82, 43, 91, 27]\nmaior = valores[0]\nfor v in valores:\n    if v > maior:\n        maior = v\nprint(maior)  # 91`,
      javascript: `let valores = [15, 82, 43, 91, 27];\nlet maior = valores[0];\nfor (let v of valores) {\n    if (v > maior) maior = v;\n}\nconsole.log(maior); // 91`
    },
    previsao: {
      pergunta: "Por que começamos com maior = valores[0] em vez de maior = 0?",
      opcoes: [
        "Porque valores[0] sempre é o maior",
        "Para funcionar mesmo se todos os números da lista forem negativos",
        "Por mera convenção estética"
      ],
      correta: 1,
      explicacao: "Se todos os números forem negativos (ex: -10, -50, -5) e você começar com 0, o programa diria erroneamente que 0 é o maior."
    },
    enunciado: "Dada a lista <code>numeros = [34, 12, 89, 45, 67]</code>, encontre e imprima o maior valor presente nela.",
    codigoInicial: {
      python: `numeros = [34, 12, 89, 45, 67]\nmaior = numeros[0]\n# Percorra a lista e atualize a variavel maior\n\nprint(maior)\n`,
      javascript: `let numeros = [34, 12, 89, 45, 67];\nlet maior = numeros[0];\n// Percorra a lista e atualize a variavel maior\n\nconsole.log(maior);\n`
    },
    dica: "A cada volta do laço, teste: se o número atual for maior que a variável maior, atualize: maior = número atual.",
    casosDeTeste: [
      {
        nome: "Maior da lista",
        entrada: "numeros = [34, 12, 89, 45, 67]",
        saidaEsperada: "89"
      }
    ]
  },
  {
    id: "mod4_les2",
    modulo: "Módulo 4: Vetores e Listas",
    titulo: "7. Vetores: Média Geral dos Elementos",
    descricaoCurta: "Somando todos os itens e dividindo pela quantidade total.",
    conceito: `
      Calcular a média de uma lista é a combinação perfeita entre um <strong>acumulador de soma</strong> e o tamanho do vetor.
      <br><br>
      Em Python, descobrimos a quantidade de itens com <code>len(lista)</code>.<br>
      Em JavaScript, utilizamos <code>lista.length</code>.
    `,
    analogia: "É como calcular a média de consumo do seu carro anotando os gastos de 4 viagens e dividindo a soma total por 4.",
    exemploCodigo: {
      python: `dados = [10, 20, 30]\nsoma = 0\nfor x in dados:\n    soma += x\nmedia = soma / len(dados)\nprint(media) # 20.0`,
      javascript: `let dados = [10, 20, 30];\nlet soma = 0;\nfor (let x of dados) soma += x;\nlet media = soma / dados.length;\nconsole.log(media); // 20`
    },
    previsao: {
      pergunta: "Se temos lista = [5, 15], quanto vale soma / len(lista)?",
      opcoes: ["10", "20", "5"],
      correta: 0,
      explicacao: "A soma é 5 + 15 = 20. Como há 2 elementos, 20 / 2 = 10."
    },
    enunciado: "Dada a lista <code>notas = [7.5, 8.0, 6.5, 10.0]</code>, calcule e exiba a média aritmética de todas as notas.",
    codigoInicial: {
      python: `notas = [7.5, 8.0, 6.5, 10.0]\nsoma = 0\n\n# Some todas as notas e divida pela quantidade\n\n`,
      javascript: `let notas = [7.5, 8.0, 6.5, 10.0];\nlet soma = 0;\n\n// Some todas as notas e divida pela quantidade\n\n`
    },
    dica: "Some cada item em uma variável acumuladora e no final divida pelo tamanho da lista (len(notas) ou notas.length).",
    casosDeTeste: [
      {
        nome: "Média das 4 notas",
        entrada: "notas = [7.5, 8.0, 6.5, 10.0]",
        saidaEsperada: "8"
      }
    ]
  },
  {
    id: "mod4_les3",
    modulo: "Módulo 4: Vetores e Listas",
    titulo: "8. Vetores: Filtrando e Contando Números Pares",
    descricaoCurta: "Percorrendo uma lista e contabilizando itens que atendem a um filtro.",
    conceito: `
      Muitas vezes não queremos todos os dados, apenas os que atendem a um critério. Para isso, colocamos uma estrutura <code>if</code> dentro do laço <code>for</code>.
      <br><br>
      A cada elemento analisado, se ele atender à regra, incrementamos nosso contador: <code>total_pares += 1</code>.
    `,
    analogia: "Imagine um fiscal aduaneiro conferindo uma esteira de malas: ele olha mala por mala e só conta quantas são vermelhas.",
    exemploCodigo: {
      python: `nums = [3, 8, 12, 7, 2]\npares = 0\nfor n in nums:\n    if n % 2 == 0:\n        pares += 1\nprint(pares) # 3`,
      javascript: `let nums = [3, 8, 12, 7, 2];\nlet pares = 0;\nfor (let n of nums) {\n    if (n % 2 === 0) pares++;\n}\nconsole.log(pares); // 3`
    },
    previsao: {
      pergunta: "Quantos números pares existem na lista [11, 23, 44, 55, 60]?",
      opcoes: ["2", "3", "1"],
      correta: 0,
      explicacao: "Apenas 44 e 60 são divisíveis por 2, portanto são 2 números pares."
    },
    enunciado: "Dada a lista <code>valores = [14, 21, 32, 45, 50, 77, 88]</code>, conte quantos números são pares e imprima o total.",
    codigoInicial: {
      python: `valores = [14, 21, 32, 45, 50, 77, 88]\npares = 0\n\n# Percorra a lista e conte os elementos pares\n\nprint(pares)\n`,
      javascript: `let valores = [14, 21, 32, 45, 50, 77, 88];\nlet pares = 0;\n\n// Percorra a lista e conte os elementos pares\n\nconsole.log(pares);\n`
    },
    dica: "Dentro do laço, use if (n % 2 == 0) para verificar se o número atual é par.",
    casosDeTeste: [
      {
        nome: "Contagem de pares",
        entrada: "valores = [14, 21, 32, 45, 50, 77, 88]",
        saidaEsperada: "4"
      }
    ]
  },
  {
    id: "mod4_les4",
    modulo: "Módulo 4: Vetores e Listas",
    titulo: "9. Vetores: Busca de Posição (Índice)",
    descricaoCurta: "Descobrindo em qual gaveta da memória um item está guardado.",
    conceito: `
      Cada elemento em um vetor possui um <strong>índice</strong> (sua posição numérica). Na grande maioria das linguagens, os índices começam sempre do <strong>zero</strong>.
      <br><br>
      Podemos percorrer os índices usando <code>range(len(lista))</code> em Python ou um contador tradicional em JavaScript.
    `,
    analogia: "Imagine um armário com escaninhos numerados de 0 a 4. Para achar uma encomenda específica, você abre cada portinha até achar o item e anota o número da porta.",
    exemploCodigo: {
      python: `nomes = ["Ana", "Bruno", "Carla"]\nfor i in range(len(nomes)):\n    if nomes[i] == "Bruno":\n        print("Encontrado no indice:", i) # 1`,
      javascript: `let nomes = ["Ana", "Bruno", "Carla"];\nfor (let i = 0; i < nomes.length; i++) {\n    if (nomes[i] === "Bruno") {\n        console.log("Encontrado no indice:", i); // 1\n    }\n}`
    },
    previsao: {
      pergunta: "Em letras = ['A', 'B', 'C', 'D'], qual é o índice da letra 'C'?",
      opcoes: ["2", "3", "1"],
      correta: 0,
      explicacao: "'A' está no índice 0, 'B' no 1 e 'C' no 2."
    },
    enunciado: "Na lista <code>codigos = [102, 305, 508, 701, 999]</code>, encontre o índice da posição onde está o valor <code>508</code> e imprima apenas o número desse índice.",
    codigoInicial: {
      python: `codigos = [102, 305, 508, 701, 999]\nalvo = 508\nposicao = -1\n\n# Encontre a posicao onde codigos[i] == alvo\n\nprint(posicao)\n`,
      javascript: `let codigos = [102, 305, 508, 701, 999];\nlet alvo = 508;\nlet posicao = -1;\n\n// Encontre a posicao onde codigos[i] == alvo\n\nconsole.log(posicao);\n`
    },
    dica: "Use um for com índice (for i in range(len(codigos))). Quando codigos[i] for igual ao alvo, guarde i na variável posicao.",
    casosDeTeste: [
      {
        nome: "Posição do código 508",
        entrada: "codigos = [102, 305, 508, 701, 999]; alvo = 508",
        saidaEsperada: "2"
      }
    ]
  },
  {
    id: "mod4_les5",
    modulo: "Módulo 4: Vetores e Listas",
    titulo: "10. Vetores: Invertendo a Ordem dos Itens",
    descricaoCurta: "Construindo uma nova lista com os elementos de trás para frente.",
    conceito: `
      Inverter uma lista é um clássico exercício de manipulação de coleções. Podemos criar uma nova lista vazia e inserir cada elemento no início, ou percorrer a lista original da última posição até a primeira.
    `,
    analogia: "Pense em empilhar cartas de baralho: se você pegar carta por carta do topo e colocar em um novo monte, a ordem final ficará exatamente invertida.",
    exemploCodigo: {
      python: `original = [1, 2, 3]\ninvertida = []\nfor x in original:\n    invertida = [x] + invertida\nprint(invertida) # [3, 2, 1]`,
      javascript: `let original = [1, 2, 3];\nlet invertida = [];\nfor (let x of original) {\n    invertida.unshift(x);\n}\nconsole.log(invertida); // [3, 2, 1]`
    },
    previsao: {
      pergunta: "Se invertermos [10, 20, 30], qual será o primeiro elemento da nova lista?",
      opcoes: ["30", "10", "20"],
      correta: 0,
      explicacao: "O elemento do final (30) passará a ser o primeiro elemento da nova lista."
    },
    enunciado: "Dada a lista <code>fila = [10, 20, 30, 40]</code>, crie e imprima a lista invertida com os elementos na ordem inversa.",
    codigoInicial: {
      python: `fila = [10, 20, 30, 40]\ninvertida = []\n\n# Preencha a lista invertida e exiba\n\nprint(invertida)\n`,
      javascript: `let fila = [10, 20, 30, 40];\nlet invertida = [];\n\n// Preencha a lista invertida e exiba\n\nconsole.log(invertida);\n`
    },
    dica: "Em Python você pode fazer invertida = fila[::-1] ou usar um loop for adicionando no início.",
    casosDeTeste: [
      {
        nome: "Inverter [10, 20, 30, 40]",
        entrada: "fila = [10, 20, 30, 40]",
        saidaEsperada: "[40, 30, 20, 10]"
      }
    ]
  },

  // ==========================================
  // MÓDULO 5: MATRIZES (TABELAS BIDIMENSIONAIS)
  // ==========================================
  {
    id: "mod5_les1",
    modulo: "Módulo 5: Matrizes (Tabelas Bidimensionais)",
    titulo: "11. Matrizes: Linhas e Colunas",
    descricaoCurta: "Estruturas bidimensionais formadas por vetores dentro de vetores.",
    conceito: `
      Uma <strong>matriz</strong> é uma tabela com linhas e colunas. Em código, representamos como uma lista onde cada item é outra lista.
      <br><br>
      Para acessar um elemento, usamos dois pares de colchetes: <code>matriz[linha][coluna]</code>. O primeiro indica a linha e o segundo a coluna.
    `,
    analogia: "Pense em uma planilha do Excel ou no jogo de Batalha Naval: você precisa cruzar a linha com a coluna para achar a coordenada certa.",
    exemploCodigo: {
      python: `tabela = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n# Linha 0, Coluna 1\nprint(tabela[0][1]) # 2`,
      javascript: `let tabela = [\n    [1, 2, 3],\n    [4, 5, 6]\n];\n// Linha 0, Coluna 1\nconsole.log(tabela[0][1]); // 2`
    },
    previsao: {
      pergunta: "Em m = [[10, 20], [30, 40]], quanto vale m[1][0]?",
      opcoes: ["30", "20", "10"],
      correta: 0,
      explicacao: "Linha 1 é [30, 40]. A coluna 0 dessa linha é o número 30."
    },
    enunciado: "Dada a matriz 3x3 <code>grade = [[5, 8, 2], [1, 9, 4], [7, 3, 6]]</code>, imprima exatamente o número que está no centro da matriz (linha 1, coluna 1).",
    codigoInicial: {
      python: `grade = [\n    [5, 8, 2],\n    [1, 9, 4],\n    [7, 3, 6]\n]\n\n# Imprima o elemento central da matriz\n`,
      javascript: `let grade = [\n    [5, 8, 2],\n    [1, 9, 4],\n    [7, 3, 6]\n];\n\n// Imprima o elemento central da matriz\n`
    },
    dica: "Acesse usando grade[1][1] e imprima com a função de saída.",
    casosDeTeste: [
      {
        nome: "Elemento central da matriz",
        entrada: "",
        saidaEsperada: "9"
      }
    ]
  },
  {
    id: "mod5_les2",
    modulo: "Módulo 5: Matrizes (Tabelas Bidimensionais)",
    titulo: "12. Matrizes: Soma da Diagonal Principal",
    descricaoCurta: "O clássico cálculo onde o índice da linha é igual ao da coluna.",
    conceito: `
      Em uma matriz quadrada (com mesmo número de linhas e colunas), a <strong>diagonal principal</strong> é formada pelos elementos onde <code>linha == coluna</code> (ou seja: [0][0], [1][1], [2][2]...).
    `,
    analogia: "É como riscar uma linha diagonal de ponta a ponta no tabuleiro de xadrez: do canto superior esquerdo até o canto inferior direito.",
    exemploCodigo: {
      python: `m = [\n    [3, 0],\n    [0, 5]\n]\nsoma_diag = 0\nfor i in range(len(m)):\n    soma_diag += m[i][i]\nprint(soma_diag) # 3 + 5 = 8`,
      javascript: `let m = [\n    [3, 0],\n    [0, 5]\n];\nlet soma_diag = 0;\nfor (let i = 0; i < m.length; i++) {\n    soma_diag += m[i][i];\n}\nconsole.log(soma_diag); // 8`
    },
    previsao: {
      pergunta: "Para somar a diagonal principal de uma matriz NxN, quantos loops for precisamos?",
      opcoes: ["Apenas 1 loop", "Obrigatoriamente 2 loops", "Nenhum loop"],
      correta: 0,
      explicacao: "Como linha e coluna têm o mesmo índice (i), basta um único for acessando m[i][i]."
    },
    enunciado: "Dada a matriz <code>m = [[2, 5, 1], [4, 6, 8], [9, 3, 7]]</code>, calcule e imprima a soma dos elementos da diagonal principal (2 + 6 + 7).",
    codigoInicial: {
      python: `m = [\n    [2, 5, 1],\n    [4, 6, 8],\n    [9, 3, 7]\n]\nsoma = 0\n\n# Some os elementos m[i][i] e exiba a soma\n\nprint(soma)\n`,
      javascript: `let m = [\n    [2, 5, 1],\n    [4, 6, 8],\n    [9, 3, 7]\n];\nlet soma = 0;\n\n// Some os elementos m[i][i] e exiba a soma\n\nconsole.log(soma);\n`
    },
    dica: "Percorra de i = 0 até 2 e acumule m[i][i] na variável soma.",
    casosDeTeste: [
      {
        nome: "Soma da diagonal (2+6+7)",
        entrada: "",
        saidaEsperada: "15"
      }
    ]
  },

  // ==========================================
  // MÓDULO 6: FUNÇÕES E MODULARIZAÇÃO
  // ==========================================
  {
    id: "mod6_les1",
    modulo: "Módulo 6: Funções e Modularização",
    titulo: "13. Funções: Blocos com Parâmetros e Retorno",
    descricaoCurta: "Isolando raciocínios para reaproveitar código com facilidade.",
    conceito: `
      Uma <strong>função</strong> é um bloco de código nomeado que recebe dados de entrada (<strong>parâmetros</strong>), executa um cálculo e devolve um resultado através da palavra-chave <code>return</code>.
    `,
    analogia: "Um liquidificador: você coloca os ingredientes dentro (parâmetros), ele processa a receita e devolve o suco pronto para beber (retorno).",
    exemploCodigo: {
      python: `def dobro(n):\n    return n * 2\n\nresultado = dobro(7)\nprint(resultado) # 14`,
      javascript: `function dobro(n) {\n    return n * 2;\n}\n\nlet resultado = dobro(7);\nconsole.log(resultado); // 14`
    },
    previsao: {
      pergunta: "Qual é a diferença entre 'print' e 'return'?",
      opcoes: [
        "print apenas mostra na tela; return devolve o dado para o programa continuar usando",
        "São exatamente a mesma coisa com nomes diferentes",
        "return só funciona com texto"
      ],
      correta: 0,
      explicacao: "print exibe no console para o ser humano ler; return passa o valor de volta para quem chamou a função."
    },
    enunciado: "Crie uma função chamada <code>eh_positivo(num)</code> que retorna <code>True</code> se o número for maior que zero e <code>False</code> caso contrário. Em seguida, chame a função passando o número <code>15</code> e imprima o retorno.",
    codigoInicial: {
      python: `# Crie a funcao eh_positivo(num)\ndef eh_positivo(num):\n    pass\n\n# Teste com print(eh_positivo(15))\n`,
      javascript: `// Crie a funcao eh_positivo(num)\nfunction eh_positivo(num) {\n    \n}\n\n// Teste com console.log(eh_positivo(15))\n`
    },
    dica: "Dentro da função, use if num > 0: return True else: return False.",
    casosDeTeste: [
      {
        nome: "Teste positivo com 15",
        entrada: "",
        saidaEsperada: "True"
      }
    ]
  },
  {
    id: "mod6_les2",
    modulo: "Módulo 6: Funções e Modularização",
    titulo: "14. Desafio Final: Caixa Eletrônico Inteligente",
    descricaoCurta: "Calculando a menor quantidade de notas para um saque.",
    conceito: `
      O problema do Caixa Eletrônico junta lógica matemática, divisão inteira e variáveis acumuladoras para encontrar a quantidade ideal de cédulas de R$ 50, R$ 20 e R$ 10 para um valor informado.
      <br><br>
      A divisão inteira (<code>//</code> em Python) nos dá quantas notas completas cabem naquele valor, e o resto (<code>%</code>) nos dá o que sobrou para as próximas notas.
    `,
    analogia: "Ao sacar R$ 80, o caixa não vai te dar 8 notas de 10. Ele entrega 1 nota de 50, 1 nota de 20 e 1 nota de 10.",
    exemploCodigo: {
      python: `valor = 70\nnotas50 = valor // 50\nresto = valor % 50\nprint(notas50, "de 50") # 1 de 50`,
      javascript: `let valor = 70;\nlet notas50 = Math.floor(valor / 50);\nlet resto = valor % 50;\nconsole.log(notas50, "de 50"); // 1 de 50`
    },
    previsao: {
      pergunta: "Em um saque de R$ 120, quantas notas de 50 são entregues e quanto sobra de resto?",
      opcoes: [
        "2 notas de 50 e sobra 20",
        "1 nota de 50 e sobra 70",
        "3 notas de 50 e sobra 0"
      ],
      correta: 0,
      explicacao: "50 * 2 = 100. Sobram 20 reais (120 - 100 = 20)."
    },
    enunciado: "Dado o valor de saque <code>valor = 80</code>, calcule quantas notas de 50, 20 e 10 serão entregues. Imprima exatamente no formato:<br><code>1 de 50, 1 de 20, 1 de 10</code>",
    codigoInicial: {
      python: `valor = 80\n\n# Calcule notas de 50, 20 e 10\n\n# Imprima exatamente: 1 de 50, 1 de 20, 1 de 10\n`,
      javascript: `let valor = 80;\n\n// Calcule notas de 50, 20 e 10\n\n// Imprima exatamente: 1 de 50, 1 de 20, 1 de 10\n`
    },
    dica: "Calcule n50 = valor // 50, atualize resto = valor % 50. Em seguida n20 = resto // 20 e n10 = (resto % 20) // 10.",
    casosDeTeste: [
      {
        nome: "Saque de R$ 80",
        entrada: "valor = 80",
        saidaEsperada: "1 de 50, 1 de 20, 1 de 10"
      }
    ]
  }
];
