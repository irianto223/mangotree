<template lang="html">
  <div>
    <button @click="removetrees()" type="button" name="add">clear</button>
    <button @click="addtree()" type="button" name="add">add tree</button>
    <div v-for="tree in trees">
      <h1>Mango Tree</h1>
      <button @click="simulate(tree['.key'])" type="button" name="simulate">simulate</button>
      <p>Age: {{ tree.age }}</p>
      <p>Height: {{ tree.height }}</p>
      <p>Healthy: {{ tree.healthy }}</p>
      <p>Fruits: {{ tree.fruits }}</p>
      <!-- <ul>
        <li v-for="fruit in tree.friuts">{{ fruit }}</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  firebase: function () {
    return {
      trees: this.$db.ref('mangotree')
    }
  },
  methods: {
    simulate (key) {
      axios({
        method: 'get',
        url: `http://localhost:3000/simulate/${key}`
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.error(err))
    },
    addtree () {
      axios({
        method: 'get',
        url: `http://localhost:3000/addtree`
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.error(err))
    },
    removetrees () {
      this.$db.ref('mangotree').remove()
    }
  }
}
</script>

<style lang="css">
</style>
