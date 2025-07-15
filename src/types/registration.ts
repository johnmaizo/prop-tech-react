export interface Member {
  id: number;
  participant_id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  gender: "0" | "1";
  email: string;
  phone_number: string;
  fb_link: string;
  role: "hacker" | "coach" | "hustler" | "hipster";
  created_at: string | null;
  updated_at: string | null;
}

export interface Registration {
  id: number;
  hack_id: number | null;
  invitation_id: number | null;
  school: string;
  school_address: string;
  team_name: string;
  team_email: string;
  prog_languages: string[];
  other_prog_languages: string | null;
  media_consent: {
    photo: boolean;
    video: boolean;
  };
  terms_accepted: number;
  status: "pending" | "approved" | "rejected";
  updated_at: string;
  created_at: string;
  members: Member[];
}
