import { sum } from "../sum";
import render from "@testing-library/react"

test("sum function should add 2 numbers" , () => {

    const res = sum(3,4);
    expect(res).toBe(7); // assertion

});