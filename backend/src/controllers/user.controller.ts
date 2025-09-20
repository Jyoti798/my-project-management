// Import necessary types and modules
import { Request, Response } from 'express'; // Types from Express
import { asyncHandler } from '../middlewares/asyncHandler.middleware'; // Middleware to handle async errors
import { HTTPSTATUS } from '../config/http.config'; // HTTP status codes
import { getCurrentUserService } from '../services/user.service'; // Service to get the current user

// Controller to get the current logged-in user
export const getCurrentUserController = asyncHandler(
  async (req: Request, res: Response) => {
    // Extract the user ID from the request object
    const userId = req?.user?._id;

    // Fetch the current user details using the service
    const { user } = await getCurrentUserService(userId);

    // Return the response with HTTP status 200 (OK) and the user details
    return res.status(HTTPSTATUS.OK).json({
      message: 'User fetched successfully',
      user,
    });
  }
);
