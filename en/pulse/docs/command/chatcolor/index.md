# Command /chatcolor
Path `command.yml > chatcolor`

## Explanation
Command to change [colours](/docs/config/tag/color/)
![command chatcolor](/commandchatcolor.png)


## Editing
```yaml
<command.chatcolor>
```

### Default
```yaml
chatcolor:
  enable: true
  aliases:
    - "chatcolor"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Options

- [Localisation](/docs/localizations/ru_ru/command/chatcolor/)
- [Permission](/docs/permission/command/chatcolor/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
