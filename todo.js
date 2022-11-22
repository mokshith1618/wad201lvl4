const todoList = () => {
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      let overdueItems=[],status ="[ ]"
      for(let i of all){
        if(i.dueDate===yesterday){
            if(i.completed===true){
                status ="[x]"
            }
            overdueItems.push(`${status} ${i.title} ${i.dueDate}`)
            status="[ ]"
        }
      }
    return overdueItems
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      let dueTodayItems=[],status ="[ ]"
      for(let i of all){
        if(i.dueDate===today){
            if(i.completed===true){
                status ="[x]"
            }
            dueTodayItems.push(`${status} ${i.title}`)
            status="[ ]"
        }
      }
      return dueTodayItems
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      let dueLaterItems=[],status ="[ ]"
      for(let i of all){
        if(i.dueDate===tomorrow){
            if(i.completed===true){
                status ="[x]"
            }
            dueLaterItems.push(`${status} ${i.title} ${i.dueDate}`)
            status="[ ]"
        }
      }
      return dueLaterItems
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      let OUTPUT_STRING=list.join("\n");
      return OUTPUT_STRING
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }

module.exports = todoList;
