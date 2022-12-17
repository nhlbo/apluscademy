import express from 'express'

const asyncHandler =
  (fn: express.Handler) => (req: express.Request, res: express.Response, next: express.NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)

export { asyncHandler }
