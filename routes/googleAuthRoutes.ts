import { Router } from "express";
import passport from "passport";
const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

router.get("/auth/failure", (req, res) => {
  res.send("Something went wrong");
});

export default router;
