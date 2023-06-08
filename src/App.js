import { useState,useEffect } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:3001/api/persons')
			.then(response => {
				setPersons(response.data)
			})
	}, [])

  const [newPerson, setNewPerson] = useState({name:'',number:''})

	const [filter, setFilter] = useState('')
	// const [filteredPersons,setFilteredPersons] = useState(persons)

	const addPerson = (event) => {
		event.preventDefault()
		if (persons.some(person=>person.name===newPerson.name)) {
			window.alert(`${newPerson.name} is already added to phonebook`)
		} else {
			setPersons(persons.concat({...newPerson, id:persons[persons.length-1].id + 1}))
		}
		setNewPerson({name:'',number:''})
	}

	const filteredPersons = !filter
		? persons
		: persons.filter(person=>person.name.toLowerCase().includes(filter))

	
  return (
    <div>
      <h2>Numberbook</h2>
			<Filter filter={filter} setFilter={setFilter} />
			<h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newPerson={newPerson} setNewPerson={setNewPerson}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}  />
    </div>
  )
}

export default App