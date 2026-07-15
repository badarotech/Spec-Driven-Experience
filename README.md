# SDX: Spec-Driven Experience

SDX é um repositório de especificação de experiências de produtos digitais. Ele conduz agentes do Claude por um processo de especificação em quatro etapas: Descobrir, Definir, Especificar e Desenhar.

A premissa central está descrita em detalhe em `constituicao.md`, mas resume-se a isto: a especificação é a fonte da verdade, e o desenho é consequência dela. Nada é desenhado sem uma spec que o justifique, e nada vira spec sem necessidade que a sustente, e nada vira necessidade sem dor e pessoa que a fundamentem, e nada vira dor ou percepção sem fonte que a comprove (ou sem o rótulo explícito de hipótese não validada).

## As quatro etapas

### 1. Descobrir

Objetivo: reunir conhecimento e entender o problema antes de propor qualquer solução.

- `/iniciar-sdx`: entrevista você sobre o objetivo do desafio e cria `desafios/<slug>/briefing.md`.
- `/conhecimento`: adiciona uma ou mais fontes de informação (entrevistas, relatórios, dados de produto, artigos) ao catálogo compartilhado `conhecimento/fontes.md`.
- `/dores`: lê o conhecimento catalogado e o briefing, e identifica dores do usuário, cada uma citando as fontes que a sustentam.
- `/pesquisar`: gera Pessoas e Percepções a partir do conhecimento já catalogado, sempre com fontes citadas.
- `/investigar`: responde uma pergunta aberta específica, buscando primeiro na base local; se buscar fora, cataloga a fonte externa antes de gerar qualquer percepção.

### 2. Definir

Objetivo: transformar dores e percepções em necessidades verificáveis.

- `/definir`: cria `necessidades.md`, com cada necessidade ligada a dores e pessoas específicas e critérios de aceite que podem ser testados objetivamente.

**Gate humano:** as necessidades precisam da sua aprovação explícita antes de seguir para `/especificar`.

### 3. Especificar

Objetivo: transformar necessidades aprovadas em uma especificação de design completa, mas ainda sem código ou visual final.

- `/especificar`: cria `spec-design.md` com fluxo, telas, estados (vazio, carregando, sucesso, erro), componentes do design system, microtexto e uma tabela de rastreabilidade (necessidade → critério → tela).

**Gate humano:** o comando termina com `status: em-revisao` e pede sua aprovação explícita. Só com `status: aprovado` o desafio pode seguir para `/desenhar`.

### 4. Desenhar

Objetivo: transformar a spec de design aprovada em artefatos reais.

- `/desenhar`: só roda se `spec-design.md` estiver aprovada. Cria ou modifica arquivos em `desenho/`, consumindo apenas os tokens e componentes já existentes em `design-system/`. Se faltar um componente, o comando para e sinaliza a lacuna em vez de inventar.

### A qualquer momento

- `/status`: mostra em que etapa um desafio está, o próximo passo e os bloqueios, sempre derivando isso dos artefatos existentes (nunca de um campo manual).

## Estrutura do repositório

```
.claude/commands/     Configurações dos comandos usados em nossa IA

.claude/skills/       Skills especializadas usadas pelos comandos em momentos chaves do processo

conhecimento/         Catálogo de fontes (fontes.md) e cópias dos arquivos originais (originais/)

desafios/<slug>/      Um desafio por pasta, contendo: briefing, dores, pessoas, percepções, necessidades, spec de design e desenho

design-system/        Componentes, assets e tokens de design

templates/            Um template por tipo de artefato, com frontmatter YAML e IDs

CLAUDE.md             Regras operacionais que o agente lê ao abrir o projeto

constituicao.md       Regras globais: premissa central, honestidade epistemológica, gates, convenção de IDs e etc

README.md             Este arquivo, leitura inicial para compreensão do SDX
```

## A cadeia de rastreabilidade

```
FONTE (SRC-xx) → Percepção (PER-xx) → Dor (DOR-xx) → Pessoa (PES-xx) → Necessidade (NEC-xx) → Spec de Design (SPEC-xx) → Artefato desenhado
```

Cada seta representa um campo de origem no frontmatter do artefato seguinte. Nenhum artefato pula um elo da cadeia.

## As skills

Os comandos usam seis skills especializadas, cada uma com o método e as heurísticas da sua disciplina (ver `.claude/skills/<nome>/SKILL.md`):

- `pesquisador`: síntese de pesquisa, Jobs to be Done, análise temática, triangulação, vieses.
- `especificador`: decomposição de necessidades e critérios de aceite verificáveis.
- `designer`: fluxos, estados, hierarquia visual, heurísticas de Nielsen.
- `redator`: microtexto, clareza antes de estilo, mensagens de erro com saída.
- `acessibilidade`: WCAG 2.2 nível AA, contraste, foco, alvos de toque, leitores de tela.
- `engenheiro-frontend`: HTML/CSS/JS semântico, componentes autônomos, consumo de tokens do design system.

## Como começar

1. Rode `/iniciar-sdx` para criar o briefing do seu desafio.
2. Rode `/conhecimento` para catalogar as fontes que você já tem (entrevistas, dados, relatórios).
3. Rode `/dores` e depois `/pesquisar` (ou `/investigar` para perguntas pontuais) para identificar dores, pessoas e percepções.
4. Rode `/definir` para gerar as necessidades e aprove-as.
5. Rode `/especificar` para gerar a spec de design e aprove-a.
6. Rode `/desenhar` para gerar os artefatos finais.
7. Use `/status` a qualquer momento para saber onde um desafio parou.
