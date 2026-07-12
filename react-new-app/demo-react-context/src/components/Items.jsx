import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((data) => <ItemCard 
                            key={data.id}
                            id ={data.id}
                            name={data.name} 
                            price={data.price} /> )}
      
    </div>
  );
}

export default Items;
