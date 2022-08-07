<template>
    <div class="container">
        <table class="table table-bordered mt-5">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Status</th>
                    <th scope="col" class='text-center'>#</th>
                    <th scope="col" class='text-center'># </th>
                </tr>
            </thead>

            <tbody v-for="(task, index) in tasks" :key="task.id">
                <tr>
                    <th scope="row">
                        <span :class="{ 'finished': task.status === 'finished' }">
                            {{ firstCharrUpperCase(task.name) }}
                            <!-- {{ task.name }} -->
                        </span>
                    </th>
                    <td scope=" row" @click="changeStatus(task.id)" class="width pointer">
                        <span :class="{
                            'text-danger': task.status === 'todo',
                            'text-success': task.status === 'finished',
                            'text-warning': task.status === 'in-progress',
                        }">
                            {{ firstCharrUpperCase(task.status) }}
                            <!-- {{ task.status }} -->
                        </span>

                    </td>
                    <td scope="row">
                        <div class='text-center' @click="editTaskFunc(task.id)">
                            <span class=" fa fa-edit"></span>
                        </div>
                    </td>

                    <td scope="row">
                        <div class='text-center' @click="deleteTask(task.id)">
                            <span class="fa-solid fa-trash"></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'App',
    props: ['tasks'],
    components: {

    },
    methods: {
        firstCharrUpperCase(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        deleteTask(indexx) {
            console.log(indexx, 'indexx');
            // this.tasks = this.tasks.filter((el) => el.id !== indexx)
            this.$emit('delete-item', indexx)
        },
        editTaskFunc(index) {
            console.log(index);
            this.$emit('edit-task', index)
        },
        changeStatus(index) {
            this.$emit('change-task', index)
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