---
description: Cria ou modifica artefatos em desenho/ a partir da spec de design aprovada, usando engenheiro-frontend e acessibilidade. Só roda com spec-design.md em status aprovado.
argument-hint: [slug do desafio]
---

# /desenhar

Usa as skills `engenheiro-frontend` e `acessibilidade`, em conjunto. Cria ou modifica artefatos em `desafios/<slug>/desenho/`.

## Pré-condição (bloqueante, verifique antes de qualquer outra coisa)

Releia `spec-design.md` do desafio. Se `status` não for exatamente `aprovado`, pare imediatamente e explique à pessoa o que falta (por exemplo, "a spec está em-revisao, ainda sem aprovação explícita" ou "a spec está em rascunho, rode /especificar primeiro"). Não gere nenhum arquivo em `desenho/` enquanto essa condição não for satisfeita.

## Passo a passo

1. Confirmada a aprovação, releia a spec inteira: fluxo, telas, estados, componentes citados, microtexto, tabela de rastreabilidade.
2. Confira cada componente e token citado contra o conteúdo real de `design-system/`. Se `design-system/` estiver vazio ou faltar algo citado na spec, pare e sinalize exatamente o que falta antes de prosseguir, listando tela e componente afetados. Não invente um componente ou token para preencher a lacuna.
3. Se não houver bloqueio, gere os arquivos em `desenho/`, seguindo o método da skill `engenheiro-frontend` (HTML semântico, tokens do design system, componentes autônomos).
4. Aplique a skill `acessibilidade` ao resultado: contraste, foco, alvos de toque, semântica para leitores de tela.
5. Todo bloco gerado (seção de tela, componente, trecho de lógica) cita em comentário o critério de aceite que satisfaz, no formato `Atende: NEC-xx-CAy`.
6. Ao final, confira a tabela de rastreabilidade da spec: todo critério listado ali deve ter um bloco correspondente no código gerado. Se algo ficou de fora, diga isso explicitamente em vez de omitir.
7. Mostre o resultado e pergunte se a pessoa quer ajustes antes de considerar o desenho concluído.

## Lembretes

- A pré-condição de `status: aprovado` é bloqueante, não uma sugestão.
- Lacuna de design system sinalizada é o comportamento correto; componente inventado é uma violação de `constituicao.md` §5.
