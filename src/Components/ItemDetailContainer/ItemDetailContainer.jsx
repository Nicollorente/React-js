
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {doc,getDoc} from "firebase/firestore"
import { db } from '../../fireStore/Config';


const ItemDetailContainer = () => {
const [item,SetItem]=useState({});

const id=  useParams().id;


useEffect(()=>{

const docRef = doc(db,"productos",id);
getDoc(docRef)
.then ((resp)=>{

  SetItem ({

...resp.data(),id: resp.id

  })


})

},[id])

  return (
    <div>
      
  <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer