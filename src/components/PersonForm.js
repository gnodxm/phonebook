const PersonForm = (props) => {
	return (
		<form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newPerson.name} onChange={(event)=>props.setNewPerson({...props.newPerson,name: event.target.value})} />
        </div>
				<div>
          number: <input value={props.newPerson.number} onChange={(event)=>props.setNewPerson({...props.newPerson,number: event.target.value})} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
	)
}

export default PersonForm