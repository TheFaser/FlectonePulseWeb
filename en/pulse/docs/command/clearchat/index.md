# Command /clearchat
Path `command.yml > clearchat`

## Explanation
Command to clear chat
![command clearchat](/commandclearchat.png)

## Editing
```yaml
<command.clearchat>
```

### Default setting
```yaml
clearchat:
  enable: true
  aliases:
    - "clearchat"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/clearchat/)
- [Permissions](/docs/permission/command/clearchat/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
