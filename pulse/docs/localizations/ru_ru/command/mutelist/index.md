# Комманда /mutelist
Путь `localizations > ru_ru.yml > command.mutelist`

## Пояснение
Сообщения для комманды `/mutelist`
![command mutelist](/commandmutelist.png)

## Редактирование
```yaml
<ru_ru.command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  empty: "<color:#98FB98>☺ Муты не найдены"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  global:
    header: "<fcolor:2>▋ Муты: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Размутить <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ Все муты: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Размутить <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/docs/command/mutelist/)
- [Права](/docs/permission/command/mutelist/)

### `empty`

Сообщение, если список игроков с мутами пуст

### `null-page`

Сообщение, если введённая страница не существует

### `null-player`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных мутов

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для мутов игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка
:::

