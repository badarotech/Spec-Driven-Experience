---
description: Mostra em que etapa um desafio está, derivando o estágio dos artefatos existentes, com o próximo passo e bloqueios.
argument-hint: [slug do desafio]
---

# /status

Não usa nenhuma skill especializada; é um diagnóstico estrutural. Nunca derive o estágio de um campo manual ou de memória de conversas anteriores: sempre releia os arquivos reais do desafio.

## Passo a passo

1. Identifique o desafio; se ambíguo ou se `$ARGUMENTS` estiver vazio, liste as pastas existentes em `desafios/` e pergunte qual delas.
2. Releia, na pasta do desafio: `briefing.md`, `dores.md`, `pessoas.md`, `percepcoes.md`, `necessidades.md`, `spec-design.md`, e o conteúdo de `desenho/`.
3. Derive o estágio atual com esta lógica, do mais avançado para o menos avançado:
   - Se `desenho/` contém arquivos: desafio no estágio **Desenhar** (em andamento ou concluído, dependendo se a spec ainda tem critérios sem bloco correspondente).
   - Senão, se `spec-design.md` existe com `status: aprovado`: estágio **Especificar concluído, pronto para /desenhar**.
   - Senão, se `spec-design.md` existe com `status: em-revisao`: estágio **Especificar, aguardando aprovação humana**.
   - Senão, se `necessidades.md` existe com ao menos uma necessidade `status: aprovada`: estágio **Definir concluído, pronto para /especificar** (note quantas necessidades ainda estão em rascunho, se houver).
   - Senão, se `necessidades.md` existe: estágio **Definir, aguardando aprovação humana**.
   - Senão, se `dores.md`, `pessoas.md` ou `percepcoes.md` existem: estágio **Descobrir, em andamento**.
   - Senão, se só `briefing.md` existe: estágio **Descobrir, ainda não iniciado além do briefing**.
   - Senão: desafio criado sem briefing (inconsistência a sinalizar).
4. Liste bloqueios concretos encontrados, por exemplo: "necessidades.md tem 3 necessidades em rascunho e 2 aprovadas; /especificar pode rodar só para as aprovadas" ou "spec-design.md não referencia nenhum componente existente em design-system/, que está vazio".
5. Recomende o próximo comando a rodar, de forma específica (não apenas "continue o processo").

## Formato de saída sugerido

```
Desafio: <slug>
Estágio atual: <estágio>
Aprovações pendentes: <lista ou "nenhuma">
Bloqueios: <lista ou "nenhum">
Próximo passo recomendado: <comando>
```
