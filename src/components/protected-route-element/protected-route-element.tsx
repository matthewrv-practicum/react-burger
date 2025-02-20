import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../services/auth";
import Loader from "../loader/loader";
import styles from "./protected-route-element.module.css";

export default function ProtectedRouteElement(props: {
  element: ReactElement;
}) {
  const auth = useAuthContext();

  switch (auth.authentication) {
    case "in progress": {
      return (
        <div className={styles.wrapper}>
          <Loader />
        </div>
      );
    }
    case "anonymous": {
      return <Navigate to="/login" />;
    }
    case "authenticated": {
      return props.element;
    }
  }
}
