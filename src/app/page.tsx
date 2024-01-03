"use client";
import React, { useState } from "react";
import { Average, Slide, Search } from "../components";

export default function Home() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <Search onSearch={setSearchResults} />
        </div>
        <div>
          <Slide searchResults={searchResults} />
        </div>
        <div>
          <Average/>
        </div>
      </div>
    </main>
  );
}
