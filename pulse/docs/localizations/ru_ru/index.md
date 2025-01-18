# Русская локализация
Файл `localizations > ru_ru.yml`

## Пояснение
Русская локализация сообщений `FlectonePulse`

## Редактирование
```yaml
<ru_ru>
```

### По умолчанию
```yaml
cooldown: "<color:#ff7171><b>⁉</b> Слишком быстро, попробуй через <time>"
time:
  format: "dd'д' HH'ч' mm'м' ss.SSS'с'"
  permamnent: "НАВСЕГДА"
  zero: "0с"
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

#### `permanent`

Форматирование времени, если оно `-1` т.е. навсегда

#### `zero`

Форматирование времени, если оно равно нулю