import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function AuthRequired({ children }: { children: ReactNode }) {
    const userName = useSelector((s: RootState) => s.user?.name);
    if (!userName) {
        return <Navigate to='/login' replace />
    }
    return children;
}