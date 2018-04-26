<template>
  <section
    class="hero is-fullheight is-primary">
    <div
      class="hero-body">
      <div
        class="container">
        <div
          class="columns is-centered">
          <div class="column is-4">
            <editor/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppEditor from '@/modules/stenografo/components/AppEditor'
export default {
  components: {
    'editor': AppEditor
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
