import React from "react";
import ReactGithubCalendar from 'react-github-calendar';


const GitHubCalendar = ({ username }) => {
  const myTheme = {
    light: ["#0e4228", "#006a31", "#25a13f", "#37cc50", "#2bed4b"],
    dark: ["#0e4228", "#006a31", "#25a13f", "#37cc50", "#2bed4b"],
  };

  return (
    <ReactGithubCalendar username={username} theme={myTheme} />
  );
};

export default GitHubCalendar;
