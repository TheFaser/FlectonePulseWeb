# Command /banlist
Path `command.yml > banlist`

## Explanation
Command to see the list of blockings
![command banlist](/commandbanlist.png)

## Editing
```yaml
<command.banlist>
```

### Default
```yaml
banlist:
  enable: true
  per-page: 4
  aliases:
    - "banlist"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Options

- [Localisation](/docs/localizations/ru_ru/command/banlist/)
- [Permission](/docs/permission/command/banlist/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/perPage.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
