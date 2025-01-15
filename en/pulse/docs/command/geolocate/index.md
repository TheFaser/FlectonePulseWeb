# Command /geolocate
Path `command.yml > geolocate`

## Explanation
Command to track IP address and get information about a player
![command geolocate](/commandgeolocate.png)

## Editing
```yaml
<command.geolocate>
```

### Default setting
```yaml
geolocate:
  enable: true
  suggest-offline-players: true
  aliases:
    - "geolocate"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/geolocate/)
- [Permissions](/docs/permission/command/geolocate/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/suggestOfflinePlayers.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
