# Command /chatsetting
Путь `command.yml > chatsetting`

## Explanation
Command to configure the chat room
![command chatsetting](/commandchatsetting.png)


## Editing
```yaml
<command.chatsetting>
```

### Default setting
```yaml
chatsetting:
  enable: true
  aliases:
    - "chatsetting"
  settings:
    CHAT:
      slot: 0
      materials:
        - "YELLOW_CONCRETE"
    COLOR:
      slot: 1
      materials:
        - "YELLOW_CONCRETE"
    STREAM:
      slot: 2
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    SPY:
      slot: 3
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    ADVANCEMENT:
      slot: 4
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    DEATH:
      slot: 5
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    JOIN:
      slot: 6
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    QUIT:
      slot: 7
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    AUTO:
      slot: 8
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    ME:
      slot: 9
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    TRY:
      slot: 10
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    DICE:
      slot: 11
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    BALL:
      slot: 12
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    MUTE:
      slot: 13
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    BAN:
      slot: 14
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    WARN:
      slot: 15
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    TELL:
      slot: 16
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    REPLY:
      slot: 17
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    MAIL:
      slot: 18
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    TICTACTOE:
      slot: 19
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    KICK:
      slot: 20
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    TRANSLATETO:
      slot: 21
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    BROADCAST:
      slot: 22
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    DO:
      slot: 23
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    COIN:
      slot: 24
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    AFK:
      slot: 25
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    POLL:
      slot: 26
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    SPIT:
      slot: 27
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    GREETING:
      slot: 28
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    ROCKPAPERSCISSORS:
      slot: 29
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    DISCORD:
      slot: 30
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    TELEGRAM:
      slot: 31
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
    TWITCH:
      slot: 32
      materials:
        - "LIME_CONCRETE"
        - "RED_CONCRETE"
  cooldown:
    enable: false
  sound:
    enable: false
```

## Parameters

- [Localisation](/docs/localizations/ru_ru/command/chatsetting/)
- [Permissions](/docs/permission/command/chatsetting/)

<!--@include: @/parts/enable.md-->
<!--@include: @/parts/enable.md-->

### `settings`

List of settings that can be changed

::: tip Example of setting to `TELL`
#### `slot`

The inventory slot in which the customisation will take place

#### `materials`

List of materials to be used to display the setting status

`LIME_CONCRETE` first material, displayed when the setting is enabled <br>
`RED_CONCRETE` second material, displayed when the setting is switched off

:::

<!--@include: @/parts/cooldown.md-->
<!--@include: @/parts/sound.md-->
