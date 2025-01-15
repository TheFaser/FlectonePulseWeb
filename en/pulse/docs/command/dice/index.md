# Command /dice
Path `command.yml > dice`

## Explanation
The command to roll the dice for good luck
![command dice](/commanddice.png)

## Editing
```yaml
<command.dice>
```

### Default setting
```yaml
dice:
  enable: true
  range: -2
  min: 1
  max: 6
  aliases:
    - "dice"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/dice/)
- [Permissions](/docs/permission/command/dice/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->

### `min`

Minimum quantity of cubes

### `max`

Maximum quantity of cubes

<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
