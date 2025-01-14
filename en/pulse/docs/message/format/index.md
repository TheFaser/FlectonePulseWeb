# Форматирование
Путь `message.yml > format.*`

## Пояснение
Модуль, форматирующий отправленные сообщения

## Редактирование
```yaml
<message.format>
```

### По умолчанию
```yaml
format:
  enable: true
  tags:
    PING:
      enable: true
      trigger: "%ping%"
    TPS:
      enable: true
      trigger: "%tps%"
    ONLINE:
      enable: true
      trigger: "%online%"
    COORDS:
      enable: true
      trigger: "%coords%"
    STATS:
      enable: true
      trigger: "%stats%"
    SKIN:
      enable: true
      trigger: "%skin%"
    ITEM:
      enable: true
      trigger: "%item%"
    URL:
      enable: true
      trigger: "(?<!:\")((https?|ftp|gopher|telnet|file):((//)|(\\\\))+[\\w:#@%/;$()~_?+-=\\\\.&]*)"
    IMAGE:
      enable: true
      trigger: "(?<!:\")((https?|ftp|gopher|telnet|file):\\/\\/(?:i\\.imgur\\.com|media\\.discordapp\\.net)\\/[\\w:#@%/;$()~_?+-=\\\\.&]*)"
    SPOILER:
      enable: true
      trigger: "\\Q||\\E"
    BOLD:
      enable: true
      trigger: "\\Q**\\E"
    ITALIC:
      enable: true
      trigger: "\\Q##\\E"
    UNDERLINE:
      enable: true
      trigger: "\\Q__\\E"
    OBFUSCATED:
      enable: true
      trigger: "\\Q??\\E"
    STRIKETHROUGH:
      enable: true
      trigger: "\\Q~~\\E"
    HOVER:
      enable: true
      trigger: null
    CLICK:
      enable: true
      trigger: null
    COLOR:
      enable: true
      trigger: null
    KEYBIND:
      enable: true
      trigger: null
    TRANSLATABLE:
      enable: true
      trigger: null
    TRANSLATABLE_FALLBACK:
      enable: true
      trigger: null
    INSERTION:
      enable: true
      trigger: null
    FONT:
      enable: true
      trigger: null
    DECORATION:
      enable: true
      trigger: null
    GRADIENT:
      enable: true
      trigger: null
    RAINBOW:
      enable: true
      trigger: null
    RESET:
      enable: true
      trigger: null
    NEWLINE:
      enable: true
      trigger: null
    TRANSITION:
      enable: true
      trigger: null
    SELECTOR:
      enable: true
      trigger: null
    SCORE:
      enable: true
      trigger: null
    NBT:
      enable: true
      trigger: null
```

## Параметры

- [Права](/docs/permission/message/format/)

<!--@include: @/parts/enable.md-->

### `PING`
![ping](/ping.png)

### `TPS`
![tps](/tps.png)

### `ONLINE`
![online](/online.png)

### `COORDS`
![coords](/coords.png)

### `STATS`
![stats](/stats.png)

### `SKIN`
![skin](/skin.png)

### `ITEM`
![item](/item.png)

### `URL`
![url](/url.png)

### `IMAGE`
![image](/image.png)

### `SPOILER`
![spoiler](/spoiler.png)

### `BOLD`
![bold](/bold.png)

### `ITALIC`
![italic](/italic.png)

### `UNDERLINE`
![underline](/underline.png)

### `OBFUSCATED`
![obfuscated](/obfuscated.png)

### `STRIKETHROUGH`
![strikethrough](/strikethrough.png)

### [Остальные это Kyori теги](https://docs.advntr.dev/minimessage/format.html#standard-tags)

| Тег                       | Использование                                                                | Описание                                                                                       |
|---------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| `<hover>`                 | [Hover](https://docs.advntr.dev/minimessage/format.html#hover)               | Текст при наведении                                                                            |
| `<click>`                 | [Click](https://docs.advntr.dev/minimessage/format.html#click)               | Действие при нажатии                                                                           |
| `<color>`                 | [Color](https://docs.advntr.dev/minimessage/format.html#color)               | Цвет                                                                                           |
| `<keybind>`               | [Keybind](https://docs.advntr.dev/minimessage/format.html#keybind)           | Настройка клавиш для сообщения                                                                 |
| `<translatable>`          | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                       |
| `<translatable_fallback>` | [Translatable](https://docs.advntr.dev/minimessage/format.html#translatable) | Сообщение с использованием локали игрока                                                       |
| `<insertion>`             | [Insertion](https://docs.advntr.dev/minimessage/format.html#insertion)       | Вставка текста в чат с помощью ШИФТ                                                            |
| `<font>`                  | [Font](https://docs.advntr.dev/minimessage/format.html#font)                 | Изменение шрифта текста                                                                        |
| `<decoration>`            | [Decoration](https://docs.advntr.dev/minimessage/format.html#decoration)     | Стандартные украшения майнкрафта `bold`, `italic`, `underlined`, `strikethrough`, `obfuscated` |
| `<gradient>`              | [Gradient](https://docs.advntr.dev/minimessage/format.html#gradient)         | Градиентный цвет текста                                                                        |
| `<rainbow>`               | [Rainbow](https://docs.advntr.dev/minimessage/format.html#rainbow)           | Радужный цвет текста                                                                           |
| `<reset>`                 | [Reset](https://docs.advntr.dev/minimessage/format.html#reset)               | Сброс всех тегов и декораций                                                                   |
| `<newline>`               | [Newline](https://docs.advntr.dev/minimessage/format.html#newline)           | Переход на новую строку, замена `\n`                                                           |
| `<transition>`            | [Transition](https://docs.advntr.dev/minimessage/format.html#transition)     | Переход между двумя цветами                                                                    |
| `<selector>`              | [Selector](https://docs.advntr.dev/minimessage/format.html#selector)         | Селектор мобов                                                                                 |
| `<score>`                 | [Score](https://docs.advntr.dev/minimessage/format.html#score)               | Значение у команды (scoreboard)                                                                |
| `<nbt>`                   | [NBT](https://docs.advntr.dev/minimessage/format.html#nbt)                   | Вставка NBT компонента                                                                         |