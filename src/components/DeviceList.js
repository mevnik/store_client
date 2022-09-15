import React,  {useContext} from 'react';
import{Context} from '../index.js';
import {observer} from "mobx-react-lite";
import Row from 'react-bootstrap/Row';
import DeviceItem from './DeviceItem.js'


const DeviceList = observer(() => {
	const {devices} = useContext(Context);
	return (
				<Row className = "d-flex flex-row">
					{devices.Devices.map((device) => 
					<DeviceItem key={device.id} device = {device}/>
	                  	
					)}
              	</Row>
		);
});

export default DeviceList;