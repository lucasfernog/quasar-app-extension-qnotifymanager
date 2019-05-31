<template>
  <q-page class="flex flex-center">
    <div class="column q-gutter-md">
      <q-btn class="col-4" @click="notify('snackbar')" color="primary" label="Snackbar"/>
      <q-btn class="col-4" @click="notify('positive')" color="green" label="Positive"/>
      <q-btn class="col-4" @click="notify('negative')" color="red" label="Negative"/>
      <q-btn class="col-4" @click="notify('warning')" color="orange" label="Warning"/>
      <q-btn class="col-4" @click="notify('info')" color="blue" label="Info"/>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    notify (type) {
      this.$q.notify({
        type,
        message: `Type: ${type}`
      })
    }
  }
}
</script>
