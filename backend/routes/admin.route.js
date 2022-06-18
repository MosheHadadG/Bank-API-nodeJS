import express from 'express';

const adminRouter = express.Router();


// /admin
adminRouter.get("/", (req, res) => {
  res.json({msg: "Admin Ok"})
})


export default adminRouter;