import { createAction } from "@reduxjs/toolkit";

//increment це функція. Якщо функцію викликаю increment() то отримую обʼєкт
export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");
export const changeStep = createAction("changeStep");

console.log(increment);

console.log(changeStep());
console.log(changeStep(222));
console.log(changeStep("Hello world"));
