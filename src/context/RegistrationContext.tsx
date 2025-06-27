"use client";

import {createContext, useContext, useState, type ReactNode} from "react";

export interface TeamMember {
  name: string;
  role: "Coach" | "Hacker" | "Hipster" | "Hustler";
}

export interface Registration {
  id: string;
  school: string;
  schoolLocation: string;
  teamName: string;
  teamMembers: TeamMember[];
  teamEmail: string;
  programmingLanguages: string[];
  mediaConsent: {
    photo: boolean;
    video: boolean;
  };
  termsAccepted: boolean;
  submittedAt: Date;
}

interface RegistrationContextType {
  registrations: Registration[];
  addRegistration: (
    registration: Omit<Registration, "id" | "submittedAt">
  ) => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export function RegistrationProvider({children}: {children: ReactNode}) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  const addRegistration = (
    registration: Omit<Registration, "id" | "submittedAt">
  ) => {
    const newRegistration: Registration = {
      ...registration,
      id: Math.random().toString(36).substr(2, 9),
      submittedAt: new Date(),
    };
    setRegistrations((prev) => [...prev, newRegistration]);
  };

  return (
    <RegistrationContext.Provider value={{registrations, addRegistration}}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (context === undefined) {
    throw new Error(
      "useRegistration must be used within a RegistrationProvider"
    );
  }
  return context;
}
