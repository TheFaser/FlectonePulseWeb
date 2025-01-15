# Command /coin
Path `command.yml > coin`

## Пояснение
The coin flip command
![command coin](/commandcoin.png)

## Editing
```yaml
<command.coin>
```

### Default setting
```yaml
coin:
  enable: true
  draw: true
  range: -2
  aliases:
    - "coin"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/coin/)
- [Permissions](/docs/permission/command/coin/)

<!--@include: @/parts/enable.md-->

### `draw`

Includes a small chance (`1%` of `101%`) of dropping a coin on the edge

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
