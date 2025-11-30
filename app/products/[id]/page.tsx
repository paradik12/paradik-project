// Placeholder page - Not to be built yet
// This route exists only as a placeholder for homepage links

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function ProductDetailPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Product Detail Page</h1>
      <p className="text-muted-foreground mb-6">
        This page is under development. Please return to the homepage.
      </p>
      <Link href="/">
        <Button>
          <Home className="h-4 w-4 mr-2" />
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}

