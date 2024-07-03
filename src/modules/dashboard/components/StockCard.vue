<script setup lang="ts">
import Typography from "@/core/components/text/Typography.vue";
import ColumnContainer from "@/core/components/wrapper/ColumnContainer.vue";
import { defineProps } from "vue";
import { IGroupedStock } from '../models/stock';

interface StockCardProps {
  data: IGroupedStock;
  selected?: boolean;
  onClick: (id: number) => void;
}

const props = withDefaults(defineProps<StockCardProps>(), {
  selected: false
});
</script>

<template>
  <div
    class="stock-card"
    :class="{
      'stock-card--selected': props.selected,
    }"
    v-on:click="() => onClick(data.id)"
  >
    <ColumnContainer align-items="center" justify-content="center" style="gap: 8px;">
      <Typography variant="subtitle">{{ props.data.code }}</Typography>
      <Typography variant="body1">
        Rp. {{ props.data.data[props.data.data.length - 1].current_price.toLocaleString('id') }}
      </Typography>
    </ColumnContainer>
  </div>
</template>

<style scoped lang="stylus">
  .stock-card{
    width: 200px;
    border: 1px solid $c-grey-main;
    border-radius: 8px;
    cursor: pointer;
  }
  .stock-card:hover{
    background-color: $c-green-light;
  }
  .stock-card--selected{
    background-color: $c-green-light;
  }
</style>