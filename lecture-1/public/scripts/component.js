// Problem 
  // In my application, I need two buttons 


  // signupbtn = React.createElement('button', {className: 'signup'}, 
  //   'signup and get started')

  // loginbtn = React.createElement('button', {className: 'login'}, 
  //   'login and get started')



// We want to be dynamic with the type of element that is returned
// Component Element

var Form = React.createClass({
  render() {
    return React.createElement('form', {action: 'users'}, React.createElement(Button, {type: 'login'}))
  }
})

var Button = React.createClass({
  render(){
    return React.createElement('button', {className: this.props.type}, 
    `${this.props.type} and get started`)
  }
})

class ReactComponent extends Component {
  
  render(){

  }
}

form = React.createElement(Form, {resource: 'users'})
// reactElement
ReactDOM.render(form, document.getElementById('content'))
{



}

// var loginbtn = React.createElement(ReactComponent, {type: 'login'})
//   // create a new element
//   // call the render function on the new element that was created
//   // then the render function might be kicked off.



// var signupbtn = React.createElement(ReactComponent, {type: 'signup'})

// componentInstance#render
// componentWrapper
  // 

// React.createClass -> function(){

// }

// // instance of a react component


// React.createElement(ReactComponent, {type: 'signup'})


// {
//   type: ReactComponent
// }

// ReactDOM.render()
