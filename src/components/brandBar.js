import React,  {useContext} from 'react';
import{Context} from '../index.js';
import {observer} from "mobx-react-lite";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";




// How yo use snippets: https://www.geeksforgeeks.org/how-to-create-snippets-in-sublime-text/

const BrandBar = observer(() => {
	const {devices} = useContext(Context);


	return (
				<Row className = "d-flex flex-row">
				{devices.Brands.map((brand) => 
				<Col className = "col-md-3"  key={brand.id}>
                  	<Card
                    style={{cursor:'pointer'}}
                    className="p-3 text-center"
                    onClick={() => devices.setselectedBrand(brand)}
                    border={brand.id === devices.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
                </Col>
)}
              	</Row>
		);
});

export default BrandBar;

/*{devices.brands.map((brand) => 
                  <Col className = "border border-primery" key = {brand.id}>
                  	<Card className = "p-3">
                  		{brand.name}
                  	</Card>
                  </Col>)}*/