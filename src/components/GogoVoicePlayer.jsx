import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";

const activePlayers = new Map();

function stopAllOtherPlayers(currentKey) {
  activePlayers.forEach((stopFn, key) => {
    if (key !== currentKey) {
      stopFn();
    }
  });
}

function GogoVoicePlayer({ text }) {
  const [isPreparing, setIsPreparing] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [isSupported, setIsSupported] = useState(false);
  const playerKey = useRef(`gogo-voice-${Date.now()}-${Math.random()}`);
  const utteranceRef = useRef(null);

  useEffect(() => {
    const hasSpeechSupport =
      typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      "SpeechSynthesisUtterance" in window;

    setIsSupported(hasSpeechSupport);

    if (!hasSpeechSupport) {
      setIsPreparing(false);
      setError("Voice is unavailable right now.");
      return;
    }

    const speakReady = () => {
      setIsPreparing(false);
    };

    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      speakReady();
      return;
    }

    const handleVoicesChanged = () => {
      if (window.speechSynthesis.getVoices().length > 0) {
        speakReady();
        window.speechSynthesis.removeEventListener(
          "voiceschanged",
          handleVoicesChanged,
        );
      }
    };

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged,
    );

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged,
      );
    };
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      activePlayers.delete(playerKey.current);
    };
  }, []);

  const stopCurrentPlayback = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsPlaying(false);
    setProgress(0);
    activePlayers.delete(playerKey.current);
  };

  const handleReplay = () => {
    if (!text || !text.trim()) {
      setError("Voice is unavailable right now.");
      return;
    }

    stopCurrentPlayback();
    startPlayback();
  };

  const startPlayback = () => {
    if (!text || !text.trim()) {
      setError("Voice is unavailable right now.");
      return;
    }

    if (!(typeof window !== "undefined" && "speechSynthesis" in window)) {
      setError("Voice is unavailable right now.");
      return;
    }

    stopAllOtherPlayers(playerKey.current);
    setError("");

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPreparing(false);
      setIsPlaying(true);
      setProgress(0);
    };

    utterance.onboundary = (event) => {
      const totalLength = Math.max(text.length, 1);
      const ratio = Math.min(100, ((event.charIndex || 0) / totalLength) * 100);
      setProgress(ratio);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 500);
    };

    utterance.onerror = () => {
      setError("Voice is unavailable right now.");
      setIsPreparing(false);
      setIsPlaying(false);
      setProgress(0);
    };

    utteranceRef.current = utterance;
    activePlayers.set(playerKey.current, () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
      setProgress(0);
      activePlayers.delete(playerKey.current);
    });

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    if (!text || !text.trim()) {
      setError("Voice is unavailable right now.");
      return;
    }

    if (!isSupported) {
      setError("Voice is unavailable right now.");
      return;
    }

    if (isPlaying) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.pause();
      }
      setIsPlaying(false);
      return;
    }

    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      window.speechSynthesis.paused
    ) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      return;
    }

    startPlayback();
  };

  return (
    <div className="mb-3 w-full max-w-md rounded-2xl border border-[#1F6B45]/15 bg-[#F5F1E8] p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handlePlayPause}
          disabled={isPreparing || !!error}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F6B45] text-[#F5F1E8] transition hover:bg-[#185638] disabled:cursor-not-allowed disabled:opacity-60"
          aria-label={isPlaying ? "Pause Gogo voice" : "Play Gogo voice"}
        >
          {isPlaying ? (
            <Pause size={16} />
          ) : (
            <Play size={16} className="ml-0.5" />
          )}
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Volume2 size={16} className="shrink-0 text-[#173B2B]" />
          <span className="truncate text-sm font-medium text-[#173B2B]">
            {isPreparing ? "Preparing Gogo's voice..." : "Listen to Gogo"}
          </span>
        </div>

        <button
          type="button"
          onClick={handleReplay}
          className="rounded-full border border-[#1F6B45]/20 bg-[#EAE5D7] px-2.5 py-1.5 text-[11px] font-medium text-[#173B2B] transition hover:bg-[#E0D9C8]"
        >
          Replay
        </button>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#DCEBDD]">
        <div
          className="h-full rounded-full bg-[#1F6B45] transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {error && <p className="mt-2 text-xs text-[#173B2B]/75">{error}</p>}
    </div>
  );
}

export default GogoVoicePlayer;
