import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import{Context} from '../index.js';
import Pagination from 'react-bootstrap/Pagination';


export const Pages = observer(
	() => {
		const {devices} = useContext(Context)
		const count_pages = Math.ceil(devices.Total/devices.Limit)
		const pages = []
		for (let i = 0; i < count_pages; i++){
			pages.push(i+1)
		}

		return(
				<Pagination className = 'mt-5'>
				{pages.map((number) => 
					<Pagination.Item className = 'lg' key = {number}
					active = {devices.Page === number}
					onClick = {() => devices.setPage(number)}
					>{number}</Pagination.Item>
					)}


				</Pagination>
			)
	}
	)