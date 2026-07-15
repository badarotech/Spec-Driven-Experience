# Template: Dor (DOR-xx)

Copie o bloco abaixo para `dores.md` do desafio. Numeração sequencial dentro do desafio.

```yaml
id: DOR-xx
titulo:
fontes: []               # SRC-xx que sustentam esta dor diretamente
percepcoes: []           # PER-xx que embasam esta dor, quando existirem
pessoas_relacionadas: [] # PES-xx que sofrem esta dor (pode ficar vazio até /pesquisar rodar)
severidade: media          # alta | media | baixa: o quanto essa dor prejudica a pessoa quando acontece
frequencia: media           # alta | media | baixa: o quão comum é essa dor entre os casos observados
procedencia: evidencia       # evidencia | desk | hipotese
confianca: media             # alta | media | baixa. Regras de constituicao.md §3 se aplicam
status: ativa
```

## Descrição

O que acontece, em que momento da experiência, e qual o efeito prático para a pessoa. Evite descrever a dor já como uma solução disfarçada (por exemplo, "falta um botão de X" é uma solução; a dor é o problema que esse botão resolveria).

## Evidência

Trecho ou paráfrase direta da fonte (ou da percepção) que sustenta esta dor. Cite o `SRC-xx` ou `PER-xx` junto de cada afirmação.

## Notas de uso

- Toda dor cita ao menos uma fonte ou percepção. Sem isso, ela é uma hipótese e deve ser rotulada como tal, com `confianca: baixa`.
- `pessoas_relacionadas` normalmente é preenchido depois, quando `/pesquisar` definir as pessoas do desafio. Releia esta dor nesse momento e atualize o campo.
- Antes de criar uma dor nova, releia as dores já registradas no desafio; se a nova observação é uma variação da mesma dor, não duplique, refine o texto da dor existente e adicione a fonte nova à lista.
