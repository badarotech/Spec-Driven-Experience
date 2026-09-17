# Protótipo v2 (exploratório): drawer de votação na Jam em grupo

**Este NÃO é um artefato oficial do fluxo SDX.** Não existe uma Spec de Design aprovada em `spec-design.md` que descreva o padrão de bottom-drawer usado aqui, nem o design system tem hoje um componente de botão circular de voto ou de bottom-drawer. Este código foi gerado como exploração visual/técnica, a pedido direto, pulando o gate de `/especificar` (ver `CLAUDE.md`, princípios 1, 7 e 8).

Antes de tratar esta tela como definitiva, o caminho recomendado é rodar `/definir` e `/especificar` para descrever formalmente esse novo padrão de interação, e registrar (ou resolver) a lacuna de componentes de drawer e botão circular de voto no design system.

Ponto de partida: cópia de `desafios/jam-grupo/desenho/` (SPEC-01, `mode='votacao'`).

## O que muda em relação a `desenho/`

- Remove o cabeçalho de seção "Fila em votação" (legenda + selo "ao vivo").
- Adiciona duas ações lado a lado: "Adicionar" (verde, sem interação) e "Votar na ordem das faixas" (cinza escuro, abre o drawer).
- Adiciona o título simples "Próximas na fila:" acima da lista principal.
- A lista principal vira somente leitura: sem numeração e sem `VoteControl`, só capa, título, artistas e quem adicionou (via `TrackMeta`).
- Adiciona um bottom-drawer (fechado por padrão, abre a 78px do topo) com drag handle, título "Votação", subtítulo explicativo, e a mesma fila com botões circulares de voto (verde quando "up", vermelho quando "down").

## Elementos novos sem componente equivalente no design system

- **Botão circular de voto** (`.jam-v2-voto-circular` em `JamGrupoVotacao.tsx`/`styles.css`): substitui o `VoteControl` (setas + contagem) por dois botões circulares separados, sem exibir o saldo numérico. Construído como código de página, não como componente de design system.
- **Bottom-drawer** (`.jam-v2-drawer`): não existe hoje um padrão de drawer no design system; a folha, o `overlay` e a animação foram implementados diretamente nesta tela.
- **Botão secundário cinza escuro**: o `PillButton` do design system não tem uma variante nesse tom; a cor foi sobreposta via classe própria (`.jam-v2-acoes__votar`), reaproveitando os tokens de cor existentes (`--ds-color-background-highlight`).

## Como ver no navegador

1. **Sem instalar nada**: abra `preview.html` (nesta pasta) com duplo clique.
2. **Modo desenvolvimento**: dentro de `desafios/jam-grupo/desenho-v2/`, rode `npm install` e depois `npm run dev`.

Se editar a tela, regenere `preview.html` (`npm run build`, depois inline o CSS/JS de `dist/` neste arquivo) ou use o modo dev.
