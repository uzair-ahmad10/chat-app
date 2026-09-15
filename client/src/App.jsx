import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

const App = () => {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  // check the user id authenticated or not if not navigate to the login page
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader/>

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080d1f] flex justify-center items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(236,72,153,0.16),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(6,182,212,0.16),transparent_38%)]" />

        {/* Fine grid */}
        <div
          className="
        absolute inset-0
        bg-[linear-gradient(to_right,rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.10)_1px,transparent_1px)]
        bg-[size:16px_16px]
      "
        />

        {/* Purple glow */}
        <div
          className="
        absolute
        -left-32
        -top-32
        h-[500px]
        w-[500px]
        rounded-full
        bg-fuchsia-500/20
        blur-[140px]
      "
        />

        {/* Cyan glow */}
        <div
          className="
        absolute
        -right-32
        bottom-[-100px]
        h-[550px]
        w-[550px]
        rounded-full
        bg-cyan-500/20
        blur-[150px]
      "
        />
      </div>

      {/* App content */}
      <div className="relative z-10 min-h-screen flex justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <ChatPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
};

export default App;
