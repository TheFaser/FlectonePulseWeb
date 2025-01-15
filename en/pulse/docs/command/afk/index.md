# Command /afk
Path `command.yml > afk`

## Explanation
Command to change AFK mode
![afk](/afkglobalmessage.png)

::: danger WARNING
Command will not work if the module [`AFK`](/docs/message/contact/afk/) disabled
:::

## Editing
```yaml
<command.afk>
```

### Default
```yaml
afk:
  enable: true
  aliases:
    - "afk"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Options

- [Permission](/docs/permission/command/afk/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
