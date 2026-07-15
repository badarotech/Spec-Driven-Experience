# Percepções: Jam em Grupo

Percepções identificadas por análise temática e triangulação das fontes catalogadas em `conhecimento/fontes.md` (SRC-01 a SRC-05), com foco nesta rodada em DOR-01 (imprevisibilidade e sensação de injustiça na fila) e DOR-06 (ausência de mecanismo de decisão coletiva). Ver `constituicao.md` §3 para as regras de honestidade epistemológica aplicadas.

---

## PER-01

```yaml
id: PER-01
titulo: Reordenação manual é a norma em sessões com 4+ participantes, não uma exceção pontual
fontes: [SRC-03, SRC-01, SRC-02]
dores_relacionadas: [DOR-01]
pessoas_relacionadas: [PES-01, PES-02]
procedencia: evidencia
confianca: alta
data_captura:
url:
status: ativa
```

### Descrição

Segundo SRC-03, 68% das sessões com 4 ou mais participantes têm reordenação manual da fila, com média de 5,7 reordenações por sessão ao longo de 90 dias de telemetria (18.400 sessões). Segundo SRC-01, P1 descreve o gatilho direto desse comportamento ("toda música que a pessoa adiciona entra como a próxima da fila... vira bagunça") e P2 descreve a resposta operacional a ele ("passo a festa inteira arrumando a ordem"). Segundo SRC-02, a reconstrução ilustrativa da sessão de festa registra 9 reordenações manuais em 90 minutos, das quais 7 feitas pelo próprio anfitrião. As três fontes cruzam métodos diferentes (telemetria de produto, entrevista qualitativa, observação de campo) e convergem no mesmo padrão.

### Por que isso importa para o desafio

O briefing cita a queda de engajamento ao longo da sessão como problema central. Reordenação constante consome atenção de quem modera (ligando-se a DOR-02) e é o sintoma direto de DOR-01: a fila não tem uma regra de entrada previsível, então alguém precisa corrigi-la manualmente o tempo todo para que ela continue parecendo justa.

---

## PER-02

```yaml
id: PER-02
titulo: A ordem da fila é vivida como ilegítima, não como reflexo do gosto do grupo
fontes: [SRC-03, SRC-01, SRC-04]
dores_relacionadas: [DOR-01]
pessoas_relacionadas: [PES-01, PES-03]
procedencia: evidencia
confianca: alta
data_captura:
url:
status: ativa
```

### Descrição

Segundo SRC-03 (survey in-app, 1.240 respondentes), apenas 28% concordam que "a ordem das músicas reflete o gosto do grupo" e 61% já se incomodaram com alguém mudando a fila. Segundo SRC-01, P1 relata que a fila "vira bagunça" a ponto de o grupo desistir e voltar a uma playlist de uma pessoa só, e P5 afirma que a ordem "nunca reflete o gosto de todo mundo, reflete o gosto de quem mexeu por último". Segundo SRC-04, 39% das 214 menções públicas analisadas (o padrão mais frequente identificado) tratam exatamente da imprevisibilidade da ordem da fila. As três fontes usam métodos e populações distintos (survey de produto, entrevista qualitativa, menções públicas espontâneas) e apontam para a mesma conclusão.

### Por que isso importa para o desafio

Uma fila percebida como ilegítima mina diretamente o indicador de satisfação (NPS) citado no briefing: SRC-03 já mostra o NPS da funcionalidade Jam (14) muito abaixo do NPS geral do app (58), e "bagunça/confusão na fila" é o tema mais citado no feedback negativo (37%).

---

## PER-03

```yaml
id: PER-03
titulo: Quando há conflito sobre a ordem, o grupo resolve por fora do app, não dentro dele
fontes: [SRC-01, SRC-02, SRC-04]
dores_relacionadas: [DOR-06]
pessoas_relacionadas: [PES-03]
procedencia: evidencia
confianca: media
data_captura:
url:
status: ativa
```

### Descrição

Segundo SRC-01, P5 descreve que a decisão sobre a próxima música acontece "por fora" ("decide no grito ou vota no grupo do WhatsApp... a gente manda 'próxima: sertanejo ou pagode?' e o pessoal responde"), nunca dentro do app. Segundo SRC-02, a cena registrada às 01:10 mostra exatamente esse padrão acontecendo ao vivo: uma discussão leve sobre qual música tocar é decidida verbalmente entre os participantes, e o anfitrião apenas executa o resultado na fila; a impressão do observador registra que "as decisões coletivas sobre a ordem acontecem fora do app". Segundo SRC-04, a thread "Sugestão: fila mais democrática" expressa o mesmo incômodo publicamente ("a fila é do grupo, a decisão devia ser do grupo de alguma forma... hoje a gente resolve isso conversando por fora do app").

### Por que isso importa para o desafio

Confirma o núcleo de DOR-06: o app hoje não é o lugar onde o grupo decide, é só o lugar onde alguém executa uma decisão tomada em outro canal. Qualquer solução para DOR-06 precisa trazer esse mecanismo de decisão para dentro da experiência, não apenas registrar melhor uma decisão externa.

### Notas de uso

Confiança limitada a média mesmo com boa triangulação (três fontes independentes, métodos diferentes: entrevista, observação de campo, menção pública espontânea), porque nenhuma das fontes que sustentam esta percepção tem confiabilidade alta (SRC-01 e SRC-04 são média, SRC-02 é baixa por ser reconstrução ilustrativa) — constituicao.md §3, regra 3.

---

## PER-04

```yaml
id: PER-04
titulo: Há demanda explícita, não apenas implícita, por um mecanismo formal de decisão coletiva dentro do app
fontes: [SRC-03, SRC-01, SRC-04]
dores_relacionadas: [DOR-06]
pessoas_relacionadas: [PES-03]
procedencia: evidencia
confianca: alta
data_captura:
url:
status: ativa
```

### Descrição

Segundo SRC-03 (survey in-app, 1.240 respondentes), 52% preferem decisões colaborativas em vez de decisão de uma pessoa só, e a síntese analítica do próprio dado recomenda explicitamente um "mecanismo de voto/consenso". Segundo SRC-01, P5 verbaliza o mesmo desejo em primeira pessoa: "Queria que a galera pudesse opinar ali dentro mesmo, sem depender de uma pessoa mandando na fila nem desse vale-tudo de agora." Segundo SRC-04, 18% das 214 menções públicas analisadas pedem mecanismo de votação ou consenso, e a fonte registra ainda mecânicas análogas usadas em outros domínios (enquetes de apps de mensagem, divisão de contas em apps de viagem) como referência de padrão já validado fora do contexto de música.

### Por que isso importa para o desafio

Esta percepção distingue-se de PER-03: PER-03 descreve o comportamento atual (decisão deslocada para fora do app); PER-04 mostra que a própria base de usuários já articula, sem que ninguém pergunte diretamente "você quer votar?", o formato de solução que resolveria DOR-06. Isso reduz o risco de a especificação inventar uma solução que ninguém pediu.

