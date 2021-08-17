<template>
  <v-card
    :color="task.highlight ? 'yellow lighten-4' : ''"
  >
    <v-card-title>{{task.title}}</v-card-title>
    <v-card-subtitle>{{task.date}}</v-card-subtitle>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn
        icon
        color="red darken-3"
      >
        <v-icon @click="$emit('delete-task', task.id)"> mdi-delete-forever </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object
    }
  }
}
</script>
