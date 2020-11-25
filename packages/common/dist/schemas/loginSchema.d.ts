import * as yup from "yup";
export declare const loginSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    email: string;
    password: string;
}>, object>;
