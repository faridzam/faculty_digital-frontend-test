export default function getIncrement(current: number, initial: number){
  let percent;
  if(initial !== 0) {
      if(current !== 0) {
          percent = (current - initial) / initial * 100;
      } else {
          percent = - initial * 100;
      }
  } else {
      percent = current * 100;            
  }       
  return percent;
}