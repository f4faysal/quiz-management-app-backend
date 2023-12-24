"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.password) {
        user.password = config_1.default.default_pass;
    }
    user.password = yield bcrypt_1.default.hash(user.password, Number(config_1.default.bycrypt_salt_rounds));
    const newUser = yield prisma_1.default.user.create({ data: user });
    const { id: userId, role } = newUser;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        newUser,
        accessToken,
        refreshToken,
    };
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isPasswordMatched = (givenPassword, savedPassword) => __awaiter(void 0, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(givenPassword, savedPassword);
    });
    const isUserExist = yield prisma_1.default.user.findUnique({ where: { email } });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    if (isUserExist.password &&
        !(yield isPasswordMatched(password, isUserExist.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    //create access token & refresh token
    const { id: userId, role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return { accessToken };
});
const getProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({ where: { id: userId } });
    return result;
});
exports.UserService = {
    registerUser,
    loginUser,
    getProfile,
};
