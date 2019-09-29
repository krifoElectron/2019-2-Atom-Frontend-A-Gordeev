/*
 * В этом задании надо разработать функцию
 * `convertnumToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (!(typeof bytes === 'number')) {
    return false
  }

  if (!(isInteger(bytes)) || bytes < 0) {
    return false
  }

  let bytesCopy = bytes

  const demensions = ['B', 'KB', 'GB', 'TB']
  let count = 0

  while (bytesCopy >= 1024) {
    count += 1
    bytesCopy /= 1024
  }

  const formatedNum = isInteger(bytesCopy) ? bytesCopy : bytesCopy.toFixed(2)

  return `${formatedNum} ${demensions[count]}`
}

function isInteger(num) {
  if (Math.floor(num) - num !== 0) {
    return false
  }
  return true
}