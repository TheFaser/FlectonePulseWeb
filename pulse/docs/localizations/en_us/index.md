# Русская локализация
Файл `localizations > en_us.yml`

## Пояснение
Русская локализация сообщений `FlectonePulse`

## Редактирование
```yaml
<en_us>
```

### По умолчанию
```yaml
cooldown: "<color:#ff7171><b>⁉</b> Too fast, you'll be able to use it in <time>"
time:
  format: "dd'd' HH'h' mm'm' ss.SSS's'"
  permanent: "PERMANENT"
  zero: "0s"
```

## Параметры

- [Сообщения](/docs/message/)
- [Права](/docs/permissions/)

### `cooldown`

Сообщение, которое показывается при слишком частом использовании, если включен `cooldown`

### `time`

Сообщения времени

#### `format`

Форматирование времени ([Apache DurationFormatUtils](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html))

### `permanent`

Форматирование времени, если оно `-1` т.е. навсегда

#### `zero`

Форматирование времени, если оно равно нулю