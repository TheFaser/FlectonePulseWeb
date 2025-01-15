# Command /ball
Path `command.yml > ball`

## Explanation
The command to ask the Magic Ball a question
![command ball](/commandball.png)

## Editing
```yaml
<command.ball>
```

### Default 
```yaml
ball:
  enable: true
  range: -2
  aliases:
    - "ball"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Options

- [localisation](/docs/localizations/ru_ru/command/ball/)
- [Permission](/docs/permission/command/ball/)

<!--@include: @/parts/range.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
