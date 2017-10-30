Constantly re-rendering but doing so selectively based on what has actually changed
Each component is aware of its own state

1. Re-rendering 
  Handlebars
    Hey, I want to show the collection of tasks.
      To show the collection of tasks, I want you to look at all of the tasks, 
      and find the one missing, and then remove it.
    By re rendering the page we do not have to say how to get there:
      Declarative programming
      <body>

    </body>
2. This re-rendering is slow
  Virtual dom 
  A representation of the actual dom.
  
  <button name="my_button"> </button>

  element = {type: 'button', {name: 'my_button'}}
  to render this
    where it is on the dom.

