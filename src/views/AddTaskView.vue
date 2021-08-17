<template>
  <v-card>
    <v-container fluid>
      <!-- From -->
      <v-form>
        <v-text-field
          v-model="title"
          label="Task Title"
        ></v-text-field>
        <v-date-picker
          v-model="date"
          header-color="indigo"
          color="green accent-4"
          class="mt-4"
          :min="formatDate(new Date())"
          elevation="5"
          full-width
        ></v-date-picker>
        <v-checkbox
          v-model="highlight"
          label="Highlight"
        ></v-checkbox>
        <!-- Actions -->
        <v-card-actions>
          <v-btn
            type="submit"
            color="green accent-4"
            @click="onSubmit"
          >
            SUBMIT
          </v-btn>
          <v-btn @click="clearForm">CLEAR</v-btn>
          <v-btn
            :to="'/'"
            color="error"
          >
            <v-icon>
              mdi-arrow-left
            </v-icon>
            BACK
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTaskView",
  data: () => ({
    title: "",
    date: "",
    highlight: false
  }),
  methods: {
    ...mapActions(["addTask"]),
    clearForm() {
      this.title = ""
      this.date = ""
      this.highlight = false
    },
    onSubmit() {
      if (!this.title) {
        alert("Please add a task Title")
        return;
      }
      const newTask = {
        title: this.title,
        date: this.date,
        highlight: this.highlight
      }

      this.addTask(newTask)
      this.clearForm()
    },
    formatDate(date) {
      return date.toISOString().slice(0, 10)
    }
  }
};
</script>
