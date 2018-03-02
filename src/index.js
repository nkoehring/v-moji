import EmojiOne from 'emojione'

function convert (text, mode, opts) {
  EmojiOne.ascii = opts.ascii

  console.log('CONVERT', {mode, opts})

  if (mode === 'unicode') {
    return EmojiOne.shortnameToUnicode(text)
  } else if (mode === 'ascii') {
    return EmojiOne.shortnameToAscii(text)
  } else {
    return EmojiOne.toImage(text)
  }
}

export default {
  install (Vue, options) {
    Vue.directive('moji', {
      bind (el, binding, vnode) {
        el.innerHTML = convert(el.innerHTML, binding.arg, binding.modifiers)
      },
      componentUpdated (el, binding, vnode, oldVnode) {
        el.innerHTML = convert(el.innerHTML, binding.arg, binding.modifiers)
      }
    })
  }
}
