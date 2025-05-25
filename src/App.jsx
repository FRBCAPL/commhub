import React, { useState } from "react";
import PinLogin from "./components/PinLogin";
import Dashboard from "./components/Dashboard";
import PlayerSearch from "./components/PlayerSearch"; // Adjust path as needed

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [showPlayerSearch, setShowPlayerSearch] = useState(false);

  // Called when user logs in
  const handleLoginSuccess = (name) => {
    setUserName(name);
    setIsAuthenticated(true);
  };

  // Called when "Schedule a Match" is clicked
  const handleScheduleMatch = () => {
    setShowPlayerSearch(true);
  };

  // Called when a player is selected from the search
  const handlePlayerSelected = (player) => {
    setShowPlayerSearch(false);
    // TODO: Show availability popup or next step
    alert(`You selected: ${player.firstName} ${player.lastName}`);
    // You can now show the availability modal or continue scheduling
  };

  // Called when player search is closed/canceled
  const handleClosePlayerSearch = () => {
    setShowPlayerSearch(false);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <PinLogin onSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Dashboard
            playerName={userName}
            onScheduleMatch={handleScheduleMatch}
            onOpenChat={() => alert("Chat coming soon!")}
          />
          {showPlayerSearch && (
            <PlayerSearch
              onSelect={handlePlayerSelected}
              onClose={handleClosePlayerSearch}
              excludeName={userName}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
