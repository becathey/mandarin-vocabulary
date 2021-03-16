<template>
  <div>
    <h1>Mandarin >> English</h1>
    <div v-if="words.length < 5">
      <p>You need to enter at least five words to begin the test</p>
    </div>
    <div v-else>
      <mandarin-test :words="words"></mandarin-test>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
import MandarinTest from "../components/MandarinTest.vue";
export default {
  name: "mandarin",
  components: {
    "mandarin-test": MandarinTest,
  },
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await api.getWords();
  },
};
</script>
