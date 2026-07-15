---
name: designer
description: Traduz necessidades aprovadas em fluxo, telas e estados de interface, aplicando hierarquia visual e as dez heurísticas de usabilidade de Nielsen. Use ao rodar /especificar para desenhar o comportamento da experiência antes de qualquer código ou visual final.
---

# Designer

Skill de Product Design usada pelo comando `/especificar`. Produz o fluxo, as telas e os estados descritos em `spec-design.md`. Não gera código nem visual final (isso é `engenheiro-frontend`, em `/desenhar`); aqui a saída ainda é especificação, só que já em termos de interface.

## Método: da necessidade ao fluxo

1. Releia todas as necessidades aprovadas que esta spec atende.
2. Para cada necessidade, pergunte: qual é o caminho mais curto e mais claro para que o critério de aceite seja satisfeito?
3. Desenhe o fluxo completo antes de detalhar telas individuais: gatilho de entrada, passos principais, pontos de decisão, saídas (sucesso e desistência).
4. Só depois de o fluxo fazer sentido de ponta a ponta, detalhe cada tela.
5. Para cada tela que depende de dado externo ou ação assíncrona, especifique os quatro estados obrigatórios (vazio, carregando, sucesso, erro) e quaisquer estados adicionais relevantes ao caso (parcialmente carregado, sem permissão, offline).

## As dez heurísticas de Nielsen (checklist de avaliação de fluxo e tela)

1. **Visibilidade do status do sistema**: a pessoa sempre sabe o que está acontecendo, em tempo razoável.
2. **Correspondência entre o sistema e o mundo real**: linguagem e conceitos familiares à pessoa, não jargão interno.
3. **Controle e liberdade do usuário**: existe uma saída clara (desfazer, cancelar, voltar) para toda ação relevante.
4. **Consistência e padrões**: mesmo componente, mesmo comportamento, em todo o fluxo e em relação ao resto do produto.
5. **Prevenção de erros**: o design evita que o erro aconteça, em vez de só tratar a mensagem depois.
6. **Reconhecimento em vez de lembrança**: a pessoa não precisa memorizar informação de uma tela para usar na próxima.
7. **Flexibilidade e eficiência de uso**: atalhos para quem já conhece o fluxo, sem prejudicar quem está usando pela primeira vez.
8. **Estética e design minimalista**: só o que é relevante para a decisão da pessoa naquele momento está na tela.
9. **Ajudar a pessoa a reconhecer, diagnosticar e se recuperar de erros**: mensagem em linguagem simples, que diz o que houve e como seguir (ver skill `redator` para o texto exato).
10. **Ajuda e documentação**: quando necessária, é fácil de encontrar e específica da tarefa em curso, não um manual genérico.

Ao especificar uma tela, rode mentalmente esta lista. Uma violação encontrada aqui é mais barata de corrigir agora do que depois de `/desenhar`.

## Hierarquia visual e leiturabilidade

- **Um objetivo principal por tela**: a ação mais importante é a mais visível (posição, contraste, tamanho); ações secundárias e destrutivas têm peso visual menor.
- **Escaneabilidade**: pessoas escaneiam antes de ler. Títulos e rótulos precisam fazer sentido isolados, sem exigir leitura do parágrafo inteiro.
- **Divulgação progressiva**: mostre o essencial primeiro; detalhes e opções avançadas ficam disponíveis, mas não competem visualmente com a tarefa principal.
- **Affordance**: um elemento clicável parece clicável, um campo editável parece editável. Não invente um padrão de interação novo quando um padrão já reconhecido resolve.

## Especificando estados (obrigatório documentar todos os aplicáveis)

- **Vazio**: o que a pessoa vê antes de haver qualquer dado; inclui uma explicação do que vai aparecer ali e, quando fizer sentido, uma ação para começar.
- **Carregando**: indicação de que algo está em andamento; para esperas longas, considere indicar progresso, não só um indicador indefinido.
- **Sucesso**: confirmação clara de que a ação deu certo, e o que a pessoa pode fazer a seguir.
- **Erro**: o que houve, por que, e o que a pessoa pode fazer agora (nunca um estado de erro sem saída; ver skill `redator`).

## Checklist de qualidade antes de fechar a spec

- [ ] O fluxo cobre entrada, caminho principal, pontos de decisão e as duas saídas (sucesso e desistência/erro).
- [ ] Toda tela relevante tem os quatro estados obrigatórios descritos, não só o estado feliz.
- [ ] Rodei as dez heurísticas de Nielsen contra o fluxo e registrei ajustes feitos por causa disso.
- [ ] Cada tela tem um objetivo principal claro e visualmente dominante.
- [ ] Todo componente citado existe em `design-system/`; lacunas foram sinalizadas, não inventadas.
- [ ] A tabela de rastreabilidade cobre todo critério de aceite das necessidades atendidas por esta spec.
