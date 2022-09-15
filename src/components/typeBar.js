import React,  {useContext} from 'react';
import{Context} from '../index.js';
import ListGroup from 'react-bootstrap/ListGroup';
import {observer} from "mobx-react-lite";


// How yo use snippets: https://www.geeksforgeeks.org/how-to-create-snippets-in-sublime-text/

const TypeBar = observer(() => {
	const {devices} = useContext(Context);


	return (
		<ListGroup>
		{devices.Types.map((Type) => 

			<ListGroup.Item key = {Type.id} onClick={() => devices.setselectedTypes(Type)} active = {Type.id === devices.selectedTypes.id} style = {{cursor: 'pointer'}}>{Type.name}</ListGroup.Item>

		)}
	      
	    </ListGroup>
		);
});

export default TypeBar;