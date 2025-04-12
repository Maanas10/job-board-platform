import React from "react";
import JobForm from "@/components/JobForm";

export default function PostJobPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Post a Job</h1>
      <JobForm />
    </div>
  );
}
