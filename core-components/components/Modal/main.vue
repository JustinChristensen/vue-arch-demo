<template functional>
    <div class="modal">
        <header class="modal-header">
            <slot name="header"></slot>
        </header>
        <div class="modal-body">
            <slot></slot>
        </div>
        <footer class="modal-footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Modal'
}
</script>

