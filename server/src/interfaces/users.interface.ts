import { Schema } from "mongoose";

interface IUsers extends Document {
    name: string;
    email: string;
    password: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
    };
    phone: string;
    orders: Schema.Types.ObjectId[];
    role: 'customer' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}

export default IUsers;