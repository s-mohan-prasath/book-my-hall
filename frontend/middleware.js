import { NextResponse } from "next/server";

export async function middleware(request) {
    const protectedRoutes = ["/venueList", "/admin", "/venue"]; // Define protected pages
    const { pathname } = request.nextUrl;

    // console.log("Middleware triggered for path: ", pathname);

    // Retrieve the authToken from cookies (accessible in both if and else blocks)
    const authToken = request.cookies.get("auth_token"); // Retrieve the token from cookies
    // console.log("authToken:", authToken);

    // Check if the current route is protected
    if (protectedRoutes.includes(pathname)) {
        // console.log("Protected route accessed: ", pathname);

        if (!authToken) {
            // console.log("No auth token found. Redirecting to login...");
            const loginUrl = new URL("/login", request.url); // Redirect to login page
            return NextResponse.redirect(loginUrl);
        }

        // Optionally, you can validate the token here (e.g., via API call)
    } else {
        // If authToken is available, send it for verification
        if (authToken) {
            try {
                const response = await fetch(`http://localhost:5000/auth/verify-token?token=${authToken.value}`);
                const data = await response.json();
                if (response.status !== 200) {
                    // console.log("Token is invalid, redirecting to login...");
                    const loginUrl = new URL("/login", request.url);
                    return NextResponse.redirect(loginUrl);
                }
                // console.log("Token is valid", data);  
            } catch (error) {
                // console.error("Error verifying token", error);
                const loginUrl = new URL("/login", request.url); // Redirect to login page in case of error
                return NextResponse.redirect(loginUrl);
            }
        }
    }

    return NextResponse.next(); // Allow request to proceed if authenticated
}
