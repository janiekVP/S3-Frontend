import React from 'react';
import CollectionService from '../../services/CollectionService';
import UserService from '../../services/UserService';
import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

function CollectionPage() {
    const inputvalues = { id: 0, userId: 0, items: []};
    const [collection, setCollection] = useState(inputvalues);
    const navigate = useNavigate();
    const { id } = useParams();
    


        useEffect(() => {
            CollectionService.GetById(id)
            .then(resp => {
              console.log(resp);
              console.log(resp.data); 
              const { id, userId, items} = resp.data
              setCollection({ id, userId, items})
            })
            console.log(collection);
            console.log(collection.items);
          }, []);


          const listItems = collection.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))

          

        return (
            

            <div>
                <Container fluid>
                    <h3>collection</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Item</th>
                            <th width="30%">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listItems}
                        </tbody>
                    </Table>
                </Container>
            </div>      

         );
    }


export default CollectionPage;