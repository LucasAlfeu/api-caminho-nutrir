interface IJwtData {
    uid: number;
}
export declare const JWTService: {
    sign: (data: IJwtData) => string | "JWT_SECRET_NOT_FOUND";
    verify: (token: string) => IJwtData | "JWT_SECRET_NOT_FOUND" | "INVALID_TOKEN";
};
export {};
//# sourceMappingURL=JWTService.d.ts.map