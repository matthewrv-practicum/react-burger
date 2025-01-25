import orderDetailsStyles from "./order-details.module.css";
import orderAcceptedImage from "../../../images/order-accepted.svg";

interface OrderDetailsProps {
  orderId: string;
}

export default function OrderDetails(props: OrderDetailsProps) {
  return (
    <div className={`pt-4 pb-20 ${orderDetailsStyles.details}`}>
      <p className={`text text_type_digits-large ${orderDetailsStyles.title}`}>
        {props.orderId}
      </p>
      <p className="mt-8 text text_type_main-medium">идентификатор заказа</p>
      <img className="mt-15" src={orderAcceptedImage} alt="Галочка" />
      <p className="mt-15 text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <p className="mt-2 text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
