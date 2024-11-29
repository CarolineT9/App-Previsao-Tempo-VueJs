<script setup>
import Formulario from './components/Formulario.vue';
import useClima from './composables/useClima';
import Clima from './components/Clima.vue';
import Spiner from './components/Spiner.vue';
import Alerta from './components/Alerta.vue';
const {obterClima, clima, mostrarClima, carregando, error} = useClima();

</script>

<template>
  <h1 class="titulo">Previsão do tempo</h1>
  <div class="contenedor buscador-clima">
       <Formulario @obter-clima="obterClima" />
    <Alerta v-if="error">{{ error }}</Alerta>
    <Spiner v-if="carregando"/>
    <Clima v-if="mostrarClima" :clima="clima"/>
  </div>
  
</template>

<style scoped>

</style>
