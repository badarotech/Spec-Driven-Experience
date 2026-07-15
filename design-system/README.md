# Design System (SDX)

Design system em React derivado do projeto open source [spotify-react-web-client](https://github.com/francoborrelli/spotify-react-web-client). Os tokens de cor, tipografia e raio foram extraidos dos estilos do repositorio original (`styles/variables.scss`, `App.scss`) e os icones foram extraidos de `components/Icons`. Os componentes foram construidos para cobrir as telas da sessao social (Jam): fila em votacao e fila por ordem de chegada.

## Stack

- React 18+ com TypeScript (componentes funcionais com `memo`, mesmo padrao do repositorio original)
- CSS puro com custom properties (tokens), um `styles.css` por componente
- Sem dependencias externas alem de `react`

## Como consumir

```tsx
// 1. Importe os tokens uma vez na raiz da aplicacao
import './design-system/tokens/tokens.css';

// 2. Importe componentes pelo barrel
import { SessionHeader, QueueList, PlayerBar, tokens } from './design-system';
```

## Estrutura

```
design-system/
  tokens/        tokens.css (custom properties + fontes) e tokens.ts (objeto TS)
  assets/icons/  icones SVG como componentes React
  components/    um diretorio por componente (index.tsx + styles.css)
  index.ts       barrel com todos os exports
```

## Tokens

Todos os tokens usam o prefixo `--ds-` no CSS e estao espelhados no objeto `tokens` em TypeScript. Grupos: cor (fundos `#121212` a `#2a2a2a`, texto primario e subdued `#b3b3b3`, verde da marca `#1ed760` e `#1db954` no press, negativo `#f15e6c`), tipografia (familias SpotifyMixUITitle para titulos e SpotifyMixUI para corpo, corpo de 11 a 32px, pesos 400/700/800), espacamento (escala de 4px, de `--ds-space-1` a `--ds-space-8`), raio (4, 8, 10, pilula 500px e circulo), elevacao (`--ds-shadow-fab`, `--ds-shadow-card`), tamanhos de avatar/capa/play e duracoes de movimento.

## Inventario de componentes

| Componente | O que e | Variantes e estados | Quando usar |
|---|---|---|---|
| `Avatar` | Foto circular de participante, com fallback de inicial | Tamanhos `xs` 16, `sm` 24, `md` 32, `lg` 48 | Identificar uma pessoa (participante, quem adicionou a faixa) |
| `AvatarGroup` | Pilha de avatares sobrepostos com excedente `+N` | `max` (padrao 3), mesmos tamanhos do Avatar | Participantes da sessao no cabecalho |
| `LiveBadge` | Selo pilula com ponto verde e texto | `label` (padrao "ao vivo") | Sinalizar que a fila em votacao atualiza ao vivo |
| `ExplicitTag` | Selo "E" de conteudo explicito | Unico | Ao lado dos artistas de faixa explicita (via `TrackMeta`) |
| `SessionBadge` | Selo verde com icone e texto de contexto | `label` (padrao "Sessão social"), `icon` | Topo da tela de sessao |
| `PillButton` | Botao pilula de texto | `outline`, `solid`, `brand`; tamanhos `sm` 32 e `md` 40 | Acoes da sessao: Convidar, Sair |
| `IconButton` | Botao transparente so de icone | Estado hover; exige `aria-label` | Fechar sessao, controles auxiliares |
| `PlayButton` | Circulo branco de play/pause | `playing` true/false, `diameter` (padrao 56) | Controle central do player |
| `FabButton` | Botao flutuante verde com sombra | `icon` (padrao `AddIcon`) | Acao primaria flutuante "Adicionar" |
| `SectionHeader` | Titulo de secao com legenda e area a direita | `caption`, `trailing` opcionais | "Tocando agora", "Fila em votação", "Próximas na fila" |
| `SessionHeader` | Cabecalho completo da sessao | Composicao de IconButton, SessionBadge, AvatarGroup e PillButton | Topo das duas telas da Jam |
| `TrackMeta` | Capa + titulo + artistas + procedencia | `explicit`, `highlighted` (titulo verde), `addedBy` (com `isYou`) | Base de qualquer linha de faixa |
| `NowPlayingItem` | Linha da faixa em reproducao | `listener` opcional a direita | Secao "Tocando agora" |
| `VoteControl` | Pilula vertical de seta, contagem, seta | `userVote` up/down/null, `highlighted` (contagem em `--ds-color-negative`) | Fila em votacao |
| `DragHandle` | Alca de arrastar acessivel | Estados grab/grabbing | Fila por ordem de chegada |
| `QueueItem` | Linha de fila: posicao + faixa + controle | `trailing` livre (VoteControl, DragHandle) | Dentro de `QueueList` |
| `QueueList` | Lista ordenada da fila | Modos `votacao` e `chegada`; `highlightFirst`; callbacks `onUpvote`, `onDownvote`, `onReorder` | Corpo das duas telas |
| `PlayerBar` | Barra inferior do player | `playing`; callbacks de tela cheia, anterior, play, proxima, adicionar a fila | Rodape das telas |

## Assets (icones)

Em `assets/icons`, todos como componentes React com props `size` e `fill` (padrao `currentColor`), viewBox 16x16 salvo indicacao: `CloseIcon`, `PlayIcon`, `PauseIcon`, `SkipBackIcon`, `SkipNextIcon`, `AddIcon`, `AddToQueueIcon`, `FullScreenIcon` (24x24), `CaretUpIcon`, `CaretDownIcon`, `DragHandleIcon`, `JamIcon`. Convencao de nome: PascalCase com sufixo `Icon`.

## Exemplo: tela da fila em votacao

```tsx
import {
  SessionHeader, SectionHeader, LiveBadge,
  NowPlayingItem, QueueList, FabButton, PlayerBar,
} from './design-system';

const TelaFilaEmVotacao = () => (
  <div style={{ background: 'var(--ds-color-background-base)', minHeight: '100vh' }}>
    <SessionHeader
      title='Jam da Badaró'
      participants={[{ name: 'Aline' }, { name: 'Marco' }, { name: 'Sumit' }, { name: 'Você' }, { name: 'Léo' }]}
      onClose={() => {}} onInvite={() => {}} onLeave={() => {}}
    />
    <SectionHeader title='Tocando agora' />
    <NowPlayingItem
      track={{ coverUrl: '/capa.jpg', title: 'Sober', artists: 'G-Eazy, Charlie Puth', explicit: true }}
      listener={{ name: 'Marco' }}
    />
    <SectionHeader
      title='Fila em votação'
      caption='Ordem definida pelo grupo · deslize ↑ ↓ ou toque'
      trailing={<LiveBadge />}
    />
    <QueueList
      mode='votacao'
      items={[{
        id: '1', coverUrl: '/capa1.jpg', title: 'We Don’t Talk Anymore',
        artists: 'Charlie Puth, Selena Gomez', votes: 6,
        addedBy: { name: 'Aline' },
      }]}
      onUpvote={(id) => {}} onDownvote={(id) => {}}
    />
    <FabButton onClick={() => {}}>Adicionar</FabButton>
    <PlayerBar playing={false} onTogglePlay={() => {}} />
  </div>
);
```

Para a tela por ordem de chegada, troque o `SectionHeader` para "Próximas na fila" com a legenda "Ordem de chegada · quem adiciona por último toca por último" e use `QueueList` com `mode='chegada'`.
