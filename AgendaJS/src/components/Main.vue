<script lang="js">
import getAllData from './data/DataAux.js'

export default {
    name: "Main",
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.users = getAllData();
    }
};
</script>

<template>
    <div>
        <header>
            <h3>Agenda</h3>
        </header>
        <hr>

        <div>
            <div class="title-2">
                <h4>Contatos</h4>
                <hr>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Telefone</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.phone }}</td>
                            <td>{{ user.city }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>