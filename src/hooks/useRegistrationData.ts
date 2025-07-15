import { useState, useEffect } from "react";
import { Registration } from "../types/registration";
import { fetchRegistrations } from "../services/api";

export const useRegistrationData = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRegistrations();
        setRegistrations(data);
      } catch (err) {
        setError("Failed to fetch registration data");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { registrations, loading, error };
};
