# Над головой
Путь `message.yml > bubble`

## Пояснение
Модуль, отвечающий за сообщения над головой
![bubble](/bubble.gif)

Идея взята из [LightChatBubbles](https://github.com/atesin/LightChatBubbles)

## Редактирование
```yaml
<message.bubble>
```

### По умолчанию
```yaml
bubble:
  enable: true
  new-system: true
  distance: 30.0
  line-width: 200
  read-speed: 100.0
  handicap-chars: 10.0
  height: 0.2
```

## Длительность сообщения

### Формула длительности

```java
long duration = (countWords + handicapChars) / readSpeed * 1200;
```

Длительность = (`количество слов` + [`handicap-chars`](#handicap-chars)) / [`read-speed`](#read-speed) * `1200`

## Параметры

- [Локализация](/docs/localizations/ru_ru/message/bubble/)
- [Права](/docs/permission/message/bubble/)

<!--@include: @/parts/enable.md-->

### `new-system`

Включает работу сообщений над головой через Text Display

::: warning ПРЕДУПРЕЖДЕНИЕ
Это будет работать только на серверах 1.19.4 и выше
:::

### `distance`

Дальность отображения сообщений над головой от отправителя

### `line-width`

Максимальное количество символов на одной строчке

### `read-speed`

Скорость чтения символов сообщения

### `handicap-chars`

Дополнительное время для коротких сообщений

### `height`

Насколько высоко от головы будет сообщение

::: warning ПРЕДУПРЕЖДЕНИЕ
Это будет работать только на серверах 1.19.4 и выше, при включённом `new-system`
:::