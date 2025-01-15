# Command /clearmail
Path `command.yml > clearmail`

## Explanation
Command to delete sent [mails](/docs/commands/mail/)
![command clearmail](/commandclearmail.png)

## Editing
```yaml
<command.clearmail>
```

### Default setting
```yaml
clearmail:
  enable: true
  aliases:
    - "clearmail"
  destination:
    type: CHAT
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/clearmail/)
- [Permissions](/docs/permission/command/clearmail/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/aliases.md-->
<!--@include: @/parts/destination.md-->
<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
