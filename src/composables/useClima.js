import axios from "axios";
import {ref, computed} from  'vue'
export default function useClima() {
  
  const clima =  ref({})
  const carregando = ref(false)
  const error = ref('')
  const obterClima = async({ cidade, pais }) => {
    
    //importar key
    const key = import.meta.env.VITE_API_KEY;
    carregando.value = true
    clima.value = {}
    error.value = ''

    try {
      //obter lat e long
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cidade},${pais}&limit=1&appid=${key}`;
      const {data} = await axios(url)
      const {lat, lon} = data[0]
        
      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      const {data: resultado} = await axios(urlClima)
      clima.value = resultado

    } catch {
      error.value = 'Cidade não encontrada'
    } finally{
      carregando.value = false
    }
    //obter clima
  };
  const mostrarClima = computed(() =>{
    return Object.values(clima.value).length>0
  })
  const formatarTemperatura = (temperatura) => parseInt(temperatura-273.15)
  return {
    obterClima, clima, mostrarClima, formatarTemperatura, carregando, error
  };
}
