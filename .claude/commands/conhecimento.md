---
description: Adiciona uma ou mais fontes de conhecimento ao catálogo compartilhado conhecimento/fontes.md.
argument-hint: [caminho do arquivo ou descrição da fonte]
---

# /conhecimento

Cataloga fontes de informação no repositório compartilhado `conhecimento/`, para uso em qualquer desafio. Não carrega a skill `pesquisador`: este comando só registra fontes, não sintetiza achados. A síntese acontece em `/dores`, `/pesquisar` e `/investigar`.

## Passo a passo

1. Identifique a fonte a catalogar: um arquivo indicado pela pessoa, um trecho colado no chat, ou uma descrição de onde buscar (por exemplo, "as entrevistas de onboarding que fizemos mês passado").
2. Antes de criar uma fonte nova, procure em `conhecimento/fontes.md` por título ou origem equivalente. Se já existir, informe à pessoa e pergunte se é para reusar o `SRC-xx` existente ou se é de fato uma fonte diferente.
3. Abra o arquivo (quando houver um) e deduza o que conseguir sozinho: tipo de fonte, data, formato, conteúdo geral, recorte do que ele cobre. Não peça à pessoa informação que já dá para inferir do próprio arquivo.
   - Para formatos que exigem parsing (xlsx, pdf, etc.), NÃO leia o conteúdo completo: extraia apenas a estrutura (abas, cabeçalhos) e uma amostra de até 5 linhas por aba, em uma única chamada de script. A leitura completa é responsabilidade dos comandos de síntese (`/dores`, `/pesquisar`), não do catálogo.
4. Pergunte apenas o que faltar, uma pergunta por vez, aguardando resposta antes da próxima. Tipicamente falta:
   - Origem exata (quem produziu, em que contexto, com que método).
   - Confiabilidade percebida e por quê.
   - Vieses conhecidos (amostra, autosseleção, desatualização, conflito de interesse). Se a pessoa não souber, registre isso como uma lacuna, não como "nenhum".
5. Para fontes de pesquisa externa (tipo `desk`), registre `url` e `data_captura` obrigatoriamente.
6. Copie o arquivo original para `conhecimento/originais/`, nomeado com o `SRC-xx` correspondente (ver `conhecimento/originais/README.md`).
   - Se o original exige parsing (xlsx, pdf, etc.), grave também um extrato em texto `SRC-xx.md` ao lado, com todo o conteúdo textual do arquivo. Os comandos de síntese devem ler o extrato, nunca reparsear o original.
7. Atribua o próximo `SRC-xx` disponível (sequencial, global, nunca reutilizado) e adicione o bloco em `conhecimento/fontes.md`, seguindo `templates/template-fonte.md`.
8. Mostre o bloco criado e pergunte se está correto antes de seguir.
9. Se houver mais de uma fonte para adicionar, repita o processo uma fonte de cada vez; não tente catalogar várias ao mesmo tempo sem revisão individual.

## Lembretes

- Uma fonte catalogada sem cópia em `originais/` é uma inconsistência; sempre grave os dois juntos.
- Nunca infira confiabilidade ou viés sem checar; se não souber, pergunte ou registre como lacuna explícita.
