
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-anime-dark p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-6 anime-title">404</h1>
        <p className="text-xl text-anime-light mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-muted-foreground mb-8">
          The show you're looking for might have ended or moved to another streaming service.
        </p>
        <Button asChild className="bg-anime-primary hover:bg-anime-primary/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
