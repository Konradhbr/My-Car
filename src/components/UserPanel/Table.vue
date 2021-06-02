<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Czynność</th>
          <th>Cena (zł)</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredRows" :key="`employee-${index}`">
          <td v-html="highlightMatches(row.service)"></td>
          <td v-html="highlightMatches(row.price)"></td>
          <td v-html="highlightMatches(row.date)"></td>
        </tr>
      </tbody>
    </table>

    <input
      type="text"
      placeholder="Filter by department or employee"
      v-model="filter"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Table",
  created() {
    this.setService();
    console.log(this.rows);
  },
  data() {
    return {
      filter: "",
      rows: []
    };
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    },
     async setService() {
      var service = firebase
        .database()
        .ref(
          `${this.user.data.email.replace(".", ",")}/` +
            "cars/" +
            `${this.user.activeCar}/` +
            "service/"
        );
      service.on("value", snapshot => {
        const data = snapshot.val();

        for (var i in data) {
          console.log(data.[i]);
    			this.rows.push(data.[i])
        }
      });
    },
  },
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    }),
    filteredRows() {
      return this.rows.filter(row => {
        const price = row.price;
        const service = row.service.toLowerCase();
        const date = row.date;

        const searchTerm = this.filter.toLowerCase();

        return (
          service.includes(searchTerm) ||
          price.includes(searchTerm) ||
          date.includes(searchTerm)
        );
      });
    }
  }
};
</script>

<style lang="css" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #dddddd;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 25px;
}
</style>
