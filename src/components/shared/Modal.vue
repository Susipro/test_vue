<template>
  <teleport to="body">
    <div
        v-if="modelValue"
        class="modal">
      <div class="modal-content">
        <h2>{{ title }}</h2>
        <slot/>
        <Button
            class="close-button"
            :title="'Close'"
            @click="handleButtonClick"
        />
      </div>
    </div>
  </teleport>
</template>

<script setup>
import Button from '@/components/shared/Button.vue'
// PROPS
const props = defineProps( {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'No Title Provided'
  }
} )

// EMITS
const emits = defineEmits(['update:modelValue'])
const handleButtonClick = () => {
  emits( 'update:modelValue', false )
}

</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;   /* Con position absolute rompe el css, en cambio al usar el teleport,
   se inserta el componente en el body y funciona correctamente*/
  /* Con position fixed funciona bien y no necesita teleport pero mi intención era enseñaros la funcionalidad*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.close-button {
  margin-top: 1rem;
}
</style>
