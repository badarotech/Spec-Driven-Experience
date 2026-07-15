# Necessidades: Jam em Grupo

Necessidades derivadas de Dores e Pessoas já validadas em `dores.md`, `pessoas.md` e `percepcoes.md`. Nesta rodada, o foco é DOR-06 (ausência de um jeito de decidir a ordem coletivamente dentro do app), a partir de PER-04 (demanda explícita por um mecanismo formal de decisão coletiva) e de PES-03 (Marta, quem quer decidir com o grupo, não decidir sozinha nem esperar). Ver `constituicao.md` §4 para as regras do gate humano aplicado a este artefato.

---

## NEC-01

```yaml
id: NEC-01
titulo: Grupo consegue manifestar preferência coletiva sobre a fila, não apenas sobre a próxima música, sem sair do app
descricao: Quando há desacordo sobre a fila (não apenas sobre qual música toca a seguir, mas sobre a ordem das músicas de forma geral), cada participante da sessão consegue registrar sua preferência dentro do próprio app, sem precisar recorrer a um canal externo (voz, WhatsApp ou qualquer outro).
dores: [DOR-06]
pessoas: [PES-03]
prioridade: alta
status: aprovada
aprovado_por: Victor Camargo
data_aprovacao: 2026-07-15
criterios_aceite:
  - id: NEC-01-CA1
    descricao: "Dado que uma sessão tem 2 ou mais participantes ativos, quando o grupo precisa decidir sobre a fila (seja a próxima música, seja a ordem de outras músicas já adicionadas), então cada participante consegue registrar sua preferência dentro do app, sem abrir ou usar nenhum canal de comunicação externo à sessão."
    verificavel_por: "Teste de usabilidade moderado com sessão simulada de 3+ participantes: observar se algum participante recorre a canal externo (voz, mensagem) para expressar sua preferência sobre a fila durante a tarefa."
  - id: NEC-01-CA2
    descricao: "Dado que a pessoa está participando de uma sessão em grupo, quando ela quer opinar sobre a fila (não só sobre a próxima faixa), então ela consegue completar essa ação sem pedir ajuda a outro participante nem consultar qualquer material de apoio."
    verificavel_por: "Teste de usabilidade com a tarefa 'expresse sua preferência sobre a fila', medindo taxa de sucesso sem assistência (unassisted task success rate)."
```

### Por que esta necessidade existe

PES-03 hoje sustenta um ritual paralelo ao app (votação informal via WhatsApp) porque a ferramenta não oferece nenhuma forma de opinar sobre a fila dentro dela (DOR-06). PER-04 mostra que esse pedido já é explícito na base de usuários (52% preferem decisão colaborativa segundo SRC-03; 18% das menções públicas em SRC-04 pedem votação ou consenso), e o pedido original de SRC-01 ("queria que a galera pudesse opinar ali dentro mesmo") e de SRC-04 ("fila mais democrática") é sobre a fila como um todo, não sobre uma única próxima faixa. Esta necessidade descreve o resultado (a pessoa consegue opinar sobre a fila dentro do app) sem prescrever o mecanismo (enquete, ranking, reação etc.), que fica para `/especificar`.

---

## NEC-02

```yaml
id: NEC-02
titulo: Ordem da fila passa a refletir a preferência coletiva manifestada pelo grupo
descricao: O resultado da fila muda em função do que o grupo coletivamente manifestou, não apenas da ordem de quem adicionou ou mexeu por último.
dores: [DOR-06]
pessoas: [PES-03]
prioridade: alta
status: aprovada
aprovado_por: Victor Camargo
data_aprovacao: 2026-07-15
criterios_aceite:
  - id: NEC-02-CA1
    descricao: "Dado que dois ou mais participantes manifestaram preferências conflitantes sobre a fila (seja sobre a próxima música, seja sobre a posição de outras faixas já adicionadas), quando a decisão coletiva é concluída, então a posição resultante na fila corresponde à preferência que teve mais apoio do grupo, não à ordem de quem adicionou ou mexeu por último."
    verificavel_por: "Checagem manual comparando o registro das preferências manifestadas com a ordem final da fila, em sessões de teste com preferências conflitantes conhecidas, cobrindo tanto a próxima música quanto outras posições da fila."
  - id: NEC-02-CA2
    descricao: "Dado que uma decisão coletiva foi concluída, quando qualquer participante olha a fila resultante, então ele consegue identificar que aquela posição resultou de uma decisão do grupo, não de uma ação individual isolada."
    verificavel_por: "Teste de usabilidade perguntando ao participante 'por que essa música está nessa posição?' logo após uma decisão coletiva, checando se a resposta identifica corretamente a origem coletiva."
```

### Por que esta necessidade existe

NEC-01 garante que a pessoa consiga opinar; esta necessidade garante que opinar tenha efeito real sobre a fila, o que é o núcleo de DOR-06 ("o app hoje não é o lugar onde o grupo decide, é só o lugar onde alguém executa uma decisão tomada em outro canal") e distingue a solução de um mero registro de opinião sem consequência. Sem esta necessidade, a fila continuaria sendo percebida como ilegítima (PER-02) mesmo que existisse um jeito de opinar.

## Notas de uso

- Ambas as necessidades desta rodada respondem a DOR-06 e a PES-03, derivadas de PER-04. Necessidades para as demais dores (DOR-01 a DOR-05) ficam para rodadas futuras de `/definir`.
- Nenhuma das duas menciona um componente de interface específico; o mecanismo concreto (enquete, votação por reação, ranking etc.) é decisão de `/especificar`, não deste artefato.
- Ambas foram aprovadas por Victor Camargo em 2026-07-15, liberando `/especificar` para esta rodada (DOR-06 / PES-03 / PER-04).
