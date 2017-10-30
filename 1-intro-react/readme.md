DOM api not good
  Have to traverse through these elements

Rails
  When there's a change in data -> re-rendered

1. Rails
  Post /users
   {id: 1, name: 'bob'}
   <ul>
    <li> bob</li>

   </ul>

2. Javascript
Post /users
 {id: 1, name: 'bob'}
 ul = docuement.querySelector('ul')
 ul.append(<li> </li>)

 <div class="assignment">
  <ul>
    <li> Interview the users </li>
    <li data-status='pending' data-id="18"> mock up the design </li>
    <li> build it </li>
  </ul>
 </div>

1. No longer have to think about the difference btwn a and b to get to b
2. Helps us as developers abide by single source of truth


React World
  Allows to think in the world of re-rendering, while react does the diffing


  Virtual DOM
  <button class="red">Clickbait!</button>

  {type: 'button', props: {className: 'red', text: 'foo'}}

1. React
  React
    createElement
      type
      props -> {}
      children
        reactelement
        string
        array
  ReactDOM
    render
      reactelement, target
