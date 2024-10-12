1.  Install @reduxjs/toolkit + react-redux
2.  Install devTools один раз на все життя!

3.  Create redux folder

4.  Створити файл store.js

5.  У файлі store.js - створюємо store

    export const store = configureStore({
    reducer: {
    },
    });

6.  Створюємо папку фічі (auth, products, contacts, counter)

7.  В папці фічі створюємо базовий набір

    reducer.js
    selectors.js
    actions.js

8.  Ідемо в reducer.js і налаштовуємо його

        const initialState = {
        counter: 1,
        step: 1,
        };

        export const counterReducer = (state = initialState, action) => {
        return state
        };

9.  Підключаємо редьюсер в стор

    export const store = configureStore({
    reducer: {
    counter: counterReducer
    },
    });

10. Підключити редакс до UI. Ідемо в main.js огортаємо компонентом і передаємо створений стор

    <Provider store={store}>
    <App />
    <Toaster />
    </Provider>

11. Ми можемо побачити наш редакс в девтулз

12. В компоненті використовуємо селектори для отримання даних з редакс

13. Для цього в файлі selectors.js створюємо потрібний селектор

    export const selectCounter = state => state.counter.counter;
    export const selectStep = state => state.counter.step;

14. Підключаємо useDispatch для передачі команд (екшенів) до редакса

15. Створюємо в файлі actions.js перші екшени

    export const increment = createAction('increment');
    export const decrement = createAction('decrement');
    export const reset = createAction('reset');
    export const changeStep = createAction('changeStep');

16. Викликаємо потрібний екшен по події ( клік, сабміт, чендж)

    const dispatch = useDispatch();

    const handlePlusClick = () => {
    dispatch(increment(3));
    };

17. В reducer.js ловимо екшен і опрацьовуємо його

    export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
    case increment.type:
    return {
    ...state,
    counter: state.counter + state.step,
    };

    default:
    return state; // обов'язково має повертати по дефолту стан

    }
    };

18. Дивимось логи в девтулз
