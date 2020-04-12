import Vue from 'vue'
import { uid } from 'quasar'
const state = {
    tasks: {
        'ID1': {
            name: 'go to mosque',
            completed: false,
            dueDate: '2020/07/10',
            dueTime: '02:30'
        },
        'ID2': {
            name: 'go to church',
            completed: true,
            dueDate: '2020/01/10',
            dueTime: '20:30'
        },
        'ID3': {
            name: 'go to shop',
            completed: false,
            dueDate: '2020/07/05',
            dueTime: '21:30'
        }
    }
}

const mutations = {
    updateTask(state, payload) {
        // console.log('payload mutation', payload);
        Object.assign(state.tasks[payload.id], payload.updates);
    },
    deleteTask(state, id) {
        // console.log('delete id:', id);
        Vue.delete(state.tasks, id);
    },
    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task)
    }

}

const actions = {
    updateTask({ commit }, payload) {
        // console.log('payload: ', payload);
        // delete state.tasks[id];
        commit('updateTask', payload);
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid();
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((key) => {
            let task = state.tasks[key]
            if (!task.completed) {
                tasks[key] = task
            }
        });
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((key) => {
            let task = state.tasks[key]
            if (task.completed) {
                tasks[key] = task
            }
        });
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
