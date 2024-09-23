import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import GlobalStyles from "@mui/joy/GlobalStyles";

import DashboardCard from "../../components/DashboardCard";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import DashboardProjectsTable from "../../components/DashboardProjectsTable";
import ProjectProgress from "../../components/ProjectProgress";
import Topbar from "../../components/Topbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Add } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        py: 1.5,
        px: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.vars.palette.background.body,
            color: theme.vars.palette.text.primary,
          },
        })}
      />
      <Topbar
        title="Dashboard"
        path="/"
        icon={<HomeRoundedIcon />}
        buttonIcon={<Add />}
        buttonText={"Add Widgets"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="h1">Dashboard</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
            width={0}
            height={0}
          />
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
            width={0}
            height={0}
          />
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
            width={0}
            height={0}
          />
          <DashboardCard
            title="Projects"
            values="10/20"
            icon={<AccountTreeRoundedIcon fontSize="large" />}
            width={0}
            height={0}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <DashboardProjectsTable />
          <ProjectProgress
            width={0}
            height={0}
            value={0}
            fontSize={0}
            cardWidth={0}
            boxShadow={""}
            variant={""}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
