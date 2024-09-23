import style from './FoodInput.module.css';


const FoodItem = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <input type="text" placeholder="enter food item here" 
        className={style.input} onChange={handleChange} />
    )

}

export default FoodItem;