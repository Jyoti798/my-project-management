// Importing necessary types and modules
import { NextFunction, Request, Response } from 'express'; // Types from Express
import { asyncHandler } from '../middlewares/asyncHandler.middleware'; // Custom middleware to handle async errors
import { registerSchema } from '../validation/auth.validation'; // Schema for registration validation
import { HTTPSTATUS } from '../config/http.config'; // HTTP status codes
import { registerUserService, verifyUserService } from '../services/auth.service'; // Service to handle user registration
import passport from 'passport'; // Passport.js for authentication
import { signJwtToken } from '../utils/jwt';

// User registration controller
export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    // Validate the request body using the registration schema
    const body = registerSchema.parse({ ...req.body });

    // Call the registration service to create a new user
    await registerUserService(body);

    // Send a success response with status 201 (Created)
    return res.status(HTTPSTATUS.CREATED).json({
      message: 'User registered successfully',
    });
  }
);

// User login controller
export const loginController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Authenticate the user using the local strategy configured with Passport
    passport.authenticate(
      'local',
      (
        err: Error | null, // Error object, if any
        user: Express.User | false, // Authenticated user object or false if not authenticated
        info: { message: string } | undefined // Additional information, if available
      ) => {
        // Handle any errors that occurred during authentication
        if (err) {
          return next(err); // Pass the error to the next middleware
        }

        // If no user is found, return a 401 (Unauthorized) response
        if (!user) {
          return res.status(HTTPSTATUS.UNAUTHORIZED).json({
            message: info?.message || 'Invalid email and password',
          });
        }

        const access_token = signJwtToken({ userId: user._id });

        return res.status(HTTPSTATUS.OK).json({
          message: 'Logged in successfully',
          access_token,
          user,
        });
      }
    )(req, res, next); // Immediately call the authentication function with request, response, and next
  }
);

// User logout controller
export const logOutController = asyncHandler(async (req: Request, res: Response) => {
  // Clear the session data to fully log out the user
  req.session = null;

  // Send a success response confirming logout
  return res.status(HTTPSTATUS.OK).json({
    message: 'Logged out successfully',
  });
});