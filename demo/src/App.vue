<template>
    <main>
        <p>Hello, World!</p>
        <modal>
            <h1 slot="header">Modal Title</h1>

            <div>
                <p>Modal Body</p>

                <ul>
                    <li>Foo</li>
                    <li>Bar</li>
                    <li>Baz</li>
                </ul>
            </div>

            <p slot="footer">Modal Footer</p>
        </modal>
    </main>
</template>

<script>
import Button from 'core-components/components/Button'
import Modal from 'core-components/components/Modal'

export default {
  name: 'App',
  components: {
      Button,
      Modal
  }
}
</script>

