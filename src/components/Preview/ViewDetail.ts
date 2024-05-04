import { ref, h } from 'vue'

export const SmartPages = defineComponent(
  (props) => {
    const id = `vue-smart-pages-${props.id}`

    return () => {
      // 渲染函数或 JSX
      return h('div', {
        class: 'vue-smart-pages',
        id: id,
        innerHTML: props.content
      })
    }
  },
  // 其他选项，例如声明 props 和 emits。
  {
    props: {
      id: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: false,
        default: ''
      },
      height: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      top: {
        type: Number,
        required: false,
        default: 0
      },
      bottom: {
        type: Number,
        required: false,
        default: 0
      },
      left: {
        type: Number,
        required: false,
        default: 0
      },
      right: {
        type: Number,
        required: false,
        default: 0
      },
      watch: {
        type: Array,
        required: false,
        default: () => []
      },
      watchDelay: {
        type: Array,
        required: false,
        default: () => []
      },
      beforeBreakPage: {
        type: Function,
        required: false,
        default: () => undefined
      },
      afterBreakPage: {
        type: Function,
        required: false,
        default: () => undefined
      }
    }
  }
)
