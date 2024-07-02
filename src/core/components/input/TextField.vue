<script setup lang="ts">


  interface TextFieldProps {
    id?: string
    disabled?: boolean
    fullwidth?: boolean
    type?: 'text' | 'password'
    placeholder: string
    value: string
    conditionError?: boolean | null
    conditionValid?: boolean | null
    onKeypress?: (e: KeyboardEvent) => void
    onChange: (event: Event) => void
  }
  const props = withDefaults(defineProps<TextFieldProps>(), {
    id: '',
    disabled: false,
    fullwidth: false,
    type: 'text',
    conditionValid: null,
    conditionError: null,
    onKeypress: () => {}
  })
</script>

<template>
  <div 
    class="textfield" 
    :class="{
      'textfield--fullwidth' : props.fullwidth,
      'textfield--disabled' : props.disabled,
      'textfield--error': props.conditionError,
      'textfield--valid': props.conditionValid,
    }"
  >
    <label :for="id" class="textfield-label">
      <slot />
    </label>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.value"
      :id="props.id"
      :name="props.id"
      :disabled="props.disabled"
      @keypress="(e) => props.onKeypress(e)"
      @input="(e) => props.onChange(e)"
    >
    <div class="textfield__icon">
      <span v-if="props.conditionValid === true" class="material-icons-round textfield__icon--valid">done</span>
      <span v-if="props.conditionError === true" class="material-icons-round textfield__icon--error">close</span>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.textfield {
  position: relative;
}

.textfield--fullwidth{
  flex-grow: 1;
  width: 100%
}

.textfield--disabled{
  colors: $c-black-light
}

.textfield--valid input{
  border: 1px solid $c-green-main !important;
}
.textfield--error input{
  border: 1px solid $c-orange-main !important;
}

.textfield input::placeholder {
  opacity: 0.5;
}

.textfield input {
  width: 100%;
  height: 40px;
  font-size: 1.2rem;
  margin-top: 4px;
  padding: 0px 10px 0 10px;
  outline: none;
  border: 1px solid $c-black-light;
  box-sizing: border-box;
  border-radius: 5px;
}

.textfield-label {
  position: relative;
  margin-bottom: 8px;
  font-size: 1.2rem;
  color: gray;
  letter-spacing: 1px;
  transition: .3s;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  cursor: text
}

.textfield--disabled input{
  cursor: not-allowed !important
}
.textfield--disabled label{
  cursor: not-allowed !important
}

.textfield input:focus + label,
.textfield input:not(:placeholder-shown) + label 
{
  top: 14px;
  font-size: .6rem;
}
.textfield--valid input:not(:placeholder-shown) + label 
{
  color: $c-green-main
}
.textfield--error input:not(:placeholder-shown) + label 
{
  color: $c-orange-main
}

.textfield input:focus {
  border: 2px solid indigo;
}

.textfield__icon{
  position: absolute;
  right:16px;
  top: 30%;
  bottom: auto;
}

.textfield__icon--valid{
  color: $c-green-main
}
.textfield__icon--error{
  color: $c-orange-main
}
</style>
