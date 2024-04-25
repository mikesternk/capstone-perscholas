import React, { useState } from "react";
import Navigation from "../Navigation/Navigation.js";
import "./settings.css";

const Settings = () => {
  const [musicVolume, setMusicVolume] = useState(50);
  const [sfxVolume, setSfxVolume] = useState(50);
  const [voiceVolume, setVoiceVolume] = useState(50);
  const [resolution, setResolution] = useState("1920x1080");
  const [quality, setQuality] = useState("high");

  return (
    <>
      <Navigation />
      <div className="settings-container">
        <h1>Game Settings</h1>

        <div className="settings-section">
          <h2>Sound</h2>
          <div className="settings-item">
            <label htmlFor="music-volume">Music Volume</label>
            <input
              type="range"
              id="music-volume"
              min="0"
              max="100"
              step="1"
              value={musicVolume}
              onChange={(e) => setMusicVolume(e.target.value)}
            />
          </div>
          <div className="settings-item">
            <label htmlFor="sfx-volume">SFX Volume</label>
            <input
              type="range"
              id="sfx-volume"
              min="0"
              max="100"
              step="1"
              value={sfxVolume}
              onChange={(e) => setSfxVolume(e.target.value)}
            />
          </div>
          <div className="settings-item">
            <label htmlFor="voice-volume">Voice Volume</label>
            <input
              type="range"
              id="voice-volume"
              min="0"
              max="100"
              step="1"
              value={voiceVolume}
              onChange={(e) => setVoiceVolume(e.target.value)}
            />
          </div>
        </div>

        <div className="settings-section">
          <h2>Graphics</h2>
          <div classname="settings-item">
            <label htmlFor="resolution">Resolution</label>
            <select
              id="resolution"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
            >
              <option value="1920x1080">1920x1080</option>
              <option value="1280x720">1280x720</option>
              <option value="1024x768">1024x768</option>
            </select>
          </div>
          <div classname="settings-item">
            <label htmlFor="quality">Quality</label>
            <select
              id="quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div className="back-button">
          <a href="/skills">Go Back</a>
        </div>
      </div>
    </>
  );
};

export default Settings;
