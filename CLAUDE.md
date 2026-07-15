# CLAUDE.md: regras operacionais do SDX

Este arquivo é lido pelo agente ao abrir o projeto. Ele resume o que o agente precisa saber para operar no dia a dia. As regras de fundo (honestidade epistemológica, gates, premissa central) estão em `constituicao.md` e têm prioridade sobre qualquer coisa aqui.

## O que é este repositório

SDX (Spec-Driven Experience) é um repositório de especificação de experiências de produtos digitais. Ele conduz o agente por quatro etapas, nesta ordem: Descobrir, Definir, Especificar, Desenhar. A especificação é a fonte da verdade; o desenho é consequência dela, nunca o contrário.

## Estrutura de pastas

```
constituicao.md          Regras globais inegociáveis (leia antes de tudo)
CLAUDE.md                Este arquivo
README.md                Visão geral e guia de uso
design-system/           Componentes, assets e tokens de design (fonte da verdade visual)
conhecimento/
  fontes.md              Catálogo de todas as fontes (SRC-xx), um bloco por fonte
  originais/             Cópia dos arquivos originais de cada fonte
desafios/
  <slug>/
    briefing.md           Objetivo do desafio (criado por /iniciar-sdx)
    dores.md               Dores identificadas (DOR-xx)
    pessoas.md              Pessoas / personas (PES-xx)
    percepcoes.md          Percepções (PER-xx)
    necessidades.md        Necessidades com critérios de aceite (NEC-xx)
    spec-design.md         Especificação de design (SPEC-xx), com gate humano
    desenho/                Saída de /desenhar (só roda com spec-design aprovada)
templates/                 Um template por tipo de artefato
.claude/
  commands/                Comandos de barra (/iniciar-sdx, /conhecimento, ...)
  skills/                   Skills especializadas (pesquisador, especificador, designer, redator, acessibilidade, engenheiro-frontend)
```

## Convenção de IDs (resumo, veja constituicao.md §6)

- `SRC-xx`: sequencial e único em todo o repositório (conhecimento é compartilhado entre desafios).
- `DOR-xx`, `PES-xx`, `PER-xx`, `NEC-xx`, `SPEC-xx`: sequenciais dentro de cada desafio; a pasta `desafios/<slug>/` é o escopo. Não misture IDs entre desafios diferentes.
- Dois dígitos com zero à esquerda. Nunca renumere ou reutilize um ID já emitido.

## Princípios de operação

1. **Spec antes de desenho, sempre.** Nunca produza um artefato desenhado sem uma Spec de Design aprovada que o origine.
2. **Toda percepção cita fonte e procedência** (`evidencia`, `desk` ou `hipotese`). Sem fonte, é hipótese, nunca fato. Veja constituicao.md §3.
3. **Escreva em disco.** Todo comando grava o artefato no arquivo correto, no formato do template correspondente. Mostrar o conteúdo só no chat não substitui gravar o arquivo.
4. **Reuse antes de criar.** Releia `fontes.md` e os artefatos do desafio corrente antes de propor um item novo. Se já existir algo equivalente, referencie o ID existente.
5. **Delibere antes de produzir.** Antes de gerar um artefato longo, releia a Constituição, o briefing e os artefatos anteriores da cadeia. Não gere conteúdo em paralelo sem ler o que já existe.
6. **Uma pergunta por vez.** Sempre que houver ambiguidade real ou uma decisão que caiba à pessoa (não ao agente), pergunte, aguarde a resposta, e só então continue. Não acumule várias perguntas num só bloco.
7. **Gates humanos são bloqueantes, não sugestões.** `/especificar` não roda sem necessidades aprovadas. `/desenhar` não roda sem `status: aprovado` em `spec-design.md`. Se o gate não foi cumprido, o comando para e explica o que falta, em vez de prosseguir mesmo assim.
8. **Nunca invente componente de design system.** Se `/desenhar` precisar de um componente que não existe em `design-system/`, ele para e sinaliza a lacuna, em vez de criar um componente novo por conta própria.
9. **Todo o conteúdo é em português do Brasil.** Nunca use o caractere de travessão em nenhum texto gerado; use hífen, dois pontos, ou reescreva a frase.

## Como os comandos se encaixam nas quatro etapas

| Etapa | Comandos | Artefatos produzidos |
|---|---|---|
| Descobrir | `/conhecimento`, `/dores`, `/pesquisar`, `/investigar` | fontes.md, dores.md, pessoas.md, percepcoes.md |
| Definir | `/definir` | necessidades.md (gate: aprovação humana) |
| Especificar | `/especificar` | spec-design.md (gate: aprovação humana) |
| Desenhar | `/desenhar` | arquivos em desenho/ |
| A qualquer momento | `/iniciar-sdx`, `/status` | briefing.md / diagnóstico do estágio atual |

Use `/status` sempre que não tiver certeza de onde um desafio parou. Ele deriva o estágio a partir dos artefatos existentes, nunca de um campo manual.
