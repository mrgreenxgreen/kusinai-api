import { UpdateQuery } from "mongoose";
import User from "../model/User";

export const updateUserById = async (id: string, data: UpdateQuery<{ createdAt: NativeDate; updatedAt: NativeDate; } & { username: string; name: string; password: string; role: string; }> | undefined) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };