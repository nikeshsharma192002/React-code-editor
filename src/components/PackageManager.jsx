import { useState } from "react";

const PackageManager = ({ addPackage }) => {
  const [packageName, setPackageName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleAddPackage = () => {
    if (!packageName.trim()) {
      setStatusMessage("Please enter a valid package name.");
      return;
    }

    const packageUrl = `https://cdn.skypack.dev/${packageName}`;
    
    // Check if the package URL is accessible
    fetch(packageUrl)
      .then((response) => {
        if (response.ok) {
          addPackage(packageUrl);
          setStatusMessage(`Successfully added: ${packageName}`);
        } else {
          setStatusMessage(`Error: Package "${packageName}" not found.`);
        }
      })
      .catch(() => setStatusMessage(`Network Error: Could not add package "${packageName}".`));

    setPackageName("");
  };

  return (
    <div className="package-manager">
      <input
        type="text"
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        placeholder="Enter package name (e.g., lodash)"
      />
      <button onClick={handleAddPackage}>Add Package</button>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default PackageManager;
