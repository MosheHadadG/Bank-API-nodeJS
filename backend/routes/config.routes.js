import adminRouter from "./admin.route.js"
import usersRouter from "./users.route.js";
import depositRouter from "./deposit.route.js";
import creditRouter from "./credit.route.js";
import withdrawRouter from "./withdraw.route.js";
import transferRouter from "./transfer.route.js";


export const routesApp = (app) => {

  app.use("/admin", adminRouter);
  app.use("/admin/users", usersRouter);
  app.use("/admin/deposit", depositRouter);
  app.use("/admin/credit", creditRouter);
  app.use("/admin/withdraw", withdrawRouter);
  app.use("/admin/transfer", transferRouter);

}