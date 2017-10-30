// Instructions
  // Build out the components we described in class.
  // then you want to pass through the data, and map through product rows
  // I have a line at the bottom of this file, which gets you started in passing through the array of books.
var data = [
  {category: "Fiction", price: "$4.99", bestseller: true, name: "Prisoners of Azekeban"},
  {category: "Fiction", price: "$9.99", bestseller: true, name: "Tom Sawyer"},
  {category: "Fiction", price: "$3.99", bestseller: false, name: "Huck Finn"},
  {category: "Non-Fiction", price: "$9.99", bestseller: true, name: "My Life"},
  {category: "Non-Fiction", price: "$9.99", bestseller: false, name: "Origin of Species"},
  {category: "Non-Fiction", price: "$16.99", bestseller: true, name: "Liars Poker"}
];


// class Component {
//   constructor(props){
//
//   }
// }

class BooksTable extends React.Component {
  constructor(props){
      super(props)
      this.state = {clicked: false}
  }

  handleOnClick(){
    debugger;
    this.setState({clicked: true})
  }
  render(){
    let foobar = 'something cool'
    return(
      <table>

        <thead>
        {this.state.clicked ? <div> hi</div> : null }
          <th  onClick={this.handleOnClick.bind(this)}> Name </th>
          <th>Category</th>
        </thead>
        <BookList books={this.props.books} />
      </table>
    )
  }
}

class Component {
  onClick(callbackFunction){
    callbackFunction()
  }
}


class BookList extends React.Component {
  render(){
    let books = this.props.books.map(function(book, idx){
      return(<BookRow idx={idx} book={book}/>)
    })
    return (
      <tbody>
        {books}
      </tbody>
    )
  }
}

function BookRow(props){
  return (
    <tr key={props.idx}>
      <td>{props.book.name} </td>
      <td> {props.book.category}</td>
    </tr>
  )
}

// let div = React.createElement('div', {}, 'Hello World')
let booksTable = React.createElement(BooksTable, {books: data})

ReactDOM.render(booksTable, document.getElementById('content'))
