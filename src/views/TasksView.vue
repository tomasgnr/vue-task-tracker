<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <!-- Add Task -->
        <v-card>
          <v-card-actions>
            <v-btn
              block
              :to="'/AddTaskView'"
              color="green accent-4"
            >
              ADD TASK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- Task Grid -->
      <v-col
        cols="4"
        v-for="task in allTasks"
        :key="task.id"
      >
        <TaskCard
          :task="task"
          @delete-task="deleteTask"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import TaskCard from "../components/TaskCard"

export default {
  name: "TasksView",
  components: {
    TaskCard
  },
  methods: {
    ...mapActions(["fetchTasks", "deleteTask"])
  },
  computed: mapGetters(["allTasks"]),
  async created() {
    this.fetchTasks()
  }
};
</script>
