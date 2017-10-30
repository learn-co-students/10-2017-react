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


class BooksTable extends React.Component {
  render(){
    let foobar = 'something cool'
    return(
      <BookList anything={this.props.books} />
      // React.createElement(BookList, {anything: 'whatever i want'})
    )
  }
}

class BookList extends React.Component {
  render(){
    
    return(
      <div> Foo</div>
    )
  }
}

// let div = React.createElement('div', {}, 'Hello World')
let booksTable = React.createElement(BooksTable, {books: data})

ReactDOM.render(booksTable, document.getElementById('content'))
