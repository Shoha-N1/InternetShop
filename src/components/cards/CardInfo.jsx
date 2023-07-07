import { useContext } from "react";

export default function CardInfo(props){

  const { id, title, price, images} = props.data;
  const { viewProductDetails } = useContext()


  return (
    <div></div>
  )
}