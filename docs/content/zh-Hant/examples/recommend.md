---
title: Recommended usage
description: 'Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.'
category: Examples
position: 11
---

## Write a `HOC`

<alert>

You can create a `higher-order component` easily and can customize `template`, `script` and `style` based on your needs.

</alert>

### VModal.vue

<show-code>

```vue
<template>
  <vue-final-modal
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content"
    v-on="$listeners"
  >
    <span class="modal__title">
      <slot name="title"></slot>
    </span>
    <div class="modal__content">
      <slot></slot>
    </div>
    <div class="modal__action">
      <button class="vfm-btn" @click="$emit('confirm', close)">confirm</button>
      <button class="vfm-btn" @click="$emit('cancel', close)">cancel</button>
    </div>
    <button class="modal__close" @click="close">
      <mdi-close></mdi-close>
    </button>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'VModal',
  inheritAttrs: false,
  methods: {
    close() {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
```

</show-code>

## How to use VModal

### Example

<hoc-example></hoc-example>

<show-code class="pt-4">

```vue
<template>
  <div>
    <v-modal v-model="show" @confirm="confirm" @cancel="cancel">
      <template v-slot:title>Hello, vue-final-modal</template>
      <p>Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.</p>
    </v-modal>

    <button class="vfm-btn" @click="show = true">Open modal</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  methods: {
    confirm() {
      // some code...
      this.show = false
    },
    cancel(close) {
      // some code...
      close()
    }
  }
}
</script>
```

</show-code>