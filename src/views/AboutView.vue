<template>
  <div id="about">
    <div class="content">
      <div v-for="item of cartStore.shoppingCart" :key="item.id" class="cart-item-container">
        <CartItem
            :id="item.id"
            :title="item.title"
            :price="item.price"
            @delete-item="deleteProduct"
        />
      </div>
      <div class="cart-actions">
        <Button
            :title="'Comprar'"
            :type="'action'"
            @click="toggleModal"
        />
      </div>
      <Modal
          v-model="showCartModal"
          :title="'Cart'"
      >
        <p>{{handledTotal}}</p>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

import { useCartModal } from '@/use/useCartModal'
import Modal from '@/components/shared/Modal'

const {
  showCartModal,
  handledTotal,
  toggleModal
} = useCartModal()

import CartItem from '@/components/cart/CartItem.vue'
import Button from '@/components/shared/Button.vue'

// STORE
const cartStore = useCartStore()

// METHODS
const deleteProduct = (itemId) => {
  cartStore.removeItemFromCart(itemId)
}
</script>

<style scoped>
#about {
  height: 100vh;
  overflow-y: auto;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.cart-actions {
  position: absolute;
  width: auto;
  flex-grow: inherit;
  bottom: 0;
  margin: 1rem 0;
}
p {
  margin: 0 10px
}
</style>
