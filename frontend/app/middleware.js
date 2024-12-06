import { NextResponse } from "next/server";

export function middleware(request) {
    const protectedRoutes = ["/venueList", "/admin", "/venueDetails"]; // Define protected pages
    const { pathname } = request.nextUrl;

    // Check if the current route is protected
    if (protectedRoutes.includes(pathname)) {
        const authToken = request.cookies.get("auth_token"); // Retrieve the token from cookies

        if (!authToken) {
            const loginUrl = new URL("/login", request.url); // Redirect to login page
            return NextResponse.redirect(loginUrl);
        }

        // Optionally, you can validate the token with your backend here (optional step)
    }

    return NextResponse.next(); // Allow request to proceed if authenticated
}
