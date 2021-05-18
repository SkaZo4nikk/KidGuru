
function all(i){

  const operators = ['*', '+', '-']
  let args = []
  let operator
  
  
  function genNum(num = 100, min = 0){
    return Math.floor(Math.random() * (num-min) + min);
  }
  
  function genOperator(){
    operator = operators[Math.floor(Math.random()*3)]
  }
  
  function genResult(){
    switch(operator){
      case operators[0]:
        args.push(genNum(10, 2));
        args.push(genNum(10, 2));
        return args[0] * args[1]
      case operators[1]:
        args.push(genNum());
        args.push(genNum());
        return args[0] + args[1]
      case operators[2]:
        args.push(genNum());
        args.push(genNum());
        return args[0] - args[1]
    }
  }
  
  function genNextTask(){
    genOperator()
    genResult()
   // task.task_num++
  }
  

  genNextTask()
  const task = {
      operator: operator, 
      result: genResult(),
      first_arg: args[0],
      second_arg: args[1],
     // task_num: (i)=>{return i++}
     task_num: i
      
  }
  return task
}

module.exports = all