# Игроки
Путь `messages > ru_ru.yml > module.server.status.players`

## Пояснение
Сообщение об игроках сервера

## Редактирование
```yaml
<ru_ru.module.server.status.players>
```

### По умолчанию
```yaml
players:
  samples:
    - name: "<players>"
      id: null
  full: "<color:#ff7171>Сервер полон"
```

## Параметры

- [Конфиг](/en/config/module/server/status/players/)
- [Права](/en/permissions/module/server/status/players/)

### `samples`
- По умолчанию:
```yaml
- name: "<players>"
  id: null
```

Список игроков сервера. Плейсхолдер `<players>` добавляет всех игроков сервера к списку

::: info ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ

Можно добавлять любые сообщения
```yaml
samples:
  - name: "<red>Это сервер в майнкрафте!"
    id: null
  - name: "<players>"
    id: null
```
![sample1](/sample1.png)

или создавать фейковых игроков
```yaml
samples:
  - name: "Notch"
    id: null
  - name: "<players>"
    id: null
```
![sample2](/sample2.png)
:::

::: warning ПРЕДУПРЕЖДЕНИЕ

Можно использовать только [доступные цвета](#доступные-цвета) майнкрафта

:::

### `full`
- По умолчанию `<color:#ff7171>Сервер полон`

Сообщение при подключении на полный сервер

<!--@include: @/en/parts/color.md-->