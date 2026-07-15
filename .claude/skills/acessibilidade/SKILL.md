---
name: acessibilidade
description: Audita e especifica requisitos de acessibilidade segundo WCAG 2.2 nível AA (contraste, foco, alvos de toque, navegação por teclado, leitores de tela). Use ao rodar /especificar e /desenhar para garantir que fluxo, telas e código atendam ao nível AA antes de considerar o trabalho pronto.
---

# Acessibilidade

Skill de acessibilidade usada por `/especificar` (junto com `designer` e `redator`) e por `/desenhar` (junto com `engenheiro-frontend`). Referência: WCAG 2.2, nível AA. Nível AA inclui todos os critérios de nível A.

## Critérios que mais geram falha na prática (checklist priorizado)

**Contraste e apresentação visual**

- Contraste de texto normal contra o fundo: mínimo 4.5:1 (1.4.3, AA). Texto grande (a partir de 18pt, ou 14pt em negrito): mínimo 3:1.
- Contraste de componentes de interface e elementos gráficos essenciais para entender o estado (bordas de campo, ícones de status): mínimo 3:1 (1.4.11, AA).
- A informação nunca depende só de cor (1.4.1, A): um erro de campo tem também texto ou ícone, não só borda vermelha.
- Texto redimensionável até 200% sem perda de conteúdo ou funcionalidade (1.4.4, AA).

**Foco e teclado**

- Toda funcionalidade operável por teclado, sem armadilha de foco (2.1.1, 2.1.2, A).
- Ordem de foco segue a ordem lógica/visual da tela (2.4.3, A).
- Indicador de foco visível em todo elemento interativo (2.4.7, AA).
- O indicador de foco não pode ficar totalmente escondido por outro conteúdo da própria página, como um cabeçalho fixo (2.4.11 Focus Not Obscured, Minimum, AA, novo na 2.2).

**Alvos de toque e interação**

- Alvo de toque mínimo de 24x24px CSS, com exceções para links em texto corrido e casos equivalentes (2.5.8 Target Size Minimum, AA, novo na 2.2).
- Funções que dependem de arrastar (dragging) têm uma alternativa de ponto único de toque/clique (2.5.7 Dragging Movements, AA, novo na 2.2).
- Ações acionadas por gesto complexo ou por movimento do dispositivo têm alternativa simples (2.5.1, 2.5.4, A).

**Formulários, erros e autenticação**

- Erro de campo é identificado em texto, não só visualmente (3.3.1, A); veja a skill `redator` para o texto.
- Rótulo ou instrução clara antes de pedir uma entrada (3.3.2, A).
- Para ações com consequência legal, financeira ou de dados, existe confirmação, revisão ou possibilidade de reverter antes de finalizar (3.3.4, AA).
- Informação já fornecida antes no mesmo processo não precisa ser digitada de novo, exceto quando essencial (3.3.7 Redundant Entry, A, novo na 2.2).
- Autenticação não depende exclusivamente de teste cognitivo (lembrar senha, resolver quebra-cabeça, transcrever) sem alternativa, exceto quando essencial por segurança (3.3.8 Accessible Authentication Minimum, AA, novo na 2.2).

**Navegação e ajuda**

- Múltiplas formas de chegar a uma página, quando aplicável (2.4.5, AA).
- Cabeçalhos e rótulos descrevem o conteúdo que seguem (2.4.6, AA).
- Mecanismo de ajuda, quando existe em várias telas, aparece na mesma ordem relativa em todas elas (3.2.6 Consistent Help, A, novo na 2.2).

**Leitores de tela e estrutura semântica**

- Hierarquia de cabeçalhos correta e sem saltos (1.3.1, A): isso é responsabilidade de especificação, não só de código.
- Nome, função e valor de todo componente de interface são expostos programaticamente (4.1.2, A): campos têm rótulo associado, botões têm texto acessível, estados (selecionado, expandido, desabilitado) são comunicados, não só visuais.
- Mudança de conteúdo relevante (mensagem de erro, confirmação, contador) é anunciada a quem usa leitor de tela, tipicamente via região "live" apropriada.

## Como usar esta skill em cada comando

- Em `/especificar`: para cada tela e estado, verifique contraste planejado, ordem de foco, presença de rótulo/instrução, e se erros seguem o padrão de `redator`. Anote requisitos de acessibilidade explícitos na spec quando não forem óbvios (por exemplo, "o indicador de progresso deve ser anunciado a leitores de tela a cada etapa").
- Em `/desenhar`: verifique que o HTML gerado usa elemento semântico correto antes de recorrer a ARIA, que todo alvo interativo atinge 24x24px, que a ordem do DOM corresponde à ordem de foco esperada, e que o contraste dos tokens de design usados atende aos mínimos acima.

## Checklist de qualidade

- [ ] Todo texto e componente de interface citado atinge o contraste mínimo para seu contexto (4.5:1 texto normal, 3:1 texto grande e componentes de interface).
- [ ] Nenhuma informação de estado depende só de cor.
- [ ] Todo elemento interativo é operável por teclado e tem indicador de foco visível e não obscurecido.
- [ ] Todo alvo de toque atinge 24x24px CSS ou tem justificativa de exceção.
- [ ] Ações que arrastam têm alternativa de toque simples.
- [ ] Erros de formulário são identificados em texto, seguem o padrão da skill `redator`, e nenhuma reautenticação exige lembrar informação sem alternativa acessível.
- [ ] Hierarquia de cabeçalhos e nomes/funções/valores de componentes estão corretos para leitores de tela.
- [ ] Nenhum requisito de acessibilidade ficou implícito quando poderia ter sido explicitado na spec ou no código.
