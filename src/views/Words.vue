<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui striped unstackable table">
      <thead>
        <tr>
          <th>Mandarin</th>
          <th>Pinyin</th>
          <th>English</th>
        </tr>
      </thead>
      <tr v-for="(word, i) in words" :key="i">
        <td>{{ word.mandarin }}</td>
        <td>{{ word.pinyin }}</td>
        <td>{{ word.english }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { api } from "../helpers/helpers";
export default {
  name: "words",
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
