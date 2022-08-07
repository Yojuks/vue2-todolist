<template>
    <div class="container">
        <h2 class="text-center mt-5">My Vue todo app</h2>

        <div class="d-flex">
            <input v-model="inputFieldTask" type="text" placeholder="enter text" class="form-control">
            <button @click="submitTask" class="btn btn-warning rounded-0">Submit</button>
        </div>

        <Todolist :inputFieldTask="inputFieldTask" :tasks="tasks" @delete-item="deleteTaskApp"
            @edit-task='changeStatusMain' @change-task="changeStatusMain" />

    </div>
</template>

<script>
import Todolist from "./Todolist.vue";

export default {
    name: 'App',
    components: {
        Todolist
    },
    data() {
        return {
            inputFieldTask: '',
            editTask: null,
            indexEdited: '',
            arrayStatuses: ['todo', 'in-progress', 'finished'],
            tasks: [{ name: 'steal bread', status: 'todo', id: Date.now() }, { name: 'steal chockolad', status: 'finished', id: Date.now() + 1 }],

        }
    },
    methods: {
        submitTask(e) {

            if (this.inputFieldTask.trim().length === 0) return

            if (this.editTask === null) {
                this.tasks.push({
                    name: this.inputFieldTask,
                    status: 'todo',
                    id: Date.now()
                })

            } else {
                this.tasks.filter(el => el.id === this.indexEdited)[0].name = this.inputFieldTask
                this.editTask = null
            }

            this.inputFieldTask = ""

        },
        deleteTaskApp(index) {
            this.tasks = this.tasks.filter((el) => el.id !== index)
        },
        editTaskMain(index) {
            let editIdex = ''
            this.inputFieldTask = this.tasks.filter(el => el.id === index)[0].name
            editIdex = this.tasks.filter(el => el.id === index)[0].id
            this.indexEdited = editIdex;
            this.editTask = editIdex;
        },
        changeStatusMain(index) {
            let name = this.tasks.filter(el => el.id === index)[0].status
            let newIndex = this.arrayStatuses.indexOf(name)
            if (++newIndex > 2) newIndex = 0
            this.tasks.filter(el => el.id === index)[0].status = this.arrayStatuses[newIndex]
        }
    }
}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}

.finished {
    text-decoration: line-through;
}

.width {
    width: 300px;
    color: red;
}
</style>