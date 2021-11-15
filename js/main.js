/**
 * Partire dalla definizione di un array con 3 oggetti ( i todo).
Ogni oggetto todo avrà le seguenti proprietà:
- text, una stringa che indica il testo del todo
- completed, un booleano (true/false) che indica se il todo è stato completato oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.
2. Cliccando sul testo del todo, invertire il valore della proprietà completed del todo corrispondente (se completed era uguale a false, impostare true e viceversa).
*/

const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Fare la doccia',
                completed: true,
            },
            {
                text: 'Portare fuori il cane',
                completed: false,
            },
        ],
        deletedTodos: [],
        newTodo:'',
    },
    methods: {
        removeTodo(todoIndex) {
            const deleted = this.todos.splice(todoIndex, 1);
            this.deletedTodos.push(deleted[0]);
        },
        addTodo() {
            if(this.newTodo !== '') {
                this.todos.unshift({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';

                this.$refs.todoInput.focus();
            };
        },
        changeStatus(todoIndex) {
            this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
        }
    }
})