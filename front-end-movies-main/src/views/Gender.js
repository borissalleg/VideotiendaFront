import React, {
  useState,
  useEffect
} from "react";
import {
  Row,
  Col,
  Container,
  Table
} from "react-bootstrap";
import GenderService from '../services/GenderService'


function Home() {

  const [genders, setGenders] = useState([]);

  useEffect(() => {
    handleGetGenders();
  }, []);

  const handleGetGenders = async () => {
    try {
      const response = await GenderService.get();
      //setGenders(null);
      setGenders(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  return ( <Container className = "App container" >
    <Row>
      < Col lg = {12} >
          <h4 className = "color-text" > Categorias </h4>
          <ul> {
                  genders.map(g => {
                    return ( 
                      < li key = {g.id} >
                        { g.name } 
                      </li>
                    )
                  })
                } 
          </ul>
       </Col>
    </Row> 
    </Container>
  );
}
export default Home;