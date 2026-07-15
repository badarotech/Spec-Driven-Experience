---
name: redator
description: Escreve e revisa microtexto de interface (títulos, botões, estados vazios, mensagens de erro), priorizando clareza antes de estilo e garantindo que todo erro ofereça uma saída. Use ao rodar /especificar para redigir o microtexto final da spec de design, ou sempre que revisar texto de interface já existente.
---

# Redator

Skill de UX Writing usada pelo comando `/especificar`, em conjunto com `designer`. Escreve o microtexto final que entra em `spec-design.md`, não placeholder.

## Ordem de prioridade: clareza, depois concisão, depois personalidade

Nessa ordem, sem exceção:

1. **Clareza**: a pessoa entende o que o texto diz na primeira leitura, sem depender de contexto que ela não tem naquele momento.
2. **Concisão**: dito o essencial, corte o que não muda a decisão da pessoa. Concisão nunca justifica ambiguidade.
3. **Personalidade/tom de marca**: só depois de clareza e concisão resolvidas. Tom de marca que compromete a compreensão do texto está fora de ordem; ajuste a marca, não o contrário. (Diretrizes de marca específicas, quando definidas, ficam em `constituicao.md` §8.)

Teste rápido: leia o texto isolado, fora do contexto da tela. Se ele não faz sentido sozinho, ele provavelmente também vai confundir dentro da tela.

## Microtexto por tipo

- **Título de tela ou seção**: descreve o que a pessoa vai fazer ou encontrar ali, não um nome interno de feature.
- **Rótulo de campo**: diz o que preencher, não só o nome do dado ("Quando você nasceu" em vez de "Data de nascimento", quando o contexto pedir mais orientação; caso contrário, o nome direto do dado já basta).
- **Botão de ação**: verbo específico da ação ("Confirmar pagamento", não "OK" ou "Enviar", quando a ambiguidade importar).
- **Estado vazio**: explica por que está vazio e, quando aplicável, como preencher.
- **Confirmação de sucesso**: confirma o que aconteceu, em termos que a pessoa reconhece (não um código de status interno).

## Mensagens de erro: nunca sem saída

Toda mensagem de erro responde a três perguntas, nesta ordem:

1. **O que aconteceu?** Em linguagem simples, sem jargão técnico nem código de erro exposto como única informação.
2. **Por que aconteceu (quando ajudar a pessoa a agir)?** Só inclua a causa se ela mudar o que a pessoa faz a seguir.
3. **O que a pessoa pode fazer agora?** Toda mensagem de erro tem uma saída: tentar de novo, corrigir um campo específico, contatar suporte, voltar. Um erro sem próxima ação é um beco sem saída.

Regras adicionais:

- Nunca culpe a pessoa pelo erro ("Você preencheu errado") quando a causa pode ser do sistema; descreva o fato ("O CPF informado não foi encontrado").
- Nunca exponha mensagem de erro bruta de sistema/API como texto final de interface.
- Erros de validação de campo apontam exatamente qual campo e o que precisa mudar, não um erro genérico de formulário inteiro quando é possível ser específico.

## Consistência de terminologia

Escolha um termo por conceito e use o mesmo em toda a spec: se o produto chama de "pedido", não alterne com "compra" ou "ordem" no meio do fluxo. Inconsistência de termo é lida pela pessoa como se fossem coisas diferentes, mesmo quando não são.

## Checklist de qualidade antes de fechar o microtexto

- [ ] Todo texto faz sentido lido isoladamente, fora do contexto visual da tela.
- [ ] Nenhum texto foi cortado por concisão a ponto de virar ambíguo.
- [ ] Toda mensagem de erro responde o quê, por quê (quando relevante) e o quê fazer agora.
- [ ] Nenhuma mensagem de erro é um beco sem saída.
- [ ] Nenhum texto expõe erro técnico bruto ou culpa a pessoa por uma falha do sistema.
- [ ] Terminologia é consistente com o resto da spec (mesmo termo, mesmo conceito, do início ao fim).
- [ ] Botões de ação usam verbos específicos da ação, não rótulos genéricos, quando a ambiguidade importaria.
