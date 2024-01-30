import { http, HttpResponse } from "msw";
import { db, persistDb } from "../db";
import bcrypt from "bcrypt";
import { v4 } from "uuid";

export const authHandlers = [
  http.post("/auth/register", async ({ request }) => {
    const user: any = await request.json();
    const oldUser = db.user.findFirst<any>({
      where: {
        email: user.email,
      },
    });

    if (oldUser) {
      return HttpResponse.json({ message: "User already exists" });
    }

    const id = v4();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    db.user.create({
      id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hashedPassword,
    });

    persistDb("user");

    HttpResponse.json({
      message: "Account created successfully",
    });
  }),
];
