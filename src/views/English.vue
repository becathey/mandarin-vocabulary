<template>
  <div>
    <h1>English >> Mandarin</h1>
    <div v-if="words.length < 5">
      <p>You need to enter at least five words to begin the test</p>
    </div>
    <div v-else>
      <english-test :words="words"></english-test>
    </div>
  </div>
</template>

<script>
import { api } from "../helpers/helpers";
import EnglishTest from "../components/EnglishTest.vue";
export default {
  name: "english",
  components: {
    "english-test": EnglishTest,
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
