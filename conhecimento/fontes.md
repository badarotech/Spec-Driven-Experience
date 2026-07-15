# Catálogo de fontes

Este arquivo é o catálogo único e compartilhado de todas as fontes de informação usadas em qualquer desafio do SDX. Numeração sequencial e global: `SRC-01`, `SRC-02`, e assim por diante, nunca reutilizada.

Cada fonte é um bloco de frontmatter YAML seguido de um breve resumo. Use `templates/template-fonte.md` para o formato completo de cada campo. Antes de criar uma fonte nova, procure neste arquivo por título ou origem equivalente; se já existir, reuse o ID em vez de duplicar.

Não edite manualmente a numeração de um `SRC-xx` já emitido. Se uma fonte deixar de ser usada, marque `status: descontinuada` no bloco dela em vez de apagar o ID.

---

## SRC-01: Entrevistas sobre experiência de Jam coletiva (P1-P5)

```yaml
id: SRC-01
titulo: Entrevistas sobre experiência de Jam coletiva (P1-P5)
tipo: entrevista
origem: Entrevistas presenciais conduzidas por Victor Camargo, responsável pelo desafio Jam Coletiva, com 5 participantes (P1 a P5)
data: 2026-07-15
caminho_repositorio: conhecimento/originais/SRC-01-entrevistas-jam-coletiva.xlsx
contexto_recorte: Cobre a experiência de 5 participantes com sessões de Jam em grupo (fila colaborativa de músicas): queue jumping, carga de moderação, fricção social ao reordenar/remover faixas, falta de sincronização e feedback visual, e ausência de mecanismo de decisão coletiva. Já inclui codificação temática (tema identificado, categoria), citações-chave, sumário por participante e mapa de temas com contagem de menções. Não cobre uso solo fora de sessões em grupo nem dados quantitativos agregados.
confiabilidade: media
confiabilidade_justificativa: Amostra pequena (5 participantes), pesquisa presencial conduzida pelo próprio responsável pelo desafio, sem recrutamento por terceiros.
vieses: nenhum identificado
status: ativa
```

### Resumo

Cinco entrevistas presenciais exploram como grupos usam a Jam (fila colaborativa) do Spotify em contextos sociais (festas, viagens, churrascos). Os participantes descrevem queue jumping, a carga de um moderador informal, fricção social ao intervir na fila alheia, falhas de sincronização e a ausência de um mecanismo de decisão coletiva dentro do app, o que leva o grupo a negociar por fora (WhatsApp, conversa presencial). Já vem com codificação temática (5 temas) e um mapa de temas com contagem de menções por participante.

---

## SRC-02: Reconstrução ilustrativa de sessão Jam em festa (baseada em logs reais)

```yaml
id: SRC-02
titulo: Reconstrução ilustrativa de sessão Jam em festa (baseada em logs reais)
tipo: outro
origem: Reconstrução ilustrativa elaborada por Victor Camargo, responsável pelo desafio Jam Coletiva, a partir de padrões reais capturados em logs sistêmicos de comportamento (sessões de uso ao longo de 2 dias). Não é a transcrição de uma sessão real única rastreada; é uma cena representativa montada para ilustrar padrões de uso encontrados nos logs.
data: 2026-07-15
caminho_repositorio: conhecimento/originais/SRC-02-observacao-sessao-jam.xlsx
contexto_recorte: Narra uma cena ilustrativa de 90 minutos numa festa com 6 participantes, com timeline de eventos (queue jumping, reordenações manuais, limpeza acidental da fila, dessincronização de tela) e contagens do período, além de impressões do observador sobre o descompasso entre a fila como bem coletivo e o app como espaço de edição individual. Não é uma sessão real única auditável; não cobre uso solo fora de contexto de grupo.
confiabilidade: baixa
confiabilidade_justificativa: Reconstrução ilustrativa (não uma sessão real rastreada), elaborada pelo próprio responsável do desafio a partir de logs de comportamento de apenas 2 dias de uso.
vieses: nenhum identificado
status: ativa
```

### Resumo

Cena ilustrativa que reconstrói, em formato de observação cronológica, uma sessão de Jam em festa com 6 participantes ao longo de 90 minutos, baseada em padrões reais extraídos de logs de comportamento (2 dias de uso). Mostra queue jumping logo no início, um anfitrião que assume moderação repetida da fila, uma limpeza acidental que apaga a fila inteira, e um participante que perde sincronização ao pausar o app. A impressão central: o grupo trata a fila como um bem coletivo, mas o aplicativo a trata como espaço de edição individual irrestrita, empurrando a decisão coletiva para fora do app.

---

## SRC-03: Dados quantitativos de telemetria e survey sobre Jam coletiva

```yaml
id: SRC-03
titulo: Dados quantitativos de telemetria e survey sobre Jam coletiva
tipo: dado-de-produto
origem: Compilação produzida em conjunto pela equipe de dados e pela equipe de pesquisa
data: 2026-07-15
caminho_repositorio: conhecimento/originais/SRC-03-dados-quantitativos-jam.xlsx
contexto_recorte: Cobre telemetria de 18.400 sessões de Jam com 2+ participantes ao longo de 90 dias (reordenações, concentração de reordenação no criador/host, remoção em massa da fila, abandono pós-remoção, queda de adição de faixas ao longo da sessão), um survey in-app com 1.240 respondentes sobre percepção de justiça na fila, comparação de NPS entre a funcionalidade Jam e o app em geral, e uma síntese que conecta cada padrão quantitativo a citações das entrevistas P1-P5 (SRC-01). Não cobre uso solo fora de sessões em grupo nem outras funcionalidades do app.
confiabilidade: alta
confiabilidade_justificativa: Amostras grandes (18.400 sessões de telemetria em 90 dias; 1.240 respondentes de survey), produzida em conjunto pelas equipes de dados e de pesquisa.
vieses: nenhum identificado
status: ativa
```

### Resumo

Compilação de dados quantitativos sobre a experiência de Jam coletiva, produzida em conjunto pelas equipes de dados e de pesquisa. Reúne telemetria de 18.400 sessões com 2+ participantes ao longo de 90 dias (reordenações, remoção em massa da fila, abandono, queda de engajamento ao longo da sessão), um survey in-app com 1.240 respondentes sobre percepção de justiça na fila, e uma comparação de NPS que mostra a funcionalidade Jam (14) muito abaixo do NPS geral do app (58). Inclui uma síntese analítica que conecta cada padrão quantitativo a citações das entrevistas P1-P5 (SRC-01), reforçando queue jumping, moderação assimétrica e ausência de mecanismo de decisão coletiva como problemas centrais.

---

## SRC-04: Menções públicas sobre a experiência de Jam em grupo (dado secundário)

```yaml
id: SRC-04
titulo: Menções públicas sobre a experiência de Jam em grupo (dado secundário)
tipo: pesquisa-de-mercado
origem: Compilação manual de menções públicas (fóruns de usuários, redes sociais, sites de reclamação) sobre a Jam em grupo, produzida internamente a partir de dados identificados manualmente
data: 2026-07-15
caminho_repositorio: conhecimento/originais/SRC-04-reclamacoes-comunidade.xlsx
contexto_recorte: Cobre 214 menções públicas relacionadas à experiência de Jam em grupo ao longo dos últimos 6 meses, coletadas de fóruns de usuários, redes sociais e sites de reclamação, com análise de padrões (ordem imprevisível da fila 39%, edição por terceiros 26%, desejo de decisão coletiva 18%, confusão de estado 11%). Inclui nota sobre ausência de concorrentes diretos com fila colaborativa equivalente e menções a mecânicas análogas de decisão em grupo em outros domínios (enquetes de apps de mensagem, divisão de contas em apps de viagem). Não cobre usuários que não se manifestam publicamente nem dados demográficos dos autores das menções.
confiabilidade: media
confiabilidade_justificativa: Volume razoável (214 menções em 6 meses), mas sujeito a viés de autosseleção de dados públicos (fóruns, redes sociais, sites de reclamação).
vieses: autosseleção; quem reclama espontaneamente em público tende a ter tido experiência pior que a média, o que pode superestimar a insatisfação em relação à base geral de usuários
status: ativa
```

### Resumo

Compilação de 214 menções públicas sobre a experiência de Jam em grupo, coletadas de fóruns de usuários, redes sociais e sites de reclamação ao longo dos últimos 6 meses, produzida manualmente pela equipe a partir de dados identificados. A análise de padrões mostra que 39% das menções tratam de ordem imprevisível da fila (música nova "furando"), 26% de edição por terceiros afetando faixas de outros participantes, 18% de pedidos por decisão coletiva ou fila mais justa, e 11% de confusão sobre o estado da sessão. O documento nota que concorrentes diretos não oferecem fila colaborativa equivalente, limitando comparação, e cita mecânicas análogas de decisão em grupo em outros domínios (enquetes de apps de mensagem, divisão de contas em apps de viagem).

---

## SRC-05: Baseline de código da tela atual de Jam em grupo

```yaml
id: SRC-05
titulo: Baseline de código da tela atual de Jam em grupo
tipo: outro
origem: Reprodução em React elaborada por Victor Camargo, responsável pelo desafio Jam Coletiva, reconstruída a partir do conhecimento geral de como a funcionalidade Jam do Spotify funciona (sem captura real de referência), usando apenas componentes já existentes no design-system do repositório
data: 2026-07-15
caminho_repositorio: conhecimento/originais/SRC-05-baseline-jam-grupo/
contexto_recorte: Cobre a tela completa de uma sessão de Jam em grupo com a fila "Próximas na fila" ordenada por chegada (SessionHeader, "Tocando agora" com NowPlayingItem, QueueList em modo chegada com posição/TrackMeta/DragHandle, FabButton de adicionar, PlayerBar fixa), reordenação manual em memória (sem persistência real) e ausência de qualquer mecanismo de decisão coletiva na interface. Não cobre uso solo fora de sessão em grupo, backend real, drag and drop real, nem as artes de capa e fotos de participantes licenciadas (usa placeholders SVG e pravatar.cc).
confiabilidade: media
confiabilidade_justificativa: Reconstrução por conhecimento geral da funcionalidade real, sem captura de tela ou gravação de referência para validar fidelidade; ainda assim considerada razoavelmente fiel ao comportamento atual conhecido pelo responsável do desafio.
vieses: nenhum identificado além dos já documentados no README do baseline (capas placeholder, avatares de serviço externo pravatar.cc, fila estática sem backend nem drag and drop reais)
status: ativa
```

### Resumo

Reprodução em React da tela atual da funcionalidade Jam do Spotify em sessão em grupo, montada só com componentes do design-system, servindo como registro do estado atual da experiência para o desafio `jam-grupo` antes de qualquer Spec de Design. Mostra a fila "Próximas na fila" ordenada estritamente por ordem de chegada, com legenda explícita "quem adiciona por último toca por último", reordenação manual em memória e nenhum mecanismo de decisão coletiva na interface, reforçando visualmente os achados de SRC-01 a SRC-04 sobre queue jumping e ausência de fila justa. Foi reconstruída a partir do conhecimento geral da funcionalidade, sem uma captura real de referência.
