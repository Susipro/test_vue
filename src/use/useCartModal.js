import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'

export function useCartModal () {
    // STORES
    const cartStore = useCartStore()

    // DATA
    const showCartModal = ref( false )

    // COMPUTED
    const handledTotal = computed( () => {
        return `Total: ${cartStore.getTotal .toFixed(2)}`
    } )

    // METHODS
    const toggleModal = () => {
        showCartModal.value = !showCartModal.value
    }
    return {
        showCartModal,
        handledTotal,
        toggleModal
    }
}
