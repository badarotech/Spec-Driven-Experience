---
description: Cria necessidades.md com critérios de aceite verificáveis, cada necessidade ligada a dores e pessoas. Termina em gate humano antes de /especificar.
argument-hint: [slug do desafio]
---

# /definir

Usa a skill `especificador`. Cria ou atualiza `desafios/<slug>/necessidades.md`. Este é o primeiro dos dois gates humanos obrigatórios do SDX (ver `constituicao.md` §4): sem aprovação explícita aqui, `/especificar` não deve rodar.

## Passo a passo

1. Identifique o desafio; se ambíguo, pergunte qual.
2. Releia `dores.md` e `pessoas.md` do desafio inteiros, e `necessidades.md` já existente (se houver).
3. Para cada Dor (ou conjunto de Dores relacionadas) e Pessoa correspondente, aplique o método da skill `especificador`: decomponha em necessidades de resultado, não de solução, checando os critérios independente/negociável/valiosa/estimável/testável.
4. Escreva os critérios de aceite de cada necessidade no formato dado/quando/então, cada um com `verificavel_por` concreto.
5. Compare com necessidades já existentes; se equivalente, refine a existente em vez de duplicar.
6. Grave `necessidades.md` com `status: rascunho` em cada necessidade nova, seguindo `templates/template-necessidade.md`.
7. Mostre todas as necessidades (rascunho e já aprovadas) à pessoa responsável, junto dos critérios de aceite, e peça aprovação explícita, necessidade por necessidade ou em bloco, como a pessoa preferir.
8. Só marque `status: aprovada`, com `aprovado_por` e `data_aprovacao` preenchidos, depois de receber essa aprovação de forma explícita. Uma resposta vaga ("parece bom") não conta; peça confirmação direta se houver dúvida.
9. Se a pessoa pedir ajustes, edite e peça aprovação novamente antes de considerar o gate cumprido.
10. Ao final, informe claramente se o desafio já está liberado para `/especificar` (todas as necessidades relevantes aprovadas) ou não.

## Lembretes

- Nenhuma necessidade sem Dor e Pessoa citadas.
- Nenhum critério de aceite vago ou não verificável.
- O gate é bloqueante: sem aprovação explícita, `/especificar` recusa executar.
