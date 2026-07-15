# Spec de Design: Fila em votação na Jam em grupo

```yaml
id: SPEC-01
titulo: Fila em votação, decisão coletiva sobre a ordem da fila na Jam em grupo
necessidades: [NEC-01, NEC-02]
status: aprovado
aprovado_por: Victor Camargo
data_aprovacao: 2026-07-15
```

Esta spec atende NEC-01 (a pessoa consegue manifestar preferência sobre a fila dentro do app) e NEC-02 (a ordem da fila passa a refletir essa preferência coletiva), derivadas de DOR-06, PES-03 e PER-04. A decisão de design é trocar, na tela de sessão em grupo, o modo de fila de `chegada` (o estado atual, confirmado pelo baseline em `desafios/jam-grupo/baseline/`, SRC-05) para `votacao`: cada faixa da fila passa a ter um `VoteControl`, e a ordem passa a ser determinada pelo saldo de votos do grupo, não por quem adicionou por último. O modo `votacao` e o componente `VoteControl` já existem no design system prontos para este uso; nenhum componente novo foi necessário para o mecanismo central.

Decisão explícita de escopo: o modo `chegada` (com `DragHandle` e reordenação manual por arrasto) deixa de ser usado na fila da sessão em grupo. Manter os dois modos simultaneamente reintroduziria o problema central de DOR-06 (uma pessoa reordenando por conta própria, à frente da preferência do grupo), o que conflita diretamente com NEC-02. Esta troca resolve apenas DOR-06; DOR-01, DOR-02 e DOR-03 não têm necessidade aprovada nesta rodada, então não são tratadas formalmente aqui, ainda que a votação provavelmente alivie parte delas como efeito colateral (ver Notas de uso).

## Fluxo

1. Gatilho: a pessoa já está numa sessão de Jam em grupo em andamento (como a sessão é criada ou como se entra nela está fora do escopo desta spec).
2. A pessoa vê a fila da sessão como "Fila em votação": toda faixa, exceto a que está tocando, exibe seu saldo de votos e as setas de voto.
3. A pessoa toca a seta para cima ou para baixo em qualquer faixa da fila, incluindo faixas que não são a próxima a tocar:
   - Se ainda não votou naquela faixa, o toque registra o voto (a seta correspondente muda para a cor de marca) e o saldo é atualizado.
   - Se já tinha votado naquele mesmo sentido, tocar de novo desfaz o voto (volta a nenhum voto).
   - Se tinha votado no sentido oposto, tocar no outro lado troca o voto.
4. A atualização é otimista: o saldo e a posição do item mudam na hora do toque, antes de qualquer confirmação de rede.
5. A ordem da fila é recalculada automaticamente, ao vivo, por saldo de votos (maior saldo primeiro), sem que ninguém precise arrastar ou reordenar manualmente nada.
6. A faixa no topo da fila é a próxima a tocar quando a atual terminar; a mecânica de tocar a próxima faixa em si não muda.
7. A pessoa pode adicionar uma nova faixa pelo botão flutuante "Adicionar" (o fluxo de busca de faixa está fora do escopo desta spec); a faixa entra na fila com saldo inicial de 0 votos, sujeita à mesma votação de qualquer outra.
8. Ramo de erro: se o voto não for confirmado pelo servidor (por exemplo, falha de rede), a atualização otimista é desfeita (volta ao estado anterior ao toque) e a pessoa recebe um aviso textual (ver Estados, Erro), podendo tentar de novo tocando a seta outra vez, sem sair da tela.
9. Resultado: qualquer participante consegue opinar sobre a fila inteira dentro do próprio app (NEC-01), e a ordem observada por todos reflete o que o grupo coletivamente votou, não quem adicionou ou mexeu por último (NEC-02).

## Telas

### Sessão em grupo, fila em votação

O que a pessoa vê, de cima para baixo:

- **Cabeçalho da sessão** (`SessionHeader`): fechar, selo "Sessão social", título da sessão, participantes, "Convidar", "Sair". Sem mudança em relação ao baseline.
- **"Tocando agora"** (`SectionHeader` + `NowPlayingItem`): a faixa em reprodução, com título em destaque e avatar de quem adicionou. Não tem `VoteControl`: não faz sentido votar na faixa que já está tocando.
- **"Fila em votação"** (`SectionHeader`): título "Fila em votação", legenda "Ordem definida pelo grupo · toque ↑ ou ↓ para votar", e à direita o selo `LiveBadge` ("ao vivo").
- **Lista da fila** (`QueueList`, `mode='votacao'`): cada item mostra posição, capa, título, artistas, quem adicionou, e o `VoteControl` (seta para cima, saldo, seta para baixo). O saldo do primeiro item da fila é destacado (`highlightFirst`), sinalizando visualmente que aquela posição é a próxima a tocar e reflete o maior apoio do grupo.
- **Botão flutuante "Adicionar"** (`FabButton`): inalterado.
- **Barra do player** (`PlayerBar`): inalterado.

O que a pessoa pode fazer e para onde leva:

- Tocar ↑ ou ↓ em qualquer item da fila: registra, troca ou desfaz o próprio voto; a ordem da fila pode mudar na mesma tela, sem navegação.
- Tocar "Adicionar": abre o fluxo de busca e adição de faixa (não redesenhado nesta spec); ao concluir, a faixa aparece no fim da fila em votação, com saldo 0.
- Ações já existentes do cabeçalho e do player (convidar, sair, tocar, pausar, pular, tela cheia): sem mudança de comportamento.

## Estados

### Vazio

Quando a fila em votação não tem nenhuma faixa (além, eventualmente, da que está tocando): a seção mantém título, legenda e `LiveBadge`, e no lugar da lista aparece uma mensagem (ver Microtexto) convidando a adicionar a primeira faixa. O botão "Adicionar" continua visível como próximo passo natural.

### Carregando

Quando a pessoa entra na sessão e os dados da fila e dos votos ainda não chegaram: o `SessionHeader` pode aparecer assim que os dados de participantes estiverem disponíveis, independentemente da fila. Para a área da fila em si, esta spec identifica uma lacuna: **não existe hoje, no design system, nenhum componente de carregamento (skeleton ou spinner)**. Sem esse componente, este estado não pode ser desenhado com fidelidade. Até que a lacuna seja resolvida, `/desenhar` deve sinalizar o bloqueio em vez de inventar um componente novo; como alternativa mínima e temporária, pode-se usar apenas texto simples ("Carregando fila...") sem estilo visual novo.

### Sucesso

Estado padrão: fila com uma ou mais faixas, ordenada por saldo de votos, cada item com `VoteControl` funcional, `LiveBadge` "ao vivo" indicando que a ordem pode mudar em tempo real conforme o grupo vota.

### Erro (voto não registrado)

Quando o toque em ↑ ou ↓ falha ao ser confirmado pelo servidor: o voto volta ao estado anterior ao toque (sem deixar o saldo num valor incerto), e a legenda da seção "Fila em votação" troca temporariamente (por alguns segundos) de "Ordem definida pelo grupo · toque ↑ ou ↓ para votar" para a mensagem de erro (ver Microtexto), voltando ao texto padrão depois. A saída é clara e não exige navegação: a própria seta continua ali, e tocar de novo é o caminho de tentar de novo.

## Acessibilidade

Auditoria feita contra WCAG 2.2 nível AA, sobre os componentes do design system usados nesta spec.

- **Alvo de toque das setas de voto (achado, requer ação de `/desenhar`).** As setas do `VoteControl` têm hoje uma área de toque de aproximadamente 16x16px (ícone de 12px mais 2px de padding em cada lado), abaixo do mínimo de 24x24px exigido pelo critério 2.5.8 (Target Size Minimum) do WCAG 2.2 AA. Como o voto passa a ser o mecanismo central desta tela (NEC-01) e a sessão é tipicamente usada no celular em contexto social (festa, carro), este ponto é relevante e não deve ser ignorado. Esta spec exige que `/desenhar` aumente a área de toque de cada seta para pelo menos 24x24px, por exemplo com padding adicional invisível ao redor do ícone, mantendo o tamanho visual do ícone como está hoje no design system.
- **Contraste do saldo em destaque (achado, requer decisão consciente).** O saldo de votos com `highlighted` (cor `--ds-color-negative` sobre `--ds-color-background-highlight`) tem contraste de aproximadamente 4,49:1, abaixo do mínimo de 4,5:1 exigido pelo critério 1.4.3 do WCAG 2.2 AA para texto de tamanho normal (14px em negrito não chega ao limiar de texto grande). Recomenda-se ajustar esse token de cor no design system antes de `/desenhar` implementar esta tela. Como alternativa temporária, é possível manter `highlightFirst={false}`, ao custo de perder um dos sinais visuais que ajudam a atender NEC-02-CA2 (o `LiveBadge` e a legenda da seção continuam cumprindo esse papel mesmo sem o destaque de cor).
- **Anúncio de reordenação para leitor de tela (requisito para `/desenhar`).** Como a ordem da fila muda automaticamente conforme os votos mudam, quem usa leitor de tela não percebe essa mudança apenas visualmente. `/desenhar` deve associar à `QueueList` uma região `aria-live="polite"`, anunciando de forma sucinta quando a ordem muda (por exemplo, "a fila foi atualizada"), com um intervalo mínimo entre anúncios (alguns segundos) para não sobrecarregar quem depende do leitor de tela em sessões com votação intensa.
- **Rótulos e estado dos controles de voto (já atendido, sem ação necessária).** O `VoteControl` já expõe `aria-label` nas duas setas ("Votar para subir" / "Votar para descer"), `aria-pressed` refletindo o voto atual da pessoa, e `role="group"` com `aria-label="Votos: N"` no conjunto. Nenhuma mudança é necessária aqui.
- **Ordem de foco (já atendido, sem ação necessária).** A ordem de tabulação segue a ordem visual existente (cabeçalho, tocando agora sem controle, cada item da fila com suas duas setas, botão adicionar, barra do player); como os componentes usados não mudam de estrutura, a ordem de foco não muda em relação ao baseline.

## Componentes do design system usados

`SessionHeader`, `SectionHeader`, `LiveBadge`, `NowPlayingItem`, `TrackMeta` (via `NowPlayingItem` e `QueueItem`), `QueueList` (`mode='votacao'`), `QueueItem`, `VoteControl`, `FabButton`, `PlayerBar`, `Avatar` e `AvatarGroup` (via `SessionHeader`, `TrackMeta`, `NowPlayingItem`), `ExplicitTag` (via `TrackMeta`, quando a faixa é explícita), `SessionBadge` e `PillButton`/`IconButton` (via `SessionHeader` e `PlayerBar`).

Lacunas identificadas (sem componente equivalente hoje no design system):

- **Carregamento**: nenhum componente de skeleton ou spinner existe. Necessário para o estado "Carregando" desta tela (ver Estados).
- **Notificação transitória (toast/snackbar)**: não existe. Para o estado de erro, esta spec contorna a lacuna reaproveitando a legenda já existente do `SectionHeader` como texto temporário de erro, em vez de propor um componente novo. Um componente dedicado de feedback transitório seria preferível a longo prazo, mas não é criado aqui.

## Microtexto

- Título de seção: "Fila em votação"
- Legenda padrão: "Ordem definida pelo grupo · toque ↑ ou ↓ para votar"
- Selo: "ao vivo" (`LiveBadge`, valor padrão do componente, sem mudança)
- Estado vazio, título: "A fila está vazia"
- Estado vazio, corpo: "Adicione a próxima música e o grupo decide o resto."
- Estado de carregamento (placeholder textual mínimo, enquanto a lacuna de componente não é resolvida): "Carregando fila..."
- Legenda temporária de erro (substitui a legenda padrão por alguns segundos): "Não foi possível registrar seu voto agora. Toque de novo."
- Rótulos acessíveis do `VoteControl` (já existentes no componente, sem mudança): "Votar para subir", "Votar para descer", "Votos: {N}"
- Textos já existentes, sem mudança nesta spec: "Tocando agora", "Adicionar" (`FabButton`), "Convidar", "Sair", rótulos do `PlayerBar` ("Tela cheia", "Faixa anterior", "Tocar"/"Pausar", "Próxima faixa", "Adicionar à fila").

## Tabela de rastreabilidade

| Necessidade | Critério de aceite | Tela / estado onde é atendido |
|---|---|---|
| NEC-01 | NEC-01-CA1 | Sessão em grupo, fila em votação · Sucesso: todo item da fila (não apenas o topo) tem `VoteControl`, permitindo votar sobre qualquer faixa dentro do app |
| NEC-01 | NEC-01-CA2 | Sessão em grupo, fila em votação · Sucesso e Vazio: a legenda "Ordem definida pelo grupo · toque ↑ ou ↓ para votar" e o rótulo das próprias setas orientam a ação sem exigir ajuda externa |
| NEC-02 | NEC-02-CA1 | Sessão em grupo, fila em votação · Sucesso: a ordem é recalculada automaticamente por saldo de votos (maior saldo primeiro), não pela ordem de quem adicionou ou mexeu por último |
| NEC-02 | NEC-02-CA2 | Sessão em grupo, fila em votação · Sucesso: o `LiveBadge` "ao vivo", a legenda "Ordem definida pelo grupo" e o saldo de votos visível em cada item comunicam que a posição resultou de uma decisão coletiva, não de uma ação individual isolada |

## Notas de uso

- As dez heurísticas de Nielsen foram checadas contra este desenho; os pontos mais relevantes já estão refletidos no fluxo e nos estados acima: controle e liberdade (desfazer o próprio voto tocando de novo), visibilidade do status do sistema (`LiveBadge` "ao vivo", saldo sempre visível), reconhecimento em vez de memorização (legenda sempre visível explica a mecânica, sem exigir ajuda), e ajuda a reconhecer e recuperar de erros (legenda de erro com caminho de nova tentativa embutido na própria ação).
- Esta spec resolve DOR-06 (via NEC-01 e NEC-02). DOR-01 (imprevisibilidade da fila), DOR-02 (sobrecarga de quem modera) e DOR-03 (constrangimento ao intervir na fila alheia) não têm necessidade aprovada nesta rodada e não são formalmente atendidas aqui; é razoável esperar que a votação alivie parte desses efeitos como consequência indireta (a ordem deixa de depender de quem chega primeiro ou de quem se arrisca a reordenar manualmente a fila de outra pessoa), mas isso não deve ser tratado como comprovado até que uma rodada futura de `/definir` e `/especificar` trate essas dores diretamente.
- Duas lacunas de design system foram identificadas (componente de carregamento e de notificação transitória) e dois achados de acessibilidade que exigem ação de `/desenhar` (alvo de toque das setas, contraste do saldo em destaque). Nenhum dos quatro bloqueia a aprovação desta spec, mas todos devem ser resolvidos ou conscientemente aceitos antes que `/desenhar` produza a versão final desta tela.
- `status: em-revisao` é definido ao final de `/especificar`, junto do pedido de aprovação explícita à pessoa responsável. `/desenhar` só roda com `status: aprovado`.
