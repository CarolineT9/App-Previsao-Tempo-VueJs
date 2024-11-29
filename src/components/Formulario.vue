<script setup>
import { ref, reactive } from 'vue';
import Alerta from './Alerta.vue';
const busca = reactive({
    cidade: '',
    pais: ''
})
const error = ref('')
const emit = defineEmits(
    ['obter-clima']
);
const paises = ref( [
    { codigo: 'US', nome: 'Estados Unidos' },
    {codigo: 'BR', nome: 'Brasil'},
    { codigo: 'MX', nome: 'México' },
    { codigo: 'AR', nome: 'Argentina' },
    { codigo: 'CO', nome: 'Colombia' },
    { codigo: 'CR', nome: 'Costa Rica' },
    { codigo: 'ES', nome: 'España' },
    { codigo: 'PE', nome: 'Perú' }
]);
const consultarClima = () =>{
    if(Object.values(busca).includes('')){
        error.value = 'Todos os campos devem ser orbigatórios'
        return
    }
    emit('obter-clima', busca)
    error.value = ''
};
</script>

<template>
        <form  class="formulario" @submit.prevent="consultarClima">
            <Alerta v-if="error">{{error}}</Alerta>
            <div class="campo">
                <label for="cidade">Cidade</label>
                <input type="text" name="" id="cidade" placeholder="Cidade" v-model="busca.cidade">
            </div>
            <div class="campo">
                <label for="pais" >País</label>
                <select id="pais" v-model="busca.pais">
                    <option>--- Selecione um país ---</option>
                    <option v-for="pais in paises" :value="pais.codigo">{{ pais.nome }}</option>
                </select>
            </div>
            <input type="submit" value="Consultar clima">
        </form>
</template>