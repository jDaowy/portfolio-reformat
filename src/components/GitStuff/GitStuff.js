import "./GitStuff.css";
import Link from "../Link/Link";
import List from "../List/List";
import React, { useState, useEffect } from "react";

function GitStuff(userName) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  const items = [
    {
      field: "html_url",
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: "repos_url",
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    { field: "name", value: profile.name },
    { field: "location", value: profile.location },
    { field: "bio", value: profile.bio },
  ];

  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(
        `https://api.github.com/users/${userName.userName}`
      );
      const result = await profile.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);
  return (
    <div className="content">
      <div className="me-git">
        <img
          className="profile-avatar"
          src={profile.avatar_url}
          alt={profile.name}
        />
      </div>
      <div>
        <div className="git-gradient">
          <h1 className="git-title">Github Rest API</h1>
        </div>
        <List className="bullets" items={items} />
      </div>
    </div>
  );
}

export default GitStuff;
