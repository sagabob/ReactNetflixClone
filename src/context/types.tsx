import { Auth, User, UserCredential } from "firebase/auth";
import { ReactNode } from "react";

export interface FagItem {
  id: number;
  header: string;
  body: string;
}

export interface ToggleContextProps {
  toggleItem: string;
  setToggleItem: (item: string) => void;
}

export interface AuthProviderProps {
  children?: ReactNode;
}

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  updateProfile: (
    user: User,
    {
      displayName,
      photoURL,
    }: {
      displayName?: string | null;
      photoURL?: string | null;
    }
  ) => Promise<void>;
  logOut: () => Promise<void>;
}

export interface BannerSliderModel {
  index: number;
  goToPreviousSlide: () => void;
  goToNextSlide: () => void;
  goToSlide: (i: number) => void;
}
