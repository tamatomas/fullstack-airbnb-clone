import * as yup from "yup";
export declare const signupSchema: yup.ObjectSchema<yup.Shape<object | undefined, {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    born: Date;
}>, object>;
