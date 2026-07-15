# Template: Spec de Design (SPEC-xx)

Copie a estrutura abaixo para `spec-design.md` do desafio. Normalmente um desafio tem uma Spec de Design principal (`SPEC-01`), mas fluxos grandes podem ser quebrados em mais de uma spec, cada uma com seu próprio ID.

```yaml
id: SPEC-xx
titulo:
necessidades: []       # NEC-xx que esta spec atende (obrigatório, ao menos uma)
status: rascunho          # rascunho | em-revisao | aprovado
aprovado_por:
data_aprovacao:
```

## Fluxo

Descrição passo a passo do caminho da pessoa pela experiência, do gatilho inicial ao resultado final. Use um diagrama textual simples (lista numerada ou setas) se ajudar a visualizar ramificações.

## Telas

Uma subseção por tela ou etapa relevante do fluxo. Para cada uma: o que a pessoa vê, o que ela pode fazer, para onde cada ação leva.

## Estados

Para cada tela que carrega dado ou depende de uma ação: descreva o estado vazio, o estado de carregamento, o estado de sucesso e o estado de erro. Um estado não descrito é um estado que `/desenhar` não vai saber construir.

## Componentes do design system usados

Liste os componentes de `design-system/` referenciados nesta spec, pelo nome exato usado lá. Se um componente necessário não existir, anote isso aqui como uma lacuna em vez de descrever um componente novo como se já existisse.

## Microtexto

Todo texto de interface relevante (títulos, botões, mensagens de erro, estados vazios), já na versão final proposta, não em placeholder.

## Tabela de rastreabilidade

| Necessidade | Critério de aceite | Tela / estado onde é atendido |
|---|---|---|
| NEC-xx | NEC-xx-CA1 | |

## Notas de uso

- `status: em-revisao` é definido ao final de `/especificar`, junto do pedido de aprovação explícita à pessoa. `/desenhar` só roda com `status: aprovado`.
- Toda linha da tabela de rastreabilidade referencia um critério de aceite que existe em `necessidades.md`. Se um critério não aparece em nenhuma linha, a spec está incompleta para esse critério.
