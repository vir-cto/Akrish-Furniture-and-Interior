// "use client";

// import { useEffect, type ReactNode } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuth, type UserRole } from "./AuthContext";

// interface AuthGuardProps {
//   children: ReactNode;
//   allowedRoles?: UserRole[];
// }

// export default function AuthGuard({
//   children,
//   allowedRoles,
// }: AuthGuardProps) {
//   const router = useRouter();
//   const pathname = usePathname();

//   const { user, isAuthenticated, isLoading, hasRole } = useAuth();

//   useEffect(() => {
//     if (isLoading) return;

//     if (!isAuthenticated) {
//       router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
//       return;
//     }

//     if (allowedRoles && allowedRoles.length > 0 && !hasRole(...allowedRoles)) {
//       router.replace("/interior/dashboard");
//     }
//   }, [
//     isLoading,
//     isAuthenticated,
//     user,
//     pathname,
//     router,
//     allowedRoles,
//     hasRole,
//   ]);

//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-[#f7f9f8]">
//         <div className="text-center">
//           <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" />
//           <p className="text-sm text-slate-600">Checking authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return null;
//   }

//   if (
//     allowedRoles &&
//     allowedRoles.length > 0 &&
//     !hasRole(...allowedRoles)
//   ) {
//     return null;
//   }

//   return <>{children}</>;
// }

"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth, type UserRole, type ModuleAccess } from "./AuthContext";

interface AuthGuardProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
  requiredModule?: ModuleAccess;
}

export default function AuthGuard({
  children,
  allowedRoles,
  requiredModule,
}: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading, hasRole, hasModule } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      return;
    }

    if (allowedRoles && allowedRoles.length > 0 && !hasRole(...allowedRoles)) {
      router.replace("/unauthorized");
      return;
    }

    if (requiredModule && !hasModule(requiredModule)) {
      router.replace("/unauthorized");
      return;
    }
  }, [
    isLoading,
    isAuthenticated,
    user,
    pathname,
    router,
    allowedRoles,
    requiredModule,
    hasRole,
    hasModule,
  ]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7f9f8]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" />
          <p className="text-sm text-slate-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  if (allowedRoles && allowedRoles.length > 0 && !hasRole(...allowedRoles)) {
    return null;
  }

  if (requiredModule && !hasModule(requiredModule)) {
    return null;
  }

  return <>{children}</>;
}