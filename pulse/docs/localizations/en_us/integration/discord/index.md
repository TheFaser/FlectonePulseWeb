# Дискорд
Путь `localizations > en_us.yml > integration.discord`

## Пояснение
Сообщения интеграции с Дискордом
![discordmessage](/discordmessage.png)

## Редактирование
```yaml
<en_us.integration.discord>
```

### По умолчанию
```yaml
discord:
  for-minecraft: "<fcolor:2><name> <fcolor:1>» <fcolor:4><message>"
  info-channel:
    айди: "ТПС <tps>"
  message-channel:
    CHAT:
      content: "<final_message>"
      webhook:
        enable: false
        avatar: "https://mc-heads.net/avatar/<skin>/32.png"
        content: ""
      embed:
        enable: false
        color: ""
        title: ""
        url: ""
        author:
          name: ""
          url: ""
          icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
        description: ""
        thumbnail: ""
        image: ""
        timestamp: true
        footer:
          text: ""
          icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
```

## Параметры

- [Интеграция](/docs/integration/discord/)
- [Права](/docs/permission/integration/discord/)

### Плейсхолдеры

Ты можешь использовать все плейсхолдеры, которые используются в начальном сообщении для майнкрафта
::: tip Например для сообщения о блокировке
Там есть плейсхолдер `<reason>`, значит я могу использовать `<reason>` внутри дискорд сообщений
:::

Также есть плейсхолдеры, которые ТОЧНО будут заменяться в любом сообщении
- `<final_message>` сообщение, отправленное в майнкрафт
- `<final_clear_message>` сообщение, отправленное в майнкрафт без unicode-смайлов
- `<player>` ник игрока, который отправил сообщение

Очевидно, что все плейсхолдеры из `PlaceholderAPI` и `FlectonePulse` тоже будут работать

### `for-minecraft`

Формат сообщения, которое будет отправлено из Дискорда в Майнкрафт

### `info-channel`

Список айди каналов и их названий

### `message-channel`

Список сообщений с их настройкой
<!--@include: @/parts/messageTag.md-->

::: details Настройка сообщения

![discord](https://docs.discord4j.com/img/embed-preview.png)

Если параметр пустой, то он не будет использован в итоговом сообщении

#### `content`

Содержание обычного сообщения от лица бота дискорда
![discord content](/discordcontent.png)

#### `webhook`

Дискорд вебхук
![discord webhook](/discordwebhook.png)


##### `enable`

Если включено, то сообщение будет являться вебхуком

##### `avatar`

Ссылка для создания аватарки игрока. Если будешь менять на свою, то ссылка должна содержать `<skin>`

##### `content`

Содержание сообщения вебхука

#### `embed`

Дискорд эмбед сообщение
![discord embed](/discordembed.png)

##### `enable`

Если включено, то сообщение будет содержать `embed`

##### `color`

Цвет `embed` сообщения

##### `title`

Название `embed` сообщения

##### `url`

Ссылка для `embed` сообщения

##### `author`

Автор `embed` сообщения

###### `name`

Название автора `embed` сообщения

###### `url`

Ссылка на автора `embed` сообщения

###### `icon-url`

Ссылка на аватарку автора `embed` сообщения. Если будешь менять на свою, то ссылка должна содержать `<skin>`

##### `description`

Описание `embed` сообщения

##### `thumbnail`

Маленькое изображение внутри `embed` сообщения

###### `name`

Название поля внутри `embed` сообщения

###### `value`

Значение поля внутри `embed` сообщения

###### `inline`

Если включено, то поле будет расположен в столбик с другими полями

##### `image`

Главное изображение `embed` сообщения

##### `timestamp`

Если включено, то `embed` сообщение будет включать время создания

##### `footer`

Нижняя часть `embed` сообщения

###### `text`

Текст в нижней части `embed` сообщения

###### `icon-url`

Изображение в нижней части `embed` сообщения

:::

::: tip Если хочешь добавить другое сообщение:
1. Возьми название из списка
2. Вставь в `message-channel`
```yaml
название_сообщения:
  content: ""
  webhook:
    enable: false
    avatar: "https://mc-heads.net/avatar/<skin>/32.png"
    content: ""
  embed:
    enable: false
    color: ""
    title: ""
    url: ""
    author:
      name: ""
      url: ""
      icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
    description: ""
    thumbnail: ""
    fields:
      - name: ""
        value: ""
        inline: false
    image: ""
    timestamp: true
    footer:
      text: ""
      icon-url: "https://mc-heads.net/avatar/<skin>/16.png"
```
:::
