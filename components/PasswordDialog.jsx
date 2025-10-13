"use client";
import React from "react";
import { authenticate } from "../lib/auth";
import PixelBorderBox from "./PixelBorderBox";

export default function PasswordDialog({ url }) {
  const [error, submitAction] = React.useActionState(authenticate, false);

  return (
    <div className="max-w-3xl w-full flex flex-col items-center">
      <PixelBorderBox color="duotone-outlined" size="lg" className="relative top-12 h-24 w-24 aspect-square">
        <img src="/inventory/key.svg" className="scale-105" draggable={false}></img>
      </PixelBorderBox>

      <PixelBorderBox size="lg" color="duotone" className="w-full">
        <div className="p-12 w-full">
          <form action={submitAction} className="flex flex-col items-center w-full">
            <h2 className="title-2 mt-6 mb-3 text-center">This case study is password protected.</h2>
            <p className="text-balance text-sm mb-8 max-w-xl text-center">
              I've signed an NDA, so I can't share this work publicly. Please enter the correct password to proceed.
            </p>

            <div className="max-w-sm w-full">
              <div className="flex flex-row gap-2 max-w-sm w-full">
                <input
                  name="password"
                  type="password"
                  className={`p-2 cursor-text border text-white font-pixel-mono transition transition-border h-9 w-full ${error
                    ? "focus:outline-[#CC666E] border-[#CC666E]"
                    : "focus:outline-[#8A8EA8] border-[#6C7193] hover:border-[#7A82B8]"
                    }`}
                />
                <button
                  type="submit"
                  className="focus:scale-95 cursor-gauntlet font-pixel-mono hover:bg-[#474F85] transition-all bg-[#5963A6] h-9 px-4 text-white text-2xl"
                >
                  <span className="block mb-0.5">
                    SUBMIT</span>
                </button>
              </div>
              <input type="hidden" name="url" value={url} />

              <div className="h-4 mt-1">
                {error && (
                  <p className="text-sm text-[#CC666E]">
                    Incorrect password
                  </p>
                )}
              </div>


              {/* {error ? (
                <span className="text-xs mt-1.5 text-red-500">
                  This password is incorrect!
                </span>
              ) : null} */}
            </div>
          </form>
        </div>
      </PixelBorderBox>
    </div>
  );
};
