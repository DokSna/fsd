<template>
  <section>
    <div class="container">
      <h1>Привет от Vue</h1>
			<h2>Vue message: {{ message }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      message: null,
    }
  },
  created () {
    this.message = 'hello component'
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
h2 {
	color: pink;
}
</style>
