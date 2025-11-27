import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { error } from "console";

export const getAllUsers = (req: Request, res: Response) => {
    return res.json(userService.getAll());
};

export const getUserById = (req: Request, res: Response) => {
    const user = userService.getById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found'});
};

export const createUser = (req: Request, res: Response) => {
    const result = userService.create(req.body);
    if ('error' in  result) return res.status(409).json(result);
    return res.status(201).json(result);
};

export const updateUser = (req: Request, res: Response) => {
    const result = userService.update(req.params.id, req.body);
    if (!result) return res.status(404).json({ error: 'User not found' });
  if ('error' in result) return res.status(409).json(result);
  return res.json(result);
};

export const deleteUser = (req: Request, res: Response) => {
  const result = userService.delete(req.params.id);
  if (result !== true) return res.status(404).json(result);
  return res.status(204).send();
};