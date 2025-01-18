# Упоминание
Путь `message.yml > format.mention`

## Пояснение
Это форматирование позволяет упоминать (пинговать) человека в сообщении
![mention](/mention.png)

## Редактирование
```yaml
<message.format.mention>
```

### По умолчанию
```yaml
mention:
  enable: true
  trigger: "@"
  destination:
    type: TOAST
    icon: "minecraft:diamond"
    style: TASK
  sound:
    enable: true
    volume: 0.1
    pitch: 0.1
    category: "NEUTRAL"
    name: "minecraft:entity.experience_orb.pickup"
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/format/mention/)
- [Права](/docs/permission/message/format/mention/)

<!--@include: @/parts/enable.md-->

### `trigger`

Символ, с которого должно начинаться сообщение упоминания
::: tip Например
Если я хочу упомянуть `Flectone`, то я должен написать `@Flectone`
![mention](/mention.png)
:::

<!--@include: @/parts/destination.md-->
<!--@include: @/parts/sound.md-->