import { User } from '../models/user.interface'

export interface Repository {
    name : string,
    description : string,
    owner : User
}