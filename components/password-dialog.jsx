"use client";
import React from "react";
import { authenticate } from "../lib/auth";

export default function PasswordDialog({ url }) {
  const [error, submitAction] = React.useActionState(authenticate, false);
  
  return (
    <div className="flex flex-col items-center">
      <div className="h-24 w-24 rounded-full bg-zinc-200 absolute -mt-12 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8 text-zinc-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
          />
        </svg>
      </div>
      <div className="p-12 bg-zinc-100 rounded-2xl">
        <form action={submitAction} className="flex flex-col items-center w-full">
          <h2 className="p-lg mt-6 mb-2">This case study is password protected.</h2>
          <p className="text-sm text-balance text-zinc-600 mb-6 max-w-xl text-center">
            I've signed an NDA, so I can't share this work publicly. Please enter the correct password to proceed.
          </p>
          
          <div className="max-w-sm w-full">
            <div className="flex flex-row gap-2 max-w-sm w-full">
              <input
                name="password"
                type="password"
                className={`p-2 border text-zinc-800 transition transition-border rounded-lg h-9 w-full ${
                  error
                    ? "focus:outline-red-500 border-red-500 hover:border-red-600"
                    : "focus:outline-zinc-500 border-zinc-300 hover:border-zinc-400"
                }`}
              />
              <button
                type="submit"
                className="focus:scale-95 hover:bg-zinc-700 transition-all bg-zinc-600 h-9 px-4 text-white rounded-lg text-sm"
              >
                Submit
              </button>
            </div>
            <input type="hidden" name="url" value={url} />
            {error ? (
              <span className="text-xs mt-1.5 block text-red-500">
                This password is incorrect!
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};
