<template>
  <div class="Task">
    <div class="container-fluid">
      <!-- Modal -->
      <b-modal id="add-task" ref="my-modal" title="New Task">
        <template slot="modal-header">
          <h4>New Task</h4>
        </template>
        <div class="modal-content">
          <b-input
            type="text"
            placeholder="Summary"
            v-model="form.title"
          ></b-input>
          <p v-if="isTitleError" class="text-danger">Summary cannot be empty</p>
          <b-input
            type="text"
            placeholder="Decription"
            v-model="form.description"
          ></b-input>
          <p v-if="isDescriptionError" class="text-danger">
            Description cannot be empty
          </p>
          <b-form-datepicker
            id="datepicker"
            placeholder="Due Date"
            :min="min"
            v-model="form.due_at"
            class="mb-2"
          ></b-form-datepicker>
          <p v-if="isDueAtError" class="text-danger">Please select due date</p>
        </div>
        <template slot="modal-footer">
          <div>
            <b-button @click="saveTask()" variant="dark">Save</b-button>
          </div>
          <div>
            <b-button variant="outline-dark" @click="hideModal"
              >Cancel</b-button
            >
          </div>
        </template>
      </b-modal>
      <!-- Modal -->
      <div class="add-btn" v-b-modal.add-task>
        <font-awesome-icon icon="fa-plus" />

        <span>Add Task</span>
      </div>
      <div class="section">
        <span>Incomplete</span>
        <div
          v-for="(t, i) in tasks.filter((task) => task.status == 'incomplete')"
          :key="i"
          class="section-content d-flex align-items-center"
          @click="checkedChange(t)"
        >
          <img
            v-if="t.status == 'incomplete'"
            src="../../assets/unchecked.png"
            alt=""
          />
          <img v-else src="../../assets/checked.png" alt="" />
          <div>
            <div>{{ t.description }}</div>
            <span>
              <font-awesome-icon icon="fa-clock" />
              {{ t.due_at }}</span
            >
          </div>
        </div>
      </div>
      <div class="section">
        <span>Completed</span>
        <div
          v-for="(t, i) in tasks.filter((task) => task.status == 'completed')"
          :key="i"
          class="section-content d-flex align-items-center"
          @click="uncheckedChange(t)"
        >
          <img v-if="t.incomplete" src="../../assets/unchecked.png" alt="" />
          <img v-else src="../../assets/checked.png" alt="" />
          <div>
            <div>{{ t.description }}</div>
            <span>
              <font-awesome-icon icon="fa-clock" />
              {{ t.due_at }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import apiClient from "../../services/apiClient";
export default {
  name: "TaskPage",
  data() {
    return {
      min: new Date(),
      form: {
        title: "",
        description: "",
        due_at: "",
        status: "",
      },
      tasks: [],
      isFormError: true,
      isTitleError: false,
      isDescriptionError: false,
      isDueAtError: false,
    };
  },
  computed: {
    ...mapGetters(["getTask"]),
  },
  mounted() {
    // let t = localStorage.getItem("task");
    // if (t) {
    //   this.set_task(JSON.parse(t));
    // }
  },
  methods: {
    async getTasksList() {
      const tasks = await apiClient.getTasks(); // Use the API client to retrieve tasks
      this.tasks = tasks;
    },
    ...mapActions(["set_task", "append_task"]),
    hideModal() {
      this.$refs["my-modal"].hide();
      this.form = {
        summary: "",
        desc: "",
        dueDate: "",
        incomplete: true,
      };
    },
    async createTask(payload) {
      const createdTask = await apiClient.createTask(payload); // Use the API client to create a task
      // Handle the created task response as needed
    },
    async editTask(id, payload) {
      const updatedTask = await api.updateTask(id, payload); // Use the API client to update a task
      // Handle the updated task response as needed
    },
    saveTask() {
      if (this.form.title == "") {
        this.isTitleError = true;
        this.isFormError = true;
      }
      if (this.form.title != "") {
        this.isTitleError = false;
      }
      if (this.form.description == "") {
        this.isDescriptionError = true;
        this.isFormError = true;
      }
      if (this.form.description != "") {
        this.isDescriptionError = false;
      }
      if (this.form.due_at == "") {
        this.isDueAtError = true;
        this.isFormError = true;
      }
      if (this.form.due_at != "") {
        this.isDueAtError = false;
      }
      if (
        this.isTitleError == false &&
        this.isDescriptionError == false &&
        this.isDueAtError == false
      ) {
        this.isFormError = false;
        this.form.status = "incomplete";
        this.createTask(this.form);
      }
      if (!this.isFormError) {
        this.getTasksList();
        this.hideModal();
      }
    },
    async checkedChange(task) {
      task.status = "completed";
      const data = {
        status: "completed",
      };
      await this.editTask(task.id, data);
    },

    async uncheckedChange(task) {
      task.status = "incomplete";
      const data = {
        status: "incomplete",
      };
      await this.editTask(task.id, data);
    },
  },
  created() {
    this.getTasksList();
  },
};
</script>

<style scoped lang="scss">
input[type="checkbox"]:disabled {
  display: block;
  background-color: red !important;
  margin-top: 1em;
}

img {
  width: 20px;
  margin-right: 1rem;
}
</style>
