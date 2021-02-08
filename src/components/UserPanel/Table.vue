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
          <td v-html="highlightMatches(row.action)"></td>
          <td v-html="highlightMatches(row.price)"></td>
          <td v-html="highlightMatches(row.data)"></td>
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
export default {
  name: "Table",
  data: function() {
    return {
      filter: "",
      rows: [
        {
          action: "Accounting",
          price: "12",
          data: "12.12.12"
        }
      ]
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
    }
  },
  computed: {
    filteredRows() {
      return this.rows.filter(row => {
        const price = row.price;
        const action = row.action.toLowerCase();
        const data = row.data;

        const searchTerm = this.filter.toLowerCase();

        return (
          action.includes(searchTerm) ||
          price.includes(searchTerm) ||
          data.includes(searchTerm)
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
