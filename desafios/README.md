# desafios/

Cada desafio de produto vive em sua própria pasta, `desafios/<slug>/`, criada pelo comando `/iniciar-sdx`. Nenhuma pasta de exemplo vem pré-criada neste repositório: a primeira aparece quando você rodar `/iniciar-sdx` pela primeira vez.

Um desafio contém, na ordem em que os comandos os criam:

```
desafios/<slug>/
  briefing.md        criado por /iniciar-sdx
  dores.md            criado por /dores
  pessoas.md          criado por /pesquisar
  percepcoes.md       criado por /pesquisar (e /investigar, para achados pontuais)
  necessidades.md     criado por /definir (gate humano antes de /especificar)
  spec-design.md      criado por /especificar (gate humano antes de /desenhar)
  desenho/             criado por /desenhar
```

O `slug` é um identificador curto em minúsculas e hífens, derivado do nome do desafio (por exemplo, `checkout-expresso` ou `onboarding-conta-pj`). Os IDs de Dor, Pessoa, Percepção, Necessidade e Spec de Design (`DOR-xx`, `PES-xx`, `PER-xx`, `NEC-xx`, `SPEC-xx`) são únicos dentro de cada pasta de desafio, não entre desafios diferentes: veja `constituicao.md`, seção 6.

Use `/status` para ver em que ponto dessa sequência um desafio específico está.
