# Desenho: SPEC-01, Fila em votação na Jam em grupo

Saída de `/desenhar` para `desafios/jam-grupo/spec-design.md` (SPEC-01, `status: aprovado`). Ponto de partida: cópia de `desafios/jam-grupo/baseline/`, com o modo de fila trocado de `chegada` para `votacao`.

## Arquivos

- `JamGrupoVotacao.tsx`: a tela completa, composta só com componentes do design system.
- `capas.ts`: capas placeholder das faixas como SVG inline (gradientes aproximando as artes reais). Reaproveitado do baseline, sem mudança.
- `styles.css`: layout de página (largura de celular, FAB flutuante e barra do player fixos), estado vazio, estado de carregamento e região de anúncio para leitor de tela.

## O que mudou em relação ao baseline

- `QueueList` passa de `mode='chegada'` (com `DragHandle`, reordenação manual) para `mode='votacao'` (com `VoteControl` em cada item, ordem recalculada pelo saldo de votos do grupo). Decisão de escopo da SPEC-01: os dois modos não coexistem nesta tela.
- Seção da fila renomeada de "Próximas na fila" para "Fila em votação", com `LiveBadge` ("ao vivo") e legenda que orienta a mecânica de voto.
- Votação otimista: tocar ↑/↓ registra, troca ou desfaz o próprio voto na hora; uma confirmação de servidor é simulada (não há backend) e, se falhar, a atualização é desfeita e a legenda mostra um aviso temporário (ramo de erro da SPEC-01).
- Estado Vazio (sem faixas na fila) e estado Carregando (texto simples, ver lacuna abaixo) foram adicionados.
- Região `aria-live="polite"` anuncia mudanças de ordem para leitores de tela, com intervalo mínimo entre anúncios.

## Ajustes feitos no design system durante este desenho

Dois achados de acessibilidade da SPEC-01 exigiam ação de `/desenhar`; ambos foram resolvidos na fonte (não workarounds na tela):

- **Alvo de toque do `VoteControl`** (`design-system/components/VoteControl/styles.css`): as setas tinham ~16x16px; agora têm no mínimo 24x24px (WCAG 2.2 AA, critério 2.5.8), com o mesmo tamanho visual do ícone.
- **Contraste do saldo em destaque** (`design-system/tokens/tokens.css`): `--ds-color-negative` ajustado de `#f15e6c` (4,48:1) para `#f56e7b` (5,06:1) sobre `--ds-color-background-highlight`, acima do mínimo de 4,5:1 (WCAG 2.2 AA, critério 1.4.3). Único consumidor do token, sem efeito colateral em outros componentes.

Duas lacunas de design system seguem sem componente dedicado (não bloqueiam esta spec, ver spec-design.md): carregamento (skeleton/spinner) e notificação transitória (toast/snackbar). O estado Carregando usa texto simples ("Carregando fila...") como alternativa mínima, e o estado de erro reaproveita a legenda da seção, conforme a própria SPEC-01 orienta.

## Como ver no navegador

Duas opções:

1. **Sem instalar nada**: abra `preview.html` (nesta pasta) com duplo clique. É um build estático da tela, gerado a partir dos mesmos arquivos.
2. **Modo desenvolvimento**: dentro de `desafios/jam-grupo/desenho/`, rode `npm install` e depois `npm run dev`, e acesse a URL indicada. O `vite.config.ts` libera o acesso ao `design-system/` da raiz via `server.fs.allow`.

Se editar a tela, regenere o `preview.html` (`npm run build`, depois inline o CSS/JS gerados em `dist/` neste arquivo) ou use o modo dev para ver as mudanças ao vivo.

## Diferenças conhecidas em relação à captura original

- As capas das faixas são cenas SVG placeholder, não as artes licenciadas.
- Os avatares usam fotos placeholder do serviço pravatar.cc (exigem internet; sem rede, o `Avatar` cai no fallback de inicial).
- A confirmação de servidor do voto é simulada (atraso e falha ocasional aleatória) para demonstrar o ramo de erro da SPEC-01; não há backend real.
