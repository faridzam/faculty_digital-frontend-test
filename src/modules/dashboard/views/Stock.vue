<script setup lang="ts">
  import ColumnContainer from '@/core/components/wrapper/ColumnContainer.vue';
import RowContainer from '@/core/components/wrapper/RowContainer.vue';
import { isJsonString, parseDateLabel } from '@/core/utils/helper';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';
import { Line } from 'vue-chartjs';
import Layout from '../components/Layout.vue';
import StockCard from '../components/StockCard.vue';
import { useStockStore } from '../stores/stock.store';

import Typography from '@/core/components/text/Typography.vue';
import { COLORS_CONSTANTS } from '@/core/constants/colors';
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

  const socket = new WebSocket(import.meta.env.VITE_BASE_WS_URL, ["asd"])

  const {getGroupedStock, selected} = storeToRefs(useStockStore())
  const {addStock, setSelected} = useStockStore()

  const options = ref()
  const data = ref<ChartData<'line'>>({
    datasets: []
  })

  onMounted(() => {
    socket.onmessage = (e) => {
      if (isJsonString(e.data)) {
        addStock(JSON.parse(e.data))
        data.value = {
          labels: getGroupedStock.value
          .find(stock => stock.id === selected.value)?.data
          .map(data => parseDateLabel(data.time)),
          datasets: [
            {
              label: getGroupedStock.value.find((stock) => stock.id === selected.value)!.code,
              backgroundColor: COLORS_CONSTANTS.orangeMain,
              data: getGroupedStock.value
              .find((stock) => stock.id === selected.value)!.data
              .map((data) => data.current_price)
            }
          ],
        }
        options.value = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: getGroupedStock.value.find((stock) => stock.id === selected.value)!.initial_price - getGroupedStock.value.find((stock) => stock.id === selected.value)!.price_leap*10,
              max: getGroupedStock.value.find((stock) => stock.id === selected.value)!.initial_price + getGroupedStock.value.find((stock) => stock.id === selected.value)!.price_leap*10,
              ticks: {
                stepSize: getGroupedStock.value.find((stock) => stock.id === selected.value)!.price_leap
              }
            },
          }
        }
      }
    }
  })

  onUnmounted(() => {
    socket.close()
  })
</script>

<template>
  <Layout>
    <ColumnContainer v-if="getGroupedStock.length > 0" alignItems="center" justifyContent="center" style="padding: 32px;">
      <RowContainer style="gap: 16px;">
        <div v-for="(stock) in getGroupedStock" :key="`stock__${stock.id}`">
          <StockCard :data="stock" :onClick="(id) => setSelected(id)" :selected="stock.id === selected" />
        </div>
      </RowContainer>
      <div class="chart-container">
        <Line :data="data" :options="options" updateMode="none"/>
      </div>
    </ColumnContainer>
    <Typography v-if="getGroupedStock.length < 1" variant="subtitle">Loading...</Typography>
  </Layout>
</template>

<style scoped lang="stylus">
  .chart-container{
    width : 100%;
    height: 500px;
  }
</style>