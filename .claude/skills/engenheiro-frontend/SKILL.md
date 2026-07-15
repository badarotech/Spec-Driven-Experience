---
name: engenheiro-frontend
description: Implementa artefatos de front-end (HTML, CSS, JS) a partir de uma spec de design aprovada, usando marcação semântica, componentes autônomos e apenas os tokens e componentes já existentes no design system. Use ao rodar /desenhar para transformar spec-design.md em código real dentro de desenho/.
---

# Engenheiro frontend

Skill usada pelo comando `/desenhar`, sempre em conjunto com `acessibilidade`. Só executa depois do gate humano: `spec-design.md` precisa estar com `status: aprovado`. Transforma a spec em artefatos reais dentro de `desafios/<slug>/desenho/`.

## Regra de ouro: consumir, não inventar

Todo componente, cor, espaçamento e fonte usado vem de `design-system/`. Se a spec pede algo que não existe lá, o comando para e sinaliza a lacuna (nome do componente ou token que falta, e em que tela ele seria usado), em vez de criar um componente novo ou um valor solto para resolver rápido. Isso vale mesmo quando "seria fácil" improvisar: improvisar quebra a origem única de verdade que o design system deveria ser.

## HTML semântico primeiro

- Use o elemento nativo que corresponde à função antes de recorrer a `div`/`span` com ARIA. Um botão é `<button>`, não uma `div` com `onclick`. Um link de navegação é `<a href>`, não um elemento genérico com evento de clique.
- Estrutura de documento com landmarks (`header`, `nav`, `main`, `footer`) e hierarquia de cabeçalhos correta, coerente com a ordem definida na spec.
- ARIA só quando a semântica nativa não cobre o padrão (por exemplo, um componente de abas ou um combobox customizado). Nesses casos, siga o padrão de teclado e papéis (roles) documentado para aquele padrão, não invente um próprio.
- Formulários com `label` associado a cada campo (via `for`/`id` ou aninhamento), nunca só um placeholder fazendo esse papel.

## Consumo de tokens

- Toda cor, espaçamento, raio, sombra e tipografia referencia um token nomeado do design system (por exemplo, uma variável CSS ou classe utilitária já definida lá), nunca um valor numérico solto direto no código.
- Se o design system expõe tokens como propriedades customizadas CSS, use-as diretamente (`var(--nome-do-token)`), não copie o valor resolvido.
- Nomeie a origem do token em comentário quando não for óbvio, para facilitar auditoria futura.

## Componentes autônomos

- Cada componente é responsável pelo próprio estilo, marcação e comportamento; evite dependências implícitas de estilos globais que vazam de outro componente.
- Um componente recebe estado (vazio, carregando, sucesso, erro, conforme especificado por `designer`) como entrada explícita, não infere o estado sozinho.
- Prefira componentes pequenos e compostos a um bloco monolítico que mistura várias responsabilidades da tela.
- JS mínimo e específico do comportamento necessário; nenhuma dependência externa que não esteja justificada pela tarefa.

## Rastreabilidade no código

Todo bloco gerado (uma seção de tela, um componente, um trecho de lógica de estado) carrega um comentário citando o critério de aceite que ele satisfaz, no formato:

```html
<!-- Atende: NEC-03-CA1 -->
```

Um bloco sem esse comentário é um sinal de que ele não tem justificativa na spec e não deveria existir ali.

## Fluxo de trabalho

1. Confirme `status: aprovado` em `spec-design.md`. Se não estiver aprovado, pare e explique o que falta.
2. Releia a spec inteira (fluxo, telas, estados, componentes citados, microtexto, tabela de rastreabilidade) antes de escrever qualquer arquivo.
3. Confira cada componente e token citado contra `design-system/`. Liste lacunas encontradas antes de prosseguir; se houver lacuna bloqueante, pare e sinalize em vez de desenhar em torno dela.
4. Gere os arquivos em `desenho/`, um bloco por vez, cada um citando o critério de aceite correspondente.
5. Revise o resultado contra a tabela de rastreabilidade da spec: todo critério listado ali tem um bloco correspondente no código.

## Checklist de qualidade

- [ ] `spec-design.md` está com `status: aprovado` antes de qualquer arquivo ser criado ou modificado.
- [ ] Nenhum componente, cor, espaçamento ou fonte foi inventado fora de `design-system/`; lacunas foram sinalizadas explicitamente.
- [ ] Marcação usa elementos semânticos nativos antes de ARIA; ARIA usada segue um padrão reconhecido, não um improviso.
- [ ] Todo campo de formulário tem rótulo associado programaticamente.
- [ ] Todo componente recebe o estado como entrada explícita e cobre os estados definidos na spec.
- [ ] Todo bloco relevante cita em comentário o critério de aceite que satisfaz.
- [ ] Todo critério de aceite da tabela de rastreabilidade da spec tem um bloco correspondente no código gerado.
- [ ] A skill `acessibilidade` foi aplicada ao resultado final (contraste, foco, alvos de toque, semântica).
