---
description: Responde uma pergunta aberta sobre o desafio, buscando primeiro na base local; achados externos viram fonte catalogada antes de virar percepção.
argument-hint: [pergunta]
---

# /investigar

Usa a skill `pesquisador`. Responde uma pergunta pontual, sem necessariamente gerar um levantamento completo de dores ou pessoas.

## Passo a passo

1. Se `$ARGUMENTS` não traz a pergunta, peça que a pessoa a formule.
2. **Busque primeiro na base local**: releia `conhecimento/fontes.md` e os artefatos do desafio corrente (`dores.md`, `pessoas.md`, `percepcoes.md`, `briefing.md`). Se a pergunta já está respondida por evidência catalogada, responda citando o `SRC-xx`, `DOR-xx` ou `PER-xx` relevante, sem precisar de pesquisa externa.
3. Se a base local não for suficiente, busque em contextos externos (documentação pública, benchmarks, artigos). Antes de gerar qualquer percepção a partir desse achado:
   - Catalogue a fonte externa em `conhecimento/fontes.md`, com `tipo` apropriado, `url` e `data_captura` obrigatórios, seguindo `templates/template-fonte.md`.
   - Só depois de a fonte existir no catálogo, crie a Percepção correspondente em `percepcoes.md` do desafio, com `procedencia: desk`.
4. Nunca gere uma percepção de achado externo sem a fonte catalogada correspondente; isso viola `constituicao.md` §3.
5. Se a pergunta não puder ser respondida nem com base local nem com pesquisa externa confiável, diga isso explicitamente. Não preencha a lacuna com uma resposta especulativa apresentada como fato; se quiser registrar um raciocínio sem fonte, faça isso como percepção com `procedencia: hipotese` e `confianca: baixa`, rotulada "(a validar)".
6. Responda a pergunta diretamente no chat, e grave em disco qualquer fonte nova catalogada e qualquer percepção nova gerada.

## Lembretes

- "Buscar primeiro na base local" não é uma formalidade: se a resposta já está lá, não pesquise fora.
- Toda fonte externa citada tem URL e data de captura, sem exceção.
