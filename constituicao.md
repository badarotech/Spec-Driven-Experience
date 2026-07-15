---
titulo: Constituição do SDX
versao: 1.1
ultima_atualizacao: 2026-07-15
---

# Constituição do SDX (Spec-Driven Experience)

Este documento é a lei do repositório. Todo comando, toda skill e todo agente que operar neste projeto segue as regras abaixo antes de qualquer instrução específica de tarefa. Em caso de conflito entre um comando e esta Constituição, a Constituição vence.

## 1. Premissa central

A especificação é a fonte da verdade. O desenho é consequência dela.

Nenhum artefato desenhado (tela, protótipo, componente, texto de interface) pode existir sem uma Spec de Design que o origine, e nenhuma Spec de Design pode existir sem Necessidades que a justifiquem, e nenhuma Necessidade pode existir sem Dores e Pessoas que a fundamentem, e nenhuma Dor ou Percepção pode existir sem Fontes que a sustentem (ou sem a rotulagem explícita de que se trata de uma hipótese não validada).

Quando o desenho e a especificação divergem, a especificação está certa até que alguém decida, de forma explícita e documentada, mudar a especificação. Um agente nunca "conserta" essa divergência ajustando só o desenho.

## 2. Cadeia de rastreabilidade

Todo artefato do SDX tem um ID estável e aponta para o artefato que o originou. A cadeia completa é:

```
FONTE (SRC-xx) → Percepção (PER-xx) → Dor (DOR-xx) → Pessoa (PES-xx) → Necessidade (NEC-xx) → Spec de Design (SPEC-xx) → Artefato desenhado
```

Regras da cadeia:

- Todo ID é permanente. Uma vez criado, um ID nunca é reaproveitado para outra coisa, mesmo que o artefato original seja descartado (nesse caso, marque `status: descontinuado` no frontmatter, não apague o ID).
- Todo artefato cita explicitamente de onde veio, usando o campo `origem` (ou equivalente) no frontmatter, com o ID do artefato anterior na cadeia.
- Uma Necessidade pode se originar de mais de uma Dor e mais de uma Pessoa. Uma Spec de Design pode responder a mais de uma Necessidade. Cite todas as origens relevantes, não só a primeira.
- Todo bloco de um artefato desenhado (uma seção de tela, um componente, um trecho de microtexto) cita em comentário o critério de aceite (dentro de uma Necessidade) que ele satisfaz. Um bloco sem critério associado é um sinal de que ele não deveria existir.
- Convenção de IDs: veja a seção 6.

## 3. Honestidade epistemológica (regras inegociáveis)

Estas regras não são preferências de estilo. São a condição para que o SDX seja confiável.

1. **Toda percepção cita as fontes que a sustentam.** O campo `fontes: [SRC-xx, ...]` é obrigatório em toda Percepção. Uma percepção sem fonte não é uma percepção: é uma hipótese, e deve ser rotulada como tal.
2. **Toda percepção declara sua procedência**, em um dos três valores:
   - `evidencia`: fundamentada em fontes já catalogadas em `conhecimento/fontes.md`.
   - `desk`: fundamentada em pesquisa externa feita no momento, com URL da fonte e data de captura registradas, e a fonte catalogada antes de a percepção ser criada.
   - `hipotese`: raciocínio do agente sem fonte que o sustente. Toda hipótese tem confiança baixa por definição e carrega o rótulo "a validar" de forma visível no artefato.
3. **A confiança de uma percepção nunca excede a confiança das fontes que a sustentam.** Se a fonte mais forte por trás de uma percepção tem confiabilidade média, a percepção não pode ter confiança alta.
4. **Confiança alta exige triangulação: duas ou mais fontes independentes** que apontem na mesma direção. Uma fonte isolada, por mais robusta que seja, sustenta no máximo confiança média.
5. **O agente nunca inventa evidência.** Se não há fonte, não existe fato, existe hipótese. Nunca apresente uma suposição com a mesma linguagem usada para um dado verificado. Frases como "os usuários preferem X" exigem fonte; na ausência dela, escreva "é possível que os usuários prefiram X (hipótese, a validar)".
6. **Achados de pesquisa externa (`/investigar`, `/conhecimento`) só viram percepção depois de a fonte externa estar catalogada** em `fontes.md`, com URL e data de captura. Percepção sem fonte catalogada correspondente é uma violação desta Constituição.
7. **Vieses e limites de método são declarados, não escondidos.** Toda fonte registra, quando aplicável, o viés conhecido (tamanho de amostra, autosseleção, desatualização, conflito de interesse) e a confiabilidade percebida.

Qualquer comando ou skill que gerar uma percepção sem fonte, ou que atribuir confiança acima do que as fontes sustentam, está descumprindo esta Constituição e deve ser corrigido antes de prosseguir.

## 4. Gates humanos

O SDX avança em quatro etapas: Descobrir, Definir, Especificar, Desenhar. Dois pontos são gates humanos obrigatórios, ou seja, o agente para e espera aprovação explícita da pessoa antes de continuar:

1. **Aprovação das Necessidades antes de `/especificar`.** Sem essa aprovação, `/especificar` não deve rodar.
2. **Aprovação da Spec de Design (`status: aprovado`) antes de `/desenhar`.** Sem `status: aprovado` em `spec-design.md`, `/desenhar` recusa executar e explica o motivo.

Fora desses dois pontos, o agente não avança silenciosamente: ao final de cada comando, mostra o artefato produzido e pergunta se a pessoa quer ajustar algo antes de seguir para o próximo passo. Sempre que houver uma decisão importante ou uma ambiguidade real (não decorativa), o agente faz uma pergunta por vez à pessoa, espera a resposta, e só então continua.

## 5. Reuso antes de criação

Antes de criar qualquer artefato novo, o agente consulta o que já existe:

- Uma nova Fonte pode já estar catalogada em `conhecimento/fontes.md` (mesmo título, mesma origem). Se estiver, reusa o `SRC-xx` existente em vez de duplicar.
- Uma nova Dor, Pessoa, Percepção ou Necessidade pode já existir no desafio corrente. O agente relê `dores.md`, `pessoas.md`, `percepcoes.md` e `necessidades.md` do desafio antes de propor um item novo, e se o item já existir (mesmo que com outras palavras), referencia o ID existente em vez de criar um duplicado.
- Um componente ou token pode já existir em `design-system/`. `/desenhar` nunca inventa um componente que já existe com outro nome.
- Tokens de design seguem o formato e a nomenclatura do **W3C Design Tokens Community Group** (especificação DTCG). Tokens são definidos em `design-system/tokens/` com estrutura `{category}.{concept}.{variant}` e exportados em formato compatível (JSON com chave `$value` e `$type`). Nenhum token é inventado no momento do desenho sem antes verificar se já existe na biblioteca de tokens do repositório.

## 6. Convenção de IDs

- `SRC-xx` (Fonte): numeração única e sequencial para todo o repositório, porque `conhecimento/` é compartilhado entre todos os desafios. Nunca reutilize um número de SRC já usado, mesmo que a fonte seja removida.
- `DOR-xx`, `PES-xx`, `PER-xx`, `NEC-xx`, `SPEC-xx`: numeração sequencial dentro de cada desafio. A pasta `desafios/<slug>/` é o escopo do ID: `DOR-01` do desafio A e `DOR-01` do desafio B são registros diferentes, e isso é esperado. Nenhum artefato referencia um ID de Dor, Pessoa, Percepção, Necessidade ou Spec de Design de outro desafio.
- Todos os IDs usam dois dígitos com zero à esquerda (`DOR-01`, `DOR-02`, ..., `DOR-10`), estendendo para três dígitos apenas se um desafio ultrapassar 99 itens de um mesmo tipo.
- IDs nunca são renumerados. Se um item é descartado, seu ID fica reservado e marcado como descontinuado; o próximo item novo recebe o próximo número da sequência.

## 7. Papel dos agentes e das skills

Cada comando invoca uma ou mais skills especializadas (`pesquisador`, `especificador`, `designer`, `redator`, `acessibilidade`, `engenheiro-frontend`). As skills carregam o método e as heurísticas de cada disciplina; os comandos carregam o fluxo de trabalho e os gates. Nenhuma skill contorna as regras desta Constituição: elas se aplicam por igual a pesquisa, definição, especificação e desenho.

Todo comando escreve seus artefatos em disco, na pasta correta, com o template correto. Uma resposta apenas no chat, sem gravar o arquivo correspondente, não conta como o comando ter sido executado.

### 7.1 Acessibilidade (WCAG 2.2 — Nível AA)

Todo artefato desenhado — tela, componente, microtexto, fluxo interativo — deve atender às **WCAG 2.2 no nível AA** (W3C, 2023) antes de ser considerado aprovado. A skill `acessibilidade` é co-responsável por cada entrega de `/desenhar` e não pode ser executada depois, como checagem opcional.

Regras operacionais:

- Todo componente novo documenta os critérios de sucesso WCAG 2.2 AA que lhe são aplicáveis (ex.: 1.4.3 Contraste, 2.1.1 Teclado, 4.1.2 Nome, Função, Valor).
- Nenhuma Spec de Design recebe `status: aprovado` se tiver critérios AA pendentes ou marcados como `a validar`.
- Violações de acessibilidade identificadas em qualquer fase (especificação ou desenho) são registradas como `DOR` com rótulo `origem: acessibilidade` e devem ser resolvidas antes do gate seguinte.
- A skill `engenheiro-frontend` implementa os critérios WCAG 2.2 AA no código; não é aceitável delegar a correção para uma etapa de QA posterior.

## 8. Normas e padrões mandatórios

As normas abaixo têm força de lei neste repositório. Qualquer artefato ou decisão que as contrarie é uma violação desta Constituição e deve ser corrigida antes de o processo avançar.

| Norma | Escopo de aplicação | Nível exigido |
|---|---|---|
| **ISO 9241-210:2019** — Ergonomia da interação humano-sistema: Design centrado no ser humano para sistemas interativos | Processo de design em todas as fases (Descobrir → Desenhar) | Conformidade com os 6 princípios de HCD |
| **W3C Design Tokens Community Group** (DTCG) | Tokens de design em `design-system/tokens/` | Formato e nomenclatura DTCG obrigatórios |
| **WCAG 2.2** — Diretrizes de Acessibilidade para Conteúdo Web | Todo artefato desenhado (telas, componentes, microtextos) | **Nível AA** |

### 8.1 ISO 9241-210 — Design Centrado no Ser Humano

O processo SDX é estruturado para satisfazer os seis princípios da ISO 9241-210:2019:

1. **O design é baseado na compreensão explícita de usuários, tarefas e ambientes** — garantido pelas etapas Descobrir e Definir, com fontes catalogadas e Necessidades rastreáveis.
2. **Usuários estão envolvidos durante o design e o desenvolvimento** — os gates humanos obrigatórios (seção 4) e as pesquisas de validação são os mecanismos formais desse envolvimento.
3. **O design é conduzido e refinado por avaliação centrada no usuário** — toda Spec de Design com `status: aprovado` deve registrar o método de validação utilizado (teste de usabilidade, revisão heurística, etc.) no campo `validacao`.
4. **O processo é iterativo** — nenhuma spec é imutável; o ciclo Descobrir → Definir → Especificar → Desenhar pode ser reiniciado sempre que a avaliação revelar necessidade.
5. **O design aborda a experiência do usuário completa** — artefatos consideram contexto de uso, estados de erro, casos extremos e acessibilidade, não apenas o fluxo ideal.
6. **A equipe de design inclui habilidades e perspectivas multidisciplinares** — as skills (`pesquisador`, `especificador`, `designer`, `acessibilidade`, `engenheiro-frontend`) representam essas disciplinas e devem operar de forma integrada, não sequencial.

## 9. Diretrizes de marca e de produto

*(Espaço reservado para o time preencher: tom de voz, princípios de produto, restrições de negócio, público prioritário, o que o produto nunca deve fazer. Enquanto vazio, os comandos operam apenas com as regras genéricas acima.)*

-
-
-
