# Baseline: Jam em grupo (fila por ordem de chegada)

Reprodução em React da tela atual da funcionalidade Jam do Spotify em sessão em grupo, com a fila "Próximas na fila" ordenada por chegada. Serve como registro do estado atual da experiência para o desafio `jam-grupo`. Não é saída de `/desenhar`: é uma referência do ponto de partida, anterior a qualquer Spec de Design.

## Arquivos

- `JamGrupoBaseline.tsx`: a tela completa, composta só com componentes do design system.
- `capas.ts`: capas placeholder das faixas como SVG inline (gradientes aproximando as artes reais).
- `styles.css`: layout de página (largura de celular, FAB flutuante e barra do player fixos).

## Componentes do design system usados

`SessionHeader` (fechar, selo "Sessão social", título, AvatarGroup +2, Convidar, Sair), `SectionHeader` ("Tocando agora" e "Próximas na fila" com legenda), `NowPlayingItem` (Sober, com selo E de conteúdo explícito), `QueueList` em modo `chegada` (posição, TrackMeta com quem adicionou, DragHandle), `FabButton` (Adicionar) e `PlayerBar` (tela cheia, anterior, play, próxima, adicionar à fila).

Nenhum componente novo foi criado: o inventário atual do design system cobriu a tela inteira.

## Como ver no navegador

Duas opções:

1. **Sem instalar nada**: abra `preview.html` (nesta pasta) com duplo clique. É um build estático da tela, gerado a partir dos mesmos arquivos.
2. **Modo desenvolvimento**: o harness Vite fica nesta própria pasta (`package.json`, `vite.config.ts`, `index.html`, `main.tsx`). Dentro de `desafios/jam-grupo/baseline/`, rode `npm install` e depois `npm run dev`, e acesse a URL indicada. O `vite.config.ts` libera o acesso ao `design-system/` da raiz via `server.fs.allow`.

Se editar a tela, regenere o `preview.html` ou use o modo dev para ver as mudanças ao vivo.

## Como rodar

O componente pressupõe um app React 18+ com TypeScript e suporte a import de CSS (Vite, por exemplo):

```tsx
import JamGrupoBaseline from './desafios/jam-grupo/baseline/JamGrupoBaseline';

export default function App() {
  return <JamGrupoBaseline />;
}
```

Os tokens (`tokens.css`) já são importados pelo próprio componente.

## Diferenças conhecidas em relação à captura

- As capas das faixas são cenas SVG placeholder que aproximam as artes originais, não as artes licenciadas. Para usar as artes reais, troque as URLs em `capas.ts`.
- Os avatares usam fotos placeholder do serviço pravatar.cc (exigem internet; sem rede, o `Avatar` cai no fallback de inicial).
- A reordenação da fila (arrastar pela alça, ou setas do teclado com a alça focada) é local, em memória; não há backend.
