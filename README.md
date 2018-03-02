# v-moji

v-moji (speak 'weemoji') integrates the fantastic [emojione](https://www.emojione.com/) as a Vuejs directive.

## Usage
```vue
  <div v-moji>Made with :heart: :wink: and Vuejs</div>
  <div v-moji.ascii>Emojis:</b> Made with :heart: ;D and Vuejs</div>
  <div v-moji:unicode.ascii>Made with :heart: ;D and Vuejs</div>
  <div v-moji:ascii>Made with :heart: :wink: and Vuejs</div>
```

By default shortcodes are translated into images without the support for ASCII emojis (eg :D ). It is disabled by default [for safety](https://demos.emojione.com/latest/ascii-smileys.html). To enable support for ASCII emojis, use the ascii argument (separated by a dot: `v-moji.ascii`).

Output mode is `image` by default. Other supported modes are `unicode` and `ascii`. You can set them as modifier (separated by a colon, eg `v-mode:unicode`)

## EmojiOne License

Emojis from EmojiOne are free to use under certain circumstances. Please read their [license section](https://www.emojione.com/licenses)!
