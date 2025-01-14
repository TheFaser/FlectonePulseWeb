# Имя
Путь `localizations > en_us.yml > message.format.name`

## Пояснение
Категория, отвечающая за сообщения связанные с ником игрока
- [При наведении](/docs/localizations/en_us/player/name/hover/)

## Редактирование
```yaml
<en_us.message.format.name>
```

### По умолчанию
```yaml
name-:
  display: "<click:suggest_command:\"/msg <player> \"><hover:show_text:\"<fcolor:2>Write to <player>\"><vault_prefix><stream_prefix><fcolor:2><player></fcolor><afk_suffix><vault_suffix></hover></click>"
  entity: "<fcolor:2><hover:show_text:\"<fcolor:2><lang:<name>> <br><fcolor:1>Type <fcolor:2><lang:<type>> <br><fcolor:1>ID <fcolor:2><uuid>\"><lang:<name>></hover></fcolor:2>"
  unknown: "<fcolor:2><name></fcolor:2>"
  prefix: "<vault_prefix><stream_prefix>"
  suffix: "<afk_suffix><vault_suffix>"
```

## Параметры

- [Сообщения](/docs/message/format/name/)
- [Права](/docs/permission/message/format/name/)

### `display`

Отвечает за имя игрока
![name display](/namedisplay.png)

### `entity`

Отвечает за имя сущности

### `unknown`

Отвечает за неизвестное имя

### `prefix`

Префикс, которой отображается у команды, если включен ник

### `suffix`

Суффикс, которой отображается у команды, если включен ник
