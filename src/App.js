import React, { Component } from "react"
import Header from './components/Header'
import Home from './components/Home'
import Student from './components/Student'
import { persons } from './components/json'
import { opdrachtData } from './components/json'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {

  constructor() {
    super()
    this.state = {
      students: persons,
      studentsFiltered: '',
      opdrachtData: opdrachtData,
      filteredData: opdrachtData,
      showAverage: true,
      difficulty: true,
      fun: true,
      buttonClicked: true,
      selectedStudent: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      studentsFiltered: this.studentsFiltered(this.state.opdrachtData)
    })
  }

  studentsFiltered(opdrachtData) {
    const studentsFiltered = [...new Set(opdrachtData.map(student => student.student).sort(function (a, b) {
      let x = a.toLowerCase();
      let y = b.toLowerCase();
      if (x > y) { return 1; }
      if (x < y) { return -1; }
      return 0;
    }))]
    return studentsFiltered
  }

  studentNav = this.studentsFiltered(opdrachtData).map(item => {
    const studentUrl = '/Student/' + item
    return (
      <li key={item}>
        <Link to={studentUrl}>{item}</Link>
      </li>
    )
  })

  handleClick(event) {
    const { name } = event.target
    name === 'buttonClicked' ?
      this.setState({
        [name]: !this.state.buttonClicked
      }) :
      (name === 'difficulty' ?
        this.setState({
          [name]: !this.state.difficulty
        }) :
        this.setState({
          [name]: !this.state.fun
        })
      )
  }

  handleChange(event) {
    const studentsSelected = Array.from(event.currentTarget.elements)
      .filter((element) => element.checked && element.getAttribute('type') === 'checkbox')
      .map((element) => element.value)
    const newOpdrachtData = this.state.opdrachtData.filter((name) =>
      studentsSelected.includes(name.student)
    )
    this.setState({
      filteredData: newOpdrachtData
    })
  }

  refreshPage() {
    window.location.reload();
  }


  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <nav>
              <ul className='navbar'>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className='navbar'>{this.studentNav}</ul>
            </nav>

            <Switch>
              <Route path="/Student/:name">
                <Student
                  opdrachtData={this.state.opdrachtData}
                  difficulty={this.state.difficulty}
                  fun={this.state.fun}
                  buttonClicked={this.state.buttonClicked}
                  handleClick={this.handleClick}
                  difficulty={this.state.difficulty}
                  fun={this.state.fun}
                  students={this.state.students}
                />
              </Route>
              <Route path="/">
                <Home
                  opdrachtData={this.state.filteredData}
                  difficulty={this.state.difficulty}
                  fun={this.state.fun}
                  buttonClicked={this.state.buttonClicked}
                  handleClick={this.handleClick}
                  students={this.state.students}
                  handleChange={this.handleChange}
                  refreshPage={this.refreshPage}
                />
              </Route>
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App