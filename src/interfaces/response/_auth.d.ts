declare namespace Auth {
  export interface LoginState {
    isLoading: boolean;
    error: any;
    meInfo: MeInfo | null;
  }

  export interface LoginRequestData {
    email: string;
    password: string;
  }

  export interface LoginRequestPayload {
    data: LoginRequestData;
    callback?: () => void;
  }

  export interface MeInfo {
    uid: string;
    email: string;
    emailVerified: boolean;
    displayName: string;
    isAnonymous: boolean;
    photoURL: string;
    providerData: ProviderData[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
  }

  export interface ProviderData {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
  }

  export interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  }
}
