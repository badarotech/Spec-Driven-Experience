---
description: Cria spec-design.md a partir das necessidades aprovadas, usando designer, redator e acessibilidade. Termina em gate humano (status em-revisao) antes de /desenhar.
argument-hint: [slug do desafio]
---

# /especificar

Usa as skills `designer`, `redator` e `acessibilidade`, em conjunto. Cria ou atualiza `desafios/<slug>/spec-design.md`. Este é o segundo gate humano obrigatório do SDX (ver `constituicao.md` §4): sem `status: aprovado` aqui, `/desenhar` não deve rodar.

## Pré-condição (verifique antes de continuar)

Releia `necessidades.md` do desafio. Se nenhuma necessidade estiver com `status: aprovada`, pare e explique que o comando precisa que `/definir` seja concluído e aprovado primeiro. Se só parte das necessidades relevantes estiver aprovada, informe isso à pessoa e pergunte se ela quer especificar só a parte já aprovada ou aprovar o restante antes de continuar.

## Passo a passo

1. Releia todas as necessidades aprovadas relevantes, e `design-system/` para saber o que já existe de componentes e tokens.
2. Com a skill `designer`: desenhe o fluxo completo, depois as telas, depois os estados obrigatórios (vazio, carregando, sucesso, erro, e outros relevantes ao caso). Rode as dez heurísticas de Nielsen contra o resultado.
3. Com a skill `redator`: escreva o microtexto final de cada tela e estado (não placeholder), priorizando clareza, depois concisão, depois tom de marca. Garanta que toda mensagem de erro tenha uma saída clara.
4. Com a skill `acessibilidade`: verifique contraste planejado, ordem de foco, rótulos, e demais critérios WCAG 2.2 AA relevantes ao fluxo especificado.
5. Liste os componentes do design system usados, pelo nome exato usado em `design-system/`. Se algo necessário não existir lá, registre isso explicitamente como uma lacuna na spec, em vez de descrevê-lo como se já existisse.
6. Monte a tabela de rastreabilidade (necessidade → critério de aceite → tela/estado onde é atendido), cobrindo todo critério de aceite das necessidades atendidas por esta spec.
7. Grave `spec-design.md` seguindo `templates/template-spec-design.md`, com `status: em-revisao`.
8. Pare aqui. Mostre a spec inteira à pessoa responsável e peça aprovação explícita. Não prossiga para `/desenhar` sozinho, mesmo que a spec pareça completa: o gate exige uma resposta afirmativa e específica da pessoa.
9. Se houver ajuste pedido, edite e peça aprovação novamente. Só quando a pessoa aprovar de forma explícita, atualize para `status: aprovado`, com `aprovado_por` e `data_aprovacao` preenchidos.

## Lembretes

- Nunca marque `status: aprovado` sozinho, nem por inferência de que "a pessoa provavelmente concorda".
- Lacunas de design system são sinalizadas, nunca preenchidas com um componente inventado.
