
import './App.css';
import {Component} from 'react';
import {Container, Button, ButtonGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core/';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      total: null,
      per_page: null,
      current_page: null
    };
  }

  makeHttpRequestWithPage = async pageNumber => {
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    this.setState({
      users: data.data,
      total: data.total,
      per_page: data.per_page,
      current_page: data.page,
    });
  }

  componentDidMount() {
    document.title = "Pagination";
     this.makeHttpRequestWithPage(1) ;
  }

  
  


    


  render() {

    let users;

    if (this.state.users !== null) {
      users = this.state.users.map(user => (

         <TableRow key={user.id}>
          
          <TableCell align="left">{user.id}</TableCell>
          <TableCell align="left">{user.first_name}</TableCell>
          <TableCell align="left">{user.last_name}</TableCell>
          
        </TableRow>

       
      )); 
    }
    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);
      }
    }


    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <Button key={number} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</Button>
      );
    });
    

      return (
        <Container maxWidth="sm">
        <div className = "App">
          <h1>Pagination Test</h1>
        
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
              
                {users}
              </TableBody>
            </Table>
    </TableContainer>
    <div className = "Pagination">
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {renderPageNumbers}
      </ButtonGroup>
 
    </div>

       </div>
       </Container>
     );
    }
  
}

export default App;
