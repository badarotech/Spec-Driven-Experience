---
description: Gera Pessoas e Percepções a partir do conhecimento catalogado, com fontes citadas, usando a skill pesquisador.
argument-hint: [slug do desafio]
---

# /pesquisar

Usa a skill `pesquisador`. Cria ou atualiza `desafios/<slug>/pessoas.md` e `desafios/<slug>/percepcoes.md`.

## Passo a passo

1. Identifique o desafio; se ambíguo, pergunte qual.
2. Releia `constituicao.md`, `desafios/<slug>/briefing.md`, `conhecimento/fontes.md`, e os artefatos já existentes do desafio (`dores.md`, `pessoas.md`, `percepcoes.md`), para não duplicar nada.
3. **Percepções**: aplique análise temática e triangulação (skill `pesquisador`) para identificar padrões relevantes de comportamento, atitude ou contexto nas fontes catalogadas. Cada percepção cita as fontes que a sustentam e declara `procedencia` e `confianca` conforme as regras de `constituicao.md` §3.
4. **Pessoas**: agrupe as dores e percepções em conjuntos coerentes de pessoas que as vivenciam. Uma Pessoa aqui existe para agrupar evidência real, não para preencher um arquétipo de marketing; prefira poucas pessoas bem sustentadas a muitas pessoas genéricas.
5. Ao definir uma Pessoa, volte a `dores.md` e preencha o campo `pessoas_relacionadas` das dores correspondentes.
6. Redija usando `templates/template-pessoa.md` e `templates/template-percepcao.md`.
7. Compare com o que já existe no desafio antes de criar um item novo; se equivalente, reuse o ID e enriqueça o artefato existente.
8. Grave `pessoas.md` e `percepcoes.md`.
9. Mostre o resultado e pergunte se a pessoa concorda ou quer ajustar algo antes de seguir para `/definir`.

## Lembretes

- Nenhuma Pessoa ou Percepção sem fonte, percepção relacionada, ou rótulo explícito de hipótese.
- Se durante a síntese surgir uma pergunta específica que o conhecimento catalogado não responde, sugira `/investigar` em vez de especular.
