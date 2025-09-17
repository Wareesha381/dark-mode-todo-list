document.addEventListener('DOMContentLoaded',()=>{

    const toDoInput=document.getElementById('todo-input');

    const addButton=document.getElementById('add-task-btn');

    const listItems=document.getElementById('todo-list');

    let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

    tasks.forEach((task)=>{
        renderText(task)});

    addButton.addEventListener('click',()=>
    {
        const storingList=toDoInput.value.trim();

        if(storingList==="")
        {
            return;
        }

         const newTasks={
            id:Date.now(),
            text:storingList,
         };

         tasks.push(newTasks);
         settingItemsinmemory();
        renderText(newTasks);
        
    });

      function renderText(task){
        const li=document.createElement("li");

        li.setAttribute("data-id", 
            task.id);
        li.innerHTML=`<span>${task.text}</span>
        <button>Delete</button>
        `
               if (task.completed) {
      li.classList.add('completed');
    }
    
        li.addEventListener("click",(e)=>{

            if(e.target.tagName==='BUTTON') return;
            task.completed=!task.completed;
            li.classList.toggle('completed');
            settingItemsinmemory();

           
        });

        li.querySelector('button').addEventListener('click',(e)=>{
             tasks = tasks.filter(t => t.id !== task.id);

                                                    settingItemsinmemory();

            li.remove();
            })

                listItems.appendChild(li);

        toDoInput.value="";

       };


    function settingItemsinmemory(){
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
});
