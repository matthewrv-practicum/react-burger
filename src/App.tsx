import { useEffect } from "react";
import appStyles from "./App.module.css";
import AppHeader from "./components/app-header/app-header";
import { fetchIngredients } from "./services/ingredients";
import { useAppDispatch, useAppSelector } from "./services/hooks";
import Loader from "./components/loader/loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";

function App() {
  const { ingredientsRequestStatus } = useAppSelector(
    (state) => state.ingredients
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  switch (ingredientsRequestStatus) {
    case "request":
      return <Loader />;
    case "error":
      return (
        <div className={appStyles.error}>
          <h1 className="text text_type_main-large text-center">
            Ошибка запроса
          </h1>
          <p className="text text_type_main-default text-center">
            Не удалось получить список ингридиентов.
          </p>
          <p className="text text_type_main-default text-center">
            Попробуйте перезагрузить страницу.
          </p>
        </div>
      );

    case "success":
      return (
        <>
          <AppHeader />
          <main className={`${appStyles.main} pl-5 pr-5`}>
            <BrowserRouter>
              <Routes>
                <Route index element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </main>
        </>
      );
  }
}

export default App;
