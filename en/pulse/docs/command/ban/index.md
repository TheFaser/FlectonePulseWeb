# Command /ban
Path `command.yml > ban`

## Explanation
Command to block a player
![command ban](/commandban.png)

On behalf of the player
![command ban player](/commandbanplayer.png)

## Editing
```yaml
<command.ban>
```

### Default
```yaml
ban:
  enable: true
  suggest-offline-players: true
  show-connection-attempts: true
  range: -2
  aliases:
    - "ban"
    - "tempban"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Options
- [Localisation](/docs/localizations/ru_ru/command/ban/)
- [Permission](/docs/permission/command/ban/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->

### `show-connection-attempts`

If enabled, it will show a message that the blocked player tried to connect
![command ban connect](/commandbanconnect.png)

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
