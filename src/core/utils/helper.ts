export function isJsonString(str: string) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

export function parseDateLabel(string: string) {
  return `${new Date(string).getHours()}:${new Date(string).getMinutes()}:${new Date(string).getSeconds()}`
}