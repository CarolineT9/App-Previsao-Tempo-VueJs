<script setup>
import useClima from '../composables/useClima';

// Correção no nome da função
const { formatarTemperatura } = useClima();

defineProps({
  clima: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="resultado">
    <h2>Previsão para {{ clima.name }} </h2>
    <p class="actual">{{ formatarTemperatura(clima.main.temp) }}&deg;C</p>
    <div class="temperaturas">
      <p>Min: <span>{{ formatarTemperatura(clima.main.temp_min) }}&deg;C</span></p>
      <p>Max: <span>{{ formatarTemperatura(clima.main.temp_max) }}&deg;C</span></p>
    </div>
  </div>
</template>
