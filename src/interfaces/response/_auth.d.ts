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
    email?: string | null;
    _id?: string;
    token?: string;
    refresh_token?: string;
  }
}
