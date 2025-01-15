# Command /broadcast
Path `command.yml > broadcast`

## Explanation
Command for global alerting
![command broadcast](/commandbroadcast.png)

## Editing
```yaml
<command.broadcast>
```

### Default
```yaml
broadcast:
  enable: true
  range: -2
  aliases:
    - "broadcast"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Options

- [localisation](/docs/localizations/ru_ru/command/banlist/)
- [Permission](/docs/permission/command/banlist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
