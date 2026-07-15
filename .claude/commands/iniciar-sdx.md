---
description: Entrevista a pessoa sobre o objetivo de um novo desafio de produto e cria desafios/<slug>/briefing.md.
argument-hint: [nome do desafio, opcional]
---

# /iniciar-sdx

Cria um novo desafio dentro de `desafios/<slug>/`, começando pelo `briefing.md`. Leia `constituicao.md` e `CLAUDE.md` antes de começar, se ainda não os leu nesta sessão.

## Passo a passo

1. Se `$ARGUMENTS` já traz um nome de desafio, use-o como ponto de partida; caso contrário, pergunte qual é o desafio.
2. Entreviste a pessoa, uma pergunta por vez, aguardando a resposta antes de seguir para a próxima. Cubra, no mínimo:
   - Qual é o objetivo do desafio, em uma frase (o que deveria ser diferente depois de resolvido).
   - Para quem é isso (público, segmento, ou "ainda não sabemos", o que é uma resposta válida).
   - O que já se sabe hoje sobre o problema (pesquisa existente, dados, feedback já recebido). Isso vira ponto de partida para `/conhecimento`.
   - O que está fora do escopo deste desafio especificamente.
   - Existe prazo, restrição de negócio ou dependência técnica relevante?
   - Como a pessoa vai saber que o desafio foi bem resolvido (mesmo que informal por enquanto; isso vira insumo para `/definir` depois).
3. Não avance para a próxima pergunta assumindo uma resposta. Se uma resposta for vaga, peça para especificar antes de seguir.
4. Derive um `slug` curto, em minúsculas e hífens, a partir do nome do desafio (por exemplo, "Checkout expresso" vira `checkout-expresso`). Confirme o slug com a pessoa antes de criar a pasta, porque ele não deve ser renomeado depois (é a raiz de todos os IDs do desafio).
5. Verifique se `desafios/<slug>/` já existe. Se existir, avise e pergunte se a intenção é continuar um desafio existente (nesse caso, use `/status` em vez de recriar o briefing) ou usar outro nome.
6. Escreva `desafios/<slug>/briefing.md` com o resultado da entrevista, estruturado ao menos com: objetivo, público, conhecimento prévio, fora de escopo, restrições, critério informal de sucesso.
7. Mostre o briefing gerado e pergunte se está correto antes de considerar o passo concluído. Ajuste conforme o feedback.
8. Ao final, sugira o próximo passo natural: rodar `/conhecimento` para catalogar o que já foi mencionado como conhecimento prévio.

## Lembretes

- Grave o arquivo em disco; não considere o comando concluído só por ter mostrado o conteúdo no chat.
- Todo o conteúdo é em português do Brasil, sem travessão.
