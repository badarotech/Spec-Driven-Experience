# Template: Percepção (PER-xx)

Copie o bloco abaixo para `percepcoes.md` do desafio. Numeração sequencial dentro do desafio.

```yaml
id: PER-xx
titulo:
fontes: []              # obrigatório: [SRC-xx, ...]. Uma percepção sem fonte não é percepção, é hipótese
dores_relacionadas: []  # DOR-xx que esta percepção ajuda a explicar, se já existirem
pessoas_relacionadas: [] # PES-xx que esta percepção ajuda a caracterizar, se já existirem
procedencia: evidencia   # evidencia | desk | hipotese
confianca: media          # alta | media | baixa. Nunca maior que a confiabilidade das fontes. Alta exige 2+ fontes independentes triangulando o mesmo achado
data_captura:            # obrigatório quando procedencia = desk
url:                      # obrigatório quando procedencia = desk
status: ativa
```

## Descrição

O que foi observado, dito ou medido. Cite explicitamente qual fonte diz o quê: "Segundo SRC-03, ..." em vez de afirmar sem atribuição.

## Por que isso importa para o desafio

Como essa percepção se conecta ao objetivo descrito em `briefing.md`.

## Notas de uso

- Se `procedencia: hipotese`, o título e o corpo carregam o rótulo visível "(a validar)" e `confianca` é sempre `baixa`.
- Se `procedencia: desk`, a fonte externa correspondente já está catalogada em `conhecimento/fontes.md` antes de esta percepção existir; `fontes` referencia esse `SRC-xx`.
- Confiança alta exige que pelo menos duas fontes independentes (não a mesma fonte citada duas vezes, nem duas fontes com o mesmo viés) apontem para a mesma conclusão. Liste as duas em `fontes`.
