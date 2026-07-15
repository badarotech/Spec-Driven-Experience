# Template: Pessoa (PES-xx)

Copie o bloco abaixo para `pessoas.md` do desafio. Numeração sequencial dentro do desafio. Uma Pessoa aqui é uma persona baseada em evidência, não um arquétipo de marketing: ela existe para agrupar dores e necessidades reais, não para ilustrar um público-alvo genérico.

```yaml
id: PES-xx
nome:                 # nome fictício curto, só para referência (ex.: "Marina, gestora de operações")
resumo:                # 1 a 2 frases
dores: []              # DOR-xx que esta pessoa vivencia
fontes: []             # SRC-xx que embasam esta caracterização
percepcoes: []         # PER-xx relacionadas, se houver
procedencia: evidencia   # evidencia | desk | hipotese
confianca: media         # alta | media | baixa
status: ativa
```

## Contexto

Papel ou situação de vida relevante para o desafio, nível de familiaridade com o produto, cenário típico de uso. Só inclua um traço se ele mudar o comportamento relevante para o desafio; não preencha campos demográficos decorativos.

## Objetivos

O que esta pessoa está tentando alcançar quando encontra as dores listadas acima.

## Notas de uso

- Toda Pessoa cita ao menos uma dor, fonte ou percepção. Uma Pessoa sem nenhuma das três é uma suposição de quem seria o usuário, não uma persona validada: marque `procedencia: hipotese` e `confianca: baixa`.
- Prefira poucas Pessoas bem sustentadas a muitas Pessoas genéricas. Se duas pessoas descritas compartilham as mesmas dores e o mesmo contexto, são a mesma Pessoa.
- Ao criar uma Pessoa nova, volte às dores já registradas em `dores.md` e preencha o campo `pessoas_relacionadas` delas.
