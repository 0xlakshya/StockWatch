import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
const AuthModal = dynamic(() => import("@/components/Auth"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  const auth = useAuth();
  return (
    <>
      <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
        {!auth?.authLoading && <AuthModal />}
      </AuthProvider>
    </>
  );
}
