
import { UserDocument } from '../models/user.model';
declare global {
  namespace Express {
   
    interface User extends UserDocument {
      // Adding an optional _id property of any type.
      // This is useful because Mongoose ObjectIds are not strictly typed as strings.
      _id?: any;
    }
    interface Request {
      jwt?: string;
    }
  }
}

