const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message: "Name must be atleast of 3 characters"})
    .max(255, {message: "Name must not be moret han 255 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be atleast of 3 characters"})
    .max(255, {message: "Email must not be moret han 255 characters"}),

    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message: "Phone must be atleast of 10 characters"})
    .max(20, {message: "Phone must not be moret han 20 characters"}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(6, {message: "Password must be atleast of 6 characters"})
    .max(1024, {message: "Password must not be moret han 1024 characters"}),
    
});

module.exports = signupSchema;