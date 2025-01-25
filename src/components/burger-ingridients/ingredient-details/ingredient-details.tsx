import ingredientDetailsStyles from "./ingredient-details.module.css";
import { BurgerIngridient } from "../../../utils/data";

interface IngridientDetailsProps {
  ingridient: BurgerIngridient;
}

export default function IngredientDetails(props: IngridientDetailsProps) {
  return (
    <div style={{ paddingBottom: 20 }}>
      <div className={ingredientDetailsStyles.info}>
        <img
          className={ingredientDetailsStyles.img}
          src={props.ingridient.image_large}
          alt={props.ingridient.name}
        />
        <ul className={ingredientDetailsStyles["nutrition-params-list"]}>
          <li
            className={`text text_type_main-default text-center ${ingredientDetailsStyles["nutrition-info-item"]}`}
          >
            Калории, ккал
            <br />
            {props.ingridient.calories}
          </li>
          <li
            className={`text text_type_main-default text-center ${ingredientDetailsStyles["nutrition-info-item"]}`}
          >
            Белки, г<br />
            {props.ingridient.proteins}
          </li>
          <li
            className={`text text_type_main-default text-center ${ingredientDetailsStyles["nutrition-info-item"]}`}
          >
            Жиры, г<br />
            {props.ingridient.fat}
          </li>
          <li
            className={`text text_type_main-default text-center ${ingredientDetailsStyles["nutrition-info-item"]}`}
          >
            Углеводы, г<br />
            {props.ingridient.carbohydrates}
          </li>
        </ul>
      </div>
    </div>
  );
}
