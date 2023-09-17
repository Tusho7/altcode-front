export interface MainProps {
  isLoggedIn: boolean;
  user: User | null;
  handleLogout: () => void;
}
