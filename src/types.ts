export enum Gender {
  Male = 1,
  Female = 0,
}

export type Role = "coach" | "hacker" | "hipster" | "hustler";

export interface Member {
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: Gender;
  email: string;
  phone_number: string;
  fb_link: string;
  role: Role;
}

type MediaConsent = {
  photo: boolean;
  video: boolean;
};

export interface Participant {
  school: string;
  school_address: string;
  team_name: string;
  team_email: string;
  prog_languages: string[];
  other_prog_languages: string;
  media_consent: MediaConsent;
  terms_accepted: boolean;
  members: Member[];
}

export interface UserData {
  name: string;
  email: string;
  participants: Participant[];
}
