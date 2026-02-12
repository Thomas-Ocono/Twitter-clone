import express from "express";
import jwt from "jsonwebtoken";

export const tokenAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "No cookie" });
    return;
  }
  try {
    const checkCookie = jwt.verify(token, process.env.JWT_SECRET);
    req.username = checkCookie.username;
    console.log(req.username);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid Cookie" });
  }
};
