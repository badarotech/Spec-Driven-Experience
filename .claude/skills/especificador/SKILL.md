---
name: especificador
description: Decompõe dores e pessoas em necessidades com critérios de aceite verificáveis, sem pular direto para solução visual. Use ao rodar /definir, ou sempre que for preciso transformar um achado de pesquisa em um requisito testável antes de desenhar qualquer tela.
---

# Especificador

Skill de UX Design e especificação usada pelo comando `/definir`. Produz o elo `Necessidade (NEC-xx)` da cadeia de rastreabilidade, o degrau mais importante para impedir que o time pule direto de "achado de pesquisa" para "tela pronta".

## Método: de dor a necessidade, sem passar pela solução

Uma necessidade descreve o que precisa ser verdadeiro para a pessoa, não como a interface vai resolver isso. Teste rápido: se a frase da necessidade já menciona um botão, uma tela ou um componente específico, ela é uma solução disfarçada de necessidade, decomponha de novo.

Passos:

1. Releia a(s) Dor(es) e Pessoa(s) relacionadas.
2. Pergunte "o que precisa ser verdadeiro para que essa dor não aconteça (ou doa menos)?". A resposta é a necessidade, em termos de resultado, não de mecanismo.
3. Verifique se a necessidade já existe (mesmo com outras palavras) em `necessidades.md`. Se existir, associe a nova Dor a ela em vez de duplicar.
4. Escreva os critérios de aceite (ver abaixo) antes de imaginar qualquer solução visual.

## Necessidades de tamanho certo

Uma necessidade grande demais ("simplificar o onboarding") não é testável nem específica o bastante para gerar uma spec de design coerente. Uma necessidade pequena demais vira uma tarefa de implementação, não uma necessidade de experiência. Use estes checks:

- **Independente**: dá para aprovar ou rejeitar esta necessidade sem depender do resultado de outra ainda não decidida?
- **Negociável**: existe mais de uma forma razoável de atender a ela? Se só existe uma forma, provavelmente já é uma solução, não uma necessidade.
- **Valiosa**: está claro, a partir da dor e da pessoa citadas, por que atendê-la importa?
- **Estimável**: dá para ter uma ideia do esforço de especificar e desenhar uma resposta a ela?
- **Testável**: os critérios de aceite (abaixo) conseguem dizer, de forma objetiva, se ela foi atendida?

Se uma necessidade falhar em "testável" ou "negociável", quebre-a em duas ou mais necessidades menores antes de aprovar.

## Critérios de aceite verificáveis

Um critério de aceite é verificável quando duas pessoas diferentes, lendo o mesmo resultado, chegam à mesma conclusão sobre se ele foi atendido. Formato recomendado (adaptado de Gherkin, sem exigir ferramenta de teste automatizado):

```
Dado [contexto/estado inicial],
quando [ação da pessoa ou evento do sistema],
então [resultado observável e mensurável].
```

Exemplos:

- Fraco (não verificável): "O processo de checkout deve ser rápido e fácil."
- Forte (verificável): "Dado que a pessoa já tem um método de pagamento salvo, quando ela chega à tela de revisão do pedido, então ela consegue finalizar a compra em no máximo 2 toques, sem preencher nenhum campo novo."

Cada critério registra também `verificavel_por`: como alguém vai de fato checar isso (teste de usabilidade moderado, métrica de produto instrumentada, revisão heurística, checagem manual de conteúdo). Um critério sem forma de verificação declarada não está pronto.

## Erros comuns a evitar

- **Necessidade que é solução disfarçada**: "ter um filtro de categoria" é solução; "encontrar um produto específico em menos de N tentativas" é necessidade.
- **Critério de opinião**: "a tela deve parecer profissional" não é verificável por duas pessoas de forma consistente.
- **Necessidade sem pessoa nem dor**: toda necessidade cita ao menos uma Dor e uma Pessoa. Se não há dor nem pessoa por trás, é uma ideia de feature, não uma necessidade validada pelo SDX.
- **Necessidade órfã do gate**: nunca marque `status: aprovada` sem a aprovação explícita da pessoa responsável, registrada em `aprovado_por` e `data_aprovacao`.

## Checklist de qualidade antes do gate humano

- [ ] Toda necessidade cita ao menos uma Dor e uma Pessoa existentes.
- [ ] Nenhuma necessidade menciona um componente de interface específico na sua descrição.
- [ ] Toda necessidade tem ao menos um critério de aceite no formato dado/quando/então.
- [ ] Todo critério de aceite tem um `verificavel_por` concreto, não genérico.
- [ ] Necessidades grandes demais foram quebradas; nenhuma necessidade mistura dois resultados independentes.
- [ ] Não há necessidades duplicadas ou sobrepostas sem justificativa.
- [ ] O artefato foi mostrado à pessoa responsável e a aprovação explícita foi pedida antes de considerar o gate cumprido.
