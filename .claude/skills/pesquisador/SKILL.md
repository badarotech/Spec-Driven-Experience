---
name: pesquisador
description: Sintetiza pesquisa de UX a partir de fontes catalogadas, identifica dores, pessoas e percepções usando análise temática e Jobs to be Done, triangula evidências e aplica as regras de honestidade epistemológica do SDX. Use ao rodar /dores, /pesquisar ou /investigar, ou sempre que for preciso transformar conhecimento bruto em achados de pesquisa citáveis.
---

# Pesquisador

Skill de UX Research usada pelos comandos `/dores`, `/pesquisar` e `/investigar`. Aplica-se sempre em conjunto com `constituicao.md` (as regras de honestidade epistemológica ali descritas não são opcionais).

## Método: análise temática

1. **Leitura flutuante**: releia todas as fontes relevantes do desafio antes de codificar qualquer coisa. Não sintetize a partir de memória de uma leitura anterior.
2. **Codificação aberta**: para cada fonte, extraia trechos que descrevem comportamento, atrito, motivação ou contexto. Anote de qual `SRC-xx` cada trecho vem.
3. **Agrupamento em temas**: agrupe códigos semelhantes em temas candidatos. Um tema que aparece em uma única fonte é um candidato fraco; um tema que aparece em fontes independentes e com métodos diferentes é um candidato forte.
4. **Nomeação**: nomeie o tema pela experiência da pessoa, não pela solução ("dificuldade para comparar preços entre planos", não "falta um comparador de planos").
5. **Verificação de recorrência**: antes de promover um tema a Dor ou Percepção, confirme quantas fontes independentes o sustentam. Isso determina a confiança (ver seção de triangulação).

## Jobs to be Done (JTBD)

Use JTBD para entender a motivação por trás de um comportamento, não só o comportamento em si. Estrutura de job story:

```
Quando [situação/contexto], quero [motivação/ação], para que [resultado esperado].
```

JTBD ajuda a distinguir a dor real (o resultado que a pessoa não consegue alcançar) da solução que ela pediu (o mecanismo específico que ela imaginou). Ao registrar uma Dor, pergunte: "que job a pessoa está tentando fazer quando esbarra nisso?". Registre o job na descrição da Dor quando ele ficar claro nas fontes; não infira um job que as fontes não sustentam.

## Triangulação e confiança

Regra fixa (constituicao.md §3): confiança nunca excede a confiabilidade das fontes, e confiança alta exige duas ou mais fontes independentes apontando na mesma direção.

O que conta como "independente":

- Duas entrevistas com pessoas diferentes: independente.
- Duas citações da mesma entrevista: não independente, é uma fonte só.
- Um dado quantitativo de produto e uma entrevista qualitativa apontando para o mesmo padrão: independente e particularmente forte, porque cruza método.
- Duas fontes com o mesmo viés estrutural (por exemplo, ambas são pesquisas de satisfação enviadas só para quem já é cliente fiel) triangulam o achado, mas o viés compartilhado deve ser registrado; não vira confiança alta se o viés compromete a validade da conclusão.

Ao escrever uma Percepção ou Dor com confiança alta, liste as fontes que triangulam no campo `fontes`, não apenas a mais forte.

## Vieses comuns a checar antes de registrar um achado

- **Viés de confirmação**: o achado confirma o que o time já queria ouvir? Releia as fontes procurando ativamente por evidência contrária antes de fechar o tema.
- **Desejabilidade social**: em entrevistas, as pessoas descrevem o que fazem ou o que acham que deveriam dizer que fazem? Dê preferência a dados comportamentais (o que a pessoa fez) sobre dados de autorrelato (o que a pessoa diz que faz) quando os dois estiverem disponíveis e divergirem.
- **Amostra de conveniência**: quantas pessoas, recrutadas como, representando quem? Uma fonte com 3 entrevistas de usuários avançados não sustenta uma afirmação sobre "os usuários" em geral.
- **Viés de recência**: um feedback recente pesa mais na memória do que um padrão histórico mais robusto. Prefira o padrão mais bem sustentado, não o mais lembrado.
- **Viés de sobrevivência**: dados de quem já usa o produto não falam por quem desistiu ou nunca chegou a usar. Sinalize essa lacuna explicitamente quando relevante.
- **Efeito de enquadramento (framing)**: a forma como uma pergunta foi feita influenciou a resposta? Registre isso como parte da `confiabilidade_justificativa` da fonte.

## Evidência, desk e hipótese na prática

- **evidencia**: o achado está diretamente em uma fonte já catalogada em `conhecimento/fontes.md`.
- **desk**: o achado veio de pesquisa externa feita agora. Antes de registrar a percepção, catalogue a fonte externa em `fontes.md` com `url` e `data_captura` (isso é o comando `/investigar` fazendo seu trabalho, não um atalho opcional).
- **hipotese**: raciocínio do agente sem fonte direta. Sempre `confianca: baixa`, sempre com o rótulo "(a validar)" visível no artefato. Uma hipótese pode ser útil para apontar uma lacuna de pesquisa, mas nunca deve ser lida como se fosse um achado.

## Checklist de qualidade antes de fechar um artefato

- [ ] Toda Percepção, Dor e Pessoa cita ao menos uma fonte (`fontes`, `percepcoes` ou ambos), ou está rotulada como `hipotese`.
- [ ] Nenhuma confiança está mais alta do que a confiabilidade da fonte mais forte que a sustenta.
- [ ] Toda confiança `alta` tem duas ou mais fontes independentes listadas.
- [ ] Procurei ativamente por evidência contrária antes de fechar cada tema.
- [ ] Registrei o viés de cada fonte usada, mesmo quando "nenhum identificado".
- [ ] Não dupliquei uma Dor, Pessoa ou Percepção que já existia no desafio; se a nova evidência refina algo existente, atualizei o artefato existente em vez de criar um novo.
- [ ] Toda hipótese está visivelmente rotulada como "(a validar)".
