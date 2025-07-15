import {useState} from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Chip,
  IconButton,
  Collapse,
} from "@mui/material";
import {
  Facebook,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import {Registration, Member} from "../../../types/registration";
import StatsCard from "./StatsCard";

const Row = ({registration}: {registration: Registration}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{"& > *": {borderBottom: "unset"}}}>
        <TableCell component="th" scope="row">
          {registration.id}
        </TableCell>
        <TableCell sx={{fontWeight: 700}}>{registration.team_name}</TableCell>
        <TableCell>{registration.school}</TableCell>
        <TableCell>{registration.school_address}</TableCell>
        <TableCell>{registration.team_email}</TableCell>
        <TableCell>
          <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
            {registration.prog_languages.map((lang) => (
              <Chip
                key={lang}
                label={lang}
                size="small"
                sx={{
                  background: "#f3f4f6",
                  color: "#374151",
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        </TableCell>
        <TableCell>
          {new Date(registration.created_at).toLocaleString("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          at {new Date(registration.created_at).toLocaleTimeString()}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: 1}}>
              <Typography variant="h6" gutterBottom component="div">
                <Typography
                  component={"span"}
                  variant="h6"
                  sx={{fontWeight: 600, fontStyle: "italic"}}>
                  "{registration.team_name}"
                </Typography>{" "}
                Members:
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Social</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {registration.members.map((member: Member) => (
                    <TableRow key={member.id}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{textTransform: "capitalize"}}>
                        {`${member.first_name} ${member.last_name}`}
                      </TableCell>
                      <TableCell sx={{textTransform: "capitalize"}}>
                        {member.role}
                      </TableCell>
                      <TableCell sx={{textTransform: "capitalize"}}>
                        {member.gender === "0" ? "Female" : "Male"}
                      </TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.phone_number}</TableCell>
                      <TableCell>
                        {member.fb_link ? (
                          <Typography
                            component={"a"}
                            href={member.fb_link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Facebook />
                          </Typography>
                        ) : (
                          <Typography>None</Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default function TeamRegistrationsTable({data}: {data: Registration[]}) {
  return (
    <StatsCard title="Team Registrations">
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow
              sx={{
                background: "#f9fafb",
                "& .MuiTableCell-head": {
                  fontWeight: 600,
                  color: "#374151",
                },
              }}>
              {/* <TableCell /> */}
              <TableCell>ID</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>School</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Date Registered</TableCell>
              <TableCell>See Members</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((registration) => (
              <Row key={registration.id} registration={registration} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StatsCard>
  );
}
