function generate_tarshTalk(target) {
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const task = findTargetTask(target)
  const Phrase = phrase[randomNum(phrase)]
  const Task = task[randomNum(task)]
  if (task === 'error') return '請選擇一個角色！'
  return `身為一個${target}，${Task}，${Phrase}！`
}

function findTargetTask(target) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  switch (target) {
    case 'engineer':
      return task.engineer
    case 'designer':
      return task.designer
    case 'entrepreneur':
      return task.entrepreneur
    default:
      return 'error'
  }
}

function randomNum(array) {
  return Math.floor(Math.random() * array.length)
}

module.exports = generate_tarshTalk