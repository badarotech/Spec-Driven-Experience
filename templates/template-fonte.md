# Template: Fonte (SRC-xx)

Copie o bloco abaixo para `conhecimento/fontes.md`, preencha e numere sequencialmente. Uma fonte por bloco. Não reutilize um número de SRC já emitido.

```yaml
id: SRC-xx
titulo:
tipo:                 # entrevista | dado-de-produto | relatorio | artigo | pesquisa-de-mercado | ticket-de-suporte | benchmark | outro
origem:                # nome do estudo, autor, sistema de origem
data:                  # data de publicação ou de coleta original
data_captura:          # obrigatório para fontes de pesquisa externa (desk): data em que o agente acessou
url:                    # obrigatório para fontes externas (desk); omitir para fontes internas
caminho_repositorio: conhecimento/originais/[arquivo ou pasta]
contexto_recorte:       # o que esta fonte cobre e o que fica de fora dela
confiabilidade:         # alta | media | baixa
confiabilidade_justificativa: # por que essa nota: tamanho de amostra, metodologia, autoridade da fonte
vieses:                 # amostra pequena, autosseleção, desatualização, conflito de interesse. "nenhum identificado" é válido, mas nunca o padrão sem checar
status: ativa           # ativa | descontinuada
```

## Resumo

Duas a quatro frases descrevendo o que a fonte diz e por que importa para os desafios que a citam.

## Notas de uso

- Uma fonte de tipo `desk` sempre tem `url` e `data_captura` preenchidos, e a percepção que ela sustenta recebe `procedencia: desk`.
- `confiabilidade` reflete a força metodológica da fonte em si (uma entrevista com 1 pessoa é `baixa`; um estudo quantitativo com amostra representativa pode ser `alta`), não a força da conclusão que alguém tirou dela.
- Antes de criar uma fonte nova, procure em `fontes.md` por título ou origem equivalente. Se já existir, reuse o `SRC-xx`.
