import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
} from "@mui/material";
import {CheckCircle, Cancel} from "@mui/icons-material";
import {Registration} from "../../../types/registration";
import StatsCard from "./StatsCard";

interface MediaConsentTableProps {
  data: Registration[];
}

export default function MediaConsentTable({data}: MediaConsentTableProps) {
  return (
    <StatsCard title="Media Consent Details">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Team Name</TableCell>
              <TableCell align="center">Photo Consent</TableCell>
              <TableCell align="center">Video Consent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((registration) => (
              <TableRow key={registration.id}>
                <TableCell component="th" scope="row">
                  <Typography variant="subtitle2">
                    {registration.team_name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {registration.media_consent.photo ? (
                    <Chip
                      icon={<CheckCircle />}
                      label="Consented"
                      color="success"
                      size="small"
                    />
                  ) : (
                    <Chip
                      icon={<Cancel />}
                      label="Declined"
                      color="error"
                      size="small"
                    />
                  )}
                </TableCell>
                <TableCell align="center">
                  {registration.media_consent.video ? (
                    <Chip
                      icon={<CheckCircle />}
                      label="Consented"
                      color="success"
                      size="small"
                    />
                  ) : (
                    <Chip
                      icon={<Cancel />}
                      label="Declined"
                      color="error"
                      size="small"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StatsCard>
  );
}
