// Banco de Lições e Desafios Práticos de Lógica de Programação
const LESSONS_DATA = [
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
    enunciado: "Escreva um programa que exiba exatamente a frase <code>Estou aprendendo lógica!</code> no terminal.",
    codigoInicial: {
      python: `# Escreva seu código abaixo\n`,
      javascript: `// Escreva seu código abaixo\n`
    },
    dica: "Lembre-se de colocar o texto entre aspas simples ou duplas dentro da função de saída.",
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
    enunciado: "Crie duas variáveis chamadas <code>nota1</code> com valor 8 e <code>nota2</code> com valor 6. Calcule a média simples e imprima o resultado na tela.",
    codigoInicial: {
      python: `nota1 = 8\nnota2 = 6\n# Calcule a media e exiba com print\n`,
      javascript: `let nota1 = 8;\nlet nota2 = 6;\n// Calcule a media e exiba com console.log\n`
    },
    dica: "A média é a soma das duas notas dividida por 2: (nota1 + nota2) / 2. Atenção aos parênteses!",
    casosDeTeste: [
      {
        nome: "Cálculo da Média",
        entrada: "",
        saidaEsperada: "7"
      }
    ]
  },
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
    enunciado: "Dado o número na variável <code>numero</code>, verifique se ele é par ou ímpar. Se for par, exiba <code>PAR</code>; se for ímpar, exiba <code>IMPAR</code>.",
    codigoInicial: {
      python: `numero = 14\n# Verifique e exiba PAR ou IMPAR\n`,
      javascript: `let numero = 14;\n// Verifique e exiba PAR ou IMPAR\n`
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
  }
];
