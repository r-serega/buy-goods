import { Request, Response } from 'express';
export declare class AppController {
    private firebaseApp;
    constructor();
    getHello(): string;
    getUser(request: Request, response: Response): Promise<void>;
    getUid(request: Request, response: Response): Promise<void>;
    getPhone(request: Request, response: Response): Promise<void>;
    getUidPhone(request: Request, response: Response): Promise<void>;
    getTokenByUid(request: Request, response: Response): Promise<void>;
    getTokenByEmail(request: Request, response: Response): Promise<void>;
    getTokenByPhone(request: Request, response: Response): Promise<void>;
    verifyIdToken(request: Request, response: Response): Promise<void>;
}
