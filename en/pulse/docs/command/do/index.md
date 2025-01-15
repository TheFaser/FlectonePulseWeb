# Command /do
Path `command.yml > do`

## Explanation
Command to perform an action due to a player
![command do](/commanddo.png)

## Editing
```yaml
<command.do>
```

### Default setting
```yaml
do:
  enable: true
  range: -2
  aliases:
    - "do"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/do/)
- [Permissions](/docs/permission/command/do/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
