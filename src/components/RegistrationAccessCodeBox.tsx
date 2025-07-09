import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";

type RegistrationAccessCodeProps = {
  length?: number;
  onComplete?: (code: string) => void;
  onResend?: () => void;
};

export function RegistrationAccessCode({
  length = 6,
  onComplete,
}: RegistrationAccessCodeProps) {
  const { _code } = useParams();
  const [code, setCode] = useState<string[]>(new Array(length).fill(""));
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1 || (value && !/^\d$/.test(value))) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError("");

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (
      newCode.every((digit) => digit !== "") &&
      newCode.join("").length === length
    ) {
      onComplete?.(newCode.join(""));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!code[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < pastedData.length && i < length; i++) {
        newCode[i] = pastedData[i];
      }
      setCode(newCode);

      const nextEmptyIndex = newCode.findIndex((digit) => digit === "");
      const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();

      if (newCode.every((digit) => digit !== "")) {
        onComplete?.(newCode.join(""));
      }
    }
  };

  const handleSubmit = async () => {
    const fullCode = code.join("");
    if (fullCode.length !== length) {
      setError(`Please enter all ${length} digits`);
      return;
    }

    setLoading(true);

    const params = {
      code: _code,
      password: code.join(""),
    };

    try {
      const response = await axios.post(
        `https://api.leuteriorealty.com/core-system/v1/public/api/hackathon/confirm-invitation`,
        params,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const invAuthUserData = response.data[0];

        console.log(invAuthUserData);

        const authToken = invAuthUserData.remember_token;

        localStorage.setItem("invitationAuthToken", authToken);
        setSuccess(true);
        setError("");

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (e) {
      const error = e as AxiosError;

      if (error.status === 403) {
        setError("Invalid verification code. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const clearCode = () => {
    setCode(new Array(length).fill(""));
    setError("");
    setSuccess(false);
    inputRefs.current[0]?.focus();
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ width: "30vw", textAlign: "center" }}>
          <Typography variant="h5">Enter Access Code</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            We've sent a {length}-digit code to your email address
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3.5,
              justifyContent: "center",
              mb: 3,
            }}
          >
            {code.map((digit, index) => (
              <TextField
                key={index}
                inputRef={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                onPaste={handlePaste}
                variant="outlined"
                size="small"
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  },
                }}
                sx={{
                  width: 50,
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "primary.main",
                      borderWidth: 2,
                    },
                  },
                }}
                error={!!error}
              />
            ))}
          </Box>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="info" sx={{ mb: 2 }}>
              Verification successful!
            </Alert>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={handleSubmit}
              disabled={code.join("").length !== length}
              fullWidth
              disableElevation
              loading={loading}
            >
              Verify
            </Button>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={clearCode}
                fullWidth
                color="error"
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default function RegistrationAccessCodeBox() {
  const handleComplete = (code: string) => {
    console.log("Verification code entered:", code);
  };

  return <RegistrationAccessCode length={6} onComplete={handleComplete} />;
}
