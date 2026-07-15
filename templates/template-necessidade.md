# Template: Necessidade (NEC-xx)

Copie o bloco abaixo para `necessidades.md` do desafio. Numeração sequencial dentro do desafio.

```yaml
id: NEC-xx
titulo:
descricao:
dores: []             # DOR-xx que esta necessidade responde (obrigatório, ao menos uma)
pessoas: []           # PES-xx para quem esta necessidade é relevante (obrigatório, ao menos uma)
prioridade: media       # alta | media | baixa
status: rascunho        # rascunho | aprovada
aprovado_por:           # nome de quem aprovou, preenchido só quando status = aprovada
data_aprovacao:
criterios_aceite:
  - id: NEC-xx-CA1
    descricao:          # frase única, testável, sem ambiguidade
    verificavel_por:    # como alguém confirma que este critério foi atendido: teste de usabilidade, métrica de produto, revisão heurística, checagem manual
  - id: NEC-xx-CA2
    descricao:
    verificavel_por:
```

## Por que esta necessidade existe

Ligação explícita entre as dores e pessoas listadas e o que precisa ser verdadeiro na experiência para que essa dor deixe de acontecer (ou diminua).

## Notas de uso

- Um critério de aceite é verificável quando alguém consegue dizer "sim, isso foi atendido" ou "não, isso não foi atendido" sem interpretação pessoal. Evite critérios como "a experiência deve ser agradável"; prefira "a pessoa consegue completar X em até Y passos, sem precisar de ajuda".
- Uma necessidade sem nenhum critério de aceite verificável não está pronta para `/especificar`.
- `status: aprovada` só é definido depois do gate humano (ver `constituicao.md` §4). Enquanto `rascunho`, `/especificar` não pode usar esta necessidade.
